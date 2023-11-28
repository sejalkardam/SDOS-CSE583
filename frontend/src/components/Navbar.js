import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../googleAuthClient";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Popup from "reactjs-popup";
import React from "react";
import { useState } from "react";
import user from "../images/user.png";
import axios from "axios";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const a = localStorage.getItem("paa_emailID");
    const b = localStorage.getItem("paa_displayName");
    const c = localStorage.getItem("paa_imageURL");
    if (a) {
      setLoggedInUser({
        email: a,
        displayName: b,
        photoURL: c,
      });
    }
  }, []);

  const navigate = useNavigate();
  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    console.log("sign in");
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        const token = user && (await user.getIdToken());
        console.log(token);
        console.log(user);
        localStorage.setItem("paa_emailID", user.email);
        localStorage.setItem("paa_displayName", user.displayName);
        localStorage.setItem("paa_imageURL", user.photoURL);
        setLoggedInUser(user);

        const API_URL = "http://3.6.76.192:5000";

        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const body = {
          firstName: user.displayName,
          lastName: user.displayName,
          email: user.email
        };

        const customer_added = await axios.post(
          `${API_URL}/api/customers`,
          body,
          payloadHeader
        );
        console.log(customer_added);

        if(customer_added.response==201){
          console.log("Customer Added");
        }
        else if(customer_added.response==200){
          console.log("Customer Already Exists");
        }
        else{
          console.log(customer_added);
        }
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }, [navigate]);

  const onSignOutTextClick = useCallback(() => {
    console.log("sign out");
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("paa_emailID");
        localStorage.removeItem("paa_displayName");
        localStorage.removeItem("paa_imageURL");
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const catalogue = useCallback(() => {
    navigate("/catalogue");
  }, [navigate]);
  return (
    <nav className="bg-black h-22 w-full">
      <div className="flex items-center justify-between">
        <img
          className="w-24 h-24 object-cover cursor-pointer"
          alt=""
          src="/paa-creations-logo-1-1@2x.png"
          onClick={onPaaCreationsLogo11Click}
        />
        <div className="flex items-center space-x-6 mr-6">
          <div
            onClick={catalogue}
            className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white"
          >
            Cakes
          </div>
          <div
            className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4"
            onClick={onAboutTextClick}
          >
            About Us
          </div>
          <div
            className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4"
            onClick={onContactTextClick}
          >
            Contact Us
          </div>

          {loggedInUser ? (
            <div>
              {loggedInUser.photoURL ? (
                <Popup
                  trigger={
                    <img
                      className="rounded-full w-20 my-2"
                      src={loggedInUser.photoURL}
                      alt=""
                    />
                  }
                  position="bottom center"
                >
                  <div className="bg-yellow-300 rounded-lg p-4">
                    <div
                      onClick={onSignOutTextClick}
                      className="bg-white my-2 p-4 rounded-lg"
                    >
                      Sign Out
                    </div>
                    <div
                      onClick={() => {
                        window.location.href = "orders";
                      }}
                      className="bg-white my-4 p-4 rounded-lg"
                    >
                      My Orders
                    </div>
                  </div>
                </Popup>
              ) : (
                <Popup
                  trigger={
                    <img className="rounded-full w-20 my-2" src={user} alt="" />
                  }
                  position="bottom center"
                >
                  <div>
                    <div className="bg-white my-4 p-4">Sign Out</div>
                    <div className="bg-white my-4 p-4">Sign Out</div>
                    <div>My Orders</div>
                  </div>
                </Popup>
              )}
            </div>
          ) : (
            <div
              className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4"
              onClick={onSignInTextClick}
            >
              Sign In
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
