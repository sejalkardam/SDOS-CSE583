import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import { useParams, Link, useNavigate } from "react-router-dom";
import CakeCard from "../components/CakeCard";
import Drift from "react-driftjs";
import axios from "axios";
import Popup from "reactjs-popup";
import { auth, provider } from "../googleAuthClient";

export default function CakeProductPage() {
  const { slug } = useParams();
  const [modeOfPayment, setModeOfPayment] = useState("cashOnDelivery");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      console.log("Went to online");

      setModeOfPayment("onlinePayment");

    } else {
      console.log("Went to offline");
      setModeOfPayment("cashOnDelivery");
    }
    console.log(modeOfPayment);
  };

  const createOrder = async (mode_Payment, status_Payment) => {
    console.log("create order");
    const email = localStorage.getItem("paa_emailID");
    if (!email) {
      alert("Please login to place an order");
      return;
    }
    const name = localStorage.getItem("paa_displayName");
    const phoneNum = document.getElementById("phoneNumber").value;
    if (phoneNum.length != 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const address =
      document.getElementById("address").value +
      " " +
      document.getElementById("pincode").value +
      " " +
      document.getElementById("state").value;
    if (address.length < 10) {
      alert("Please enter a valid address");
      return;
    }
    const dateOfOrder = new Date();
    if (size == "") {
      alert("Please select a size");
      return;
    }
    const orderCost = cakeDetails.price;
    const cakeName = cakeDetails.name;
    const cakeSlug = slug;
    const cakeUrl = cakeDetails.imageUrl;

    try {
      console.log("create order1");
      await client
        .create({
          _type: "orders",
          customerEmail: email,
          customerName: name,
          customerPhone: phoneNum,
          deliveryAddress: address,
          dateOfOrder: dateOfOrder,
          modeOfPayment: mode_Payment,
          orderStatus: "pending",
          cakeSize: size,
          orderTotal: orderCost,
          paymentStatus: status_Payment,
          productName: cakeName,
          productSlug: cakeSlug,
          productImgUrl: cakeUrl,
          instructions: document.getElementById("instructions").value,
        })
        .then((res) => {

          const orderDetails = {
            name: name,
            address: address,
            cakeImage: cakeUrl,
            price: orderCost,
          };
        
          navigate('/confirmation', { state: { orderDetails } });

          // here here 

        });
    } catch (err) {
      console.error(err);
    }
  };

  const [size, setSize] = useState("");

  const paymentHandler = async (e) => {
    e.preventDefault();

    try {
      const API_URL = "http://3.6.76.192:5000";

      //Adding Element to Cart
      const cartData = {
        name: cakeDetails.name,
        price: cakeDetails.price,
        quantity: size,
        customization: document.getElementById("instructions").value,
      };

      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const cart_response = await axios.post(
        `${API_URL}/api/customers/cart`,
        cartData,
        payloadHeader
      );

      if (cart_response.status != 200) {
        console.log(cart_response);
        return;
      }
      const address =
        document.getElementById("address").value +
        " " +
        document.getElementById("pincode").value +
        " " +
        document.getElementById("state").value;

      //Placing Order
      let orderData = {}
      if (isChecked) {
        orderData = {
          address: address,
          modeOfPayment: "onlinePayment",
        };

      }
      else {
        orderData = {
          address: address,
          modeOfPayment: "cashOnDelivery",
        };

      }



      console.log(orderData);

      const order_response = await axios.post(
        `${API_URL}/api/customers/placeOrder`,
        orderData,
        payloadHeader
      );

      if (order_response.status != 201) {
        console.log(order_response);

        const clear_cart_response = await axios.delete(
          `${API_URL}/api/customers/clearCart`,
          payloadHeader
        );
        if (clear_cart_response.status != 200) {
          console.log(clear_cart_response);
          return;
        }

        return;
      } else if (order_response.data["modeOfPayment"] === "onlinePayment") {
        const options = {
          key: "rzp_test_cdAOF7anh4Wyon",
          name: "PAA Creations",
          description: "Cakes made easy!",
          order_id: order_response.data.psp_orderId,
          handler: async (response) => {
            try {
              const verifyData = {
                rzp_paymentId: response.razorpay_payment_id,
                rzp_signature: response.razorpay_signature,
                psp_orderId: order_response.data.psp_orderId,
                orderData: order_response.data,
              };

              const url = `${API_URL}/api/seller/verifyPayment`;
              const verifyResponse = await axios.post(
                url,
                verifyData,
                payloadHeader
              );

              await createOrder("onlinePayment", "Captured");
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {

        await createOrder("cashOnDelivery", "Pending");
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const [partialCakesData, setPartialCakesData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "cakes"]{
              name,
              slugurl,
              description,
              price,
              cakeimage{
                asset->{
                    _id,
                    url
                }
            }   
          }`
      )
      .then((res) => {
        console.log(res);
        setPartialCakesData(res);
      });
  }, []);
  const [cakeDetails, setCakeDetails] = useState(null);
  useEffect(() => {
    const fetchCake = async () => {
      try {
        const query = `*[slugurl.current == $slug][0]{
          name,
          description,
          price,
          ingredients,
          "imageUrl": cakeimage.asset->url
        }`;
        const params = { slug };
        const result = await client.fetch(query, params);
        console.log(result);
        setCakeDetails(result);
      } catch (error) {
        console.error("Error fetching cake details:", error.message);
      }
    };
    fetchCake();
  }, []);

  if (!cakeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <div onClick={temp}>hkjdashjadaksadhk</div> */}
      <div className="flex my-8 flex-row items-center justify-center space-x-12">
        <div>
          <img
            className="rounded-3xs w-[28.5rem] h-[29.63rem]"
            src={cakeDetails.imageUrl}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous text-left inline-block w-[24.94rem]">
            {cakeDetails.name}
          </div>
          <div className="tracking-[0.94px] leading-[1.38rem] text-gray-700 text-left inline-block w-[34.19rem] h-[4rem]">
            {cakeDetails.description}
          </div>
          <b className="text-[1.5rem] font-h2-petite text-left">
            Rs. {cakeDetails.price}
          </b>
          <div className="font-medium font-h2-petite text-left inline-block w-[11.38rem]">
            INGREDIENTS:
            {cakeDetails.ingredients.map(function (title, i) {
              return (
                <li className="m-0 ml-4" key={i}>
                  {title}
                </li>
              );
            })}
          </div>
          <div className="font-h2-petite text-left text-grey-300">
            For any queries and customizations, please contact us on whatsapp
          </div>
        </div>
      </div>

      <div className="items-center flex-col justify-center flex flex-wrap border-solid border-2 mx-64 bg-gray-200 rounded-lg border-gray-600">
        <h3>Size</h3>
        <div className="items-center flex space-x-12 flex-row mb-4 flex-wrap justify-center">
          {size === "halfkg" ? (
            <button
              id="halfkg2"
              className="bg-yellow-200 border-solid border-2 text-lg px-12 py-2 rounded-lg my-4"
            >
              1/2 kg
            </button>
          ) : (
            <button
              onClick={() => setSize("halfkg")}
              id="halfkg"
              className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg my-4"
            >
              1/2 kg
            </button>
          )}
          {size === "onekg" ? (
            <button
              id="onekg2"
              className="bg-yellow-200 border-solid border-2 text-lg px-12 py-2 rounded-lg"
            >
              1 kg
            </button>
          ) : (
            <button
              onClick={() => setSize("onekg")}
              id="onekg"
              className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg"
            >
              1 kg
            </button>
          )}
          {size === "twokg" ? (
            <button
              id="twokg2"
              className="bg-yellow-200 border-solid border-2 text-lg px-12 py-2 rounded-lg"
            >
              2 kg
            </button>
          ) : (
            <button
              onClick={() => setSize("twokg")}
              id="twokg"
              className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg"
            >
              2 kg
            </button>
          )}
        </div>
        <h3>Instructions</h3>
        <input id="instructions" className="mb-8 h-24" type="text" />
      </div>

      <div className="flex flex-row items-center justify-center mt-8 space-x-4">
        <a
          href="https://api.whatsapp.com/send/?phone=919911114128&text=Hi%2C+I+wish+to+enquire+about+a+cake+on+your+website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            data-testid="whatsapp-button"
            className="flex space-x-2 flex-row items-center justify-center rounded-3xs bg-lightgreen w-[10.13rem] h-[3.13rem]"
          >
            <img
              className="w-[1.75rem] h-[1.75rem] overflow-hidden"
              alt=""
              src="/akariconswhatsappfill2.svg"
            />
            <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
              Enquire
            </div>
          </div>
        </a>

        <Popup
          trigger={
            <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
              <div className="border-solid border-2 flex space-x-2 flex-row items-center justify-center rounded-3xs w-[10.13rem] h-[3.13rem] border-4">
                Order Now
              </div>
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal bg-yellow-200 p-8  w-[60vw] rounded-xl">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Address:
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pincode"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Pin Code:
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="state"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    State:
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="modeOfPayment"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Pay Online?
                    <input
                      type="checkbox"
                      id="modeOfPayment"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  onClick={paymentHandler}
                >
                  Submit
                </button>
                <button
                  onClick={() => { close() }}
                  type="button"
                  className="ml-8 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                >
                  Close
                </button>
              </form>
            </div>
          )}
        </Popup>
      </div>
      <div className="items-center flex-col justify-center flex my-8">
        <div>
          <h2
            style={{ "border-bottom": "2px solid yellow" }}
            className="px-96 pb-2 font-righteous"
          >
            More Cakes
          </h2>
        </div>
        <div className="mx-12 my-6 flex-wrap justify-center flex flex-row z-10 text-[1.13rem]">
          {partialCakesData.slice(0, 4).map(function (cake, i) {
            return (
              <div key={i} className="mx-4 mt-4">
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/" + cake.slugurl.current}
                >
                  <CakeCard info={cake} url={cake.cakeimage.asset.url} />
                </Link>
              </div>
            );
          })}
          <Drift
            appId="8c6e7txsysbf"
            userId="1234"
            attributes={{ email: "user@example.com", company: "Acme Inc" }}
          />
        </div>

        <button
          onClick={() => {
            window.location.href = "/catalogue";
          }}
          className="border border-black text-black bg-white py-2 px-4 rounded-md"
        >
          View All
        </button>
      </div>
    </div>
  );
}
