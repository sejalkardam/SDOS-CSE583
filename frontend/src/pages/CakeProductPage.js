import React, { useEffect, useState } from 'react'
import client from '../sanityClient'
import { useParams, Link } from 'react-router-dom';
import CakeCard from "../components/CakeCard";
import Drift from "react-driftjs";
import axios from 'axios';

export default function CakeProductPage() {
    const { slug } = useParams();

    const paymentHandler = async (e) => {
        // alert("ss")
        const API_URL = 'http://localhost:5000/'
        e.preventDefault();
        const orderUrl = `${API_URL}payment`;
        const response = await axios.get(orderUrl);
        const { data } = response;
        console.log(data);
        const options = {
            key: "rzp_test_cdAOF7anh4Wyon",
            name: "PAA Creations",
            description: "Cakes made easy!",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await axios.post(url, {})
                    console.log(captureResponse.data);
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
    };

    const temporaryReq2 = () => {

        const data = {
            "addressId": "654527837b95613a10c62c1e",
            "modeOfPayment": "cashOnDelivery",
            "status": "PENDING"
        }

        axios.post('http://localhost:5000/api/customers/6545274f7b95613a10c62c17/placeOrder', data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const temporaryReq = () => {

        const data = {
            "name": "Lemon Zest Cake",
            "price": 1500,
            "quantity": 1,
        }
        console.log("where");
        axios.post('http://localhost:5000/api/customers/6545274f7b95613a10c62c17/cart', data)
            .then(response => {
                // Handle the response here
                console.log(response);
            })
            .catch(error => {
                // Handle the error here
                console.error(error);
            });
    }


    const [partialCakesData, setPartialCakesData] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "cakes"]{
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
          }`).then((res) => {
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
                console.error('Error fetching cake details:', error.message);
            }
        };
        fetchCake();
    }, [slug]);

    if (!cakeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            <div className="flex my-8 flex-row items-center justify-center space-x-12">
                <div>
                    <img className="rounded-3xs w-[28.5rem] h-[29.63rem]" src={cakeDetails.imageUrl} alt="" />
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
                            return <li className="m-0 ml-4" key={i}>
                                {title}
                            </li>;
                        })}
                    </div>
                    <div className="font-h2-petite text-left text-grey-300">
                        For any queries and customizations, please contact us on whatsapp
                    </div>

                </div>
            </div>

            <div className="items-center flex-col justify-center flex flex-wrap border-solid border-2 mx-64 bg-gray-200 rounded-lg border-gray-600">
                <h3>Size</h3>
                <div className='items-center flex space-x-12 flex-row mb-4 flex-wrap justify-center'>
                    <button id="halfkg" className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg">1/2 kg</button>
                    <button id="onekg" className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg">1 kg</button>
                    <button id="twokg" className="bg-opacity-0 border-solid border-2 text-lg px-12 py-2 rounded-lg">2 kg</button>
                </div>
                <h3>Instructions</h3>
                <input className="mb-8 h-24" type="text" />
            </div>

            <div className="flex flex-row items-center justify-center mt-8 space-x-4">

                <div data-testid="whatsapp-button" onClick={paymentHandler} className="flex space-x-2 flex-row items-center justify-center rounded-3xs bg-lightgreen w-[10.13rem] h-[3.13rem]" >

                    <img
                        className="w-[1.75rem] h-[1.75rem] overflow-hidden"
                        alt=""
                        src="/akariconswhatsappfill2.svg"
                    />
                    <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
                        Enquire
                    </div>
                </div>

                <div onClick={temporaryReq2} className="border-solid border-2 flex space-x-2 flex-row items-center justify-center rounded-3xs w-[10.13rem] h-[3.13rem] border-4" >

                    <div className="text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
                        Order Now
                    </div>
                </div>
            </div>
            <div className="items-center flex-col justify-center flex my-8">
                <div>
                    <h2 style={{ "border-bottom": "2px solid yellow" }} className='px-96 pb-2 font-righteous'>More Cakes</h2>
                </div>
                <div className="mx-12 my-6 flex-wrap justify-center flex flex-row z-10 text-[1.13rem]">

                    {partialCakesData.slice(0, 4).map(function (cake, i) {
                        return (
                            <div key={i} className="mx-4 mt-4">
                                <Link style={{ textDecoration: "none" }} to={'/' + cake.slugurl.current}>
                                    <CakeCard info={cake} url={cake.cakeimage.asset.url} />
                                </Link>
                            </div>
                        )
                    })}
                    <Drift
                        appId="8c6e7txsysbf"
                        userId="1234"
                        attributes={{ email: "user@example.com", company: "Acme Inc" }}
                    />
                </div>

                <button onClick={() => { window.location.href = '/catalogue' }} className="border border-black text-black bg-white py-2 px-4 rounded-md">
                    View All
                </button>
            </div>

        </div>
    )
}
