import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../googleAuthClient";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  
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
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setLoggedInUser(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
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
          <div onClick={catalogue} className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white" >
            Cakes
          </div>
          <div className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4" onClick={onAboutTextClick}>
            About Us
          </div>
          <div className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4" onClick={onContactTextClick}>
            Contact Us
          </div>

          {loggedInUser ? (
            <div>
              <img className="rounded-full w-20 my-2" src={ loggedInUser.photoURL} alt="" />
            </div>

          ) : (

            <div className="text-xl uppercase text-white font-bold cursor-pointer hover:text-white mr-4" onClick={onSignInTextClick}>
              Sign In
            </div>
          )}

        </div>
      </div>
    </nav>




  );

};

export default Navbar;