import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-yellow-500 p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//         <span className="text-white font-bold text-lg">Your Logo</span>
//       </div>
//       <ul className="flex space-x-4">
//         <li>
//           <a href="/" className="text-white hover:text-blue-300">Home</a>
//         </li>
//         <li>
//           <a href="/contact" className="text-white hover:text-blue-300">Contact Us</a>
//         </li>
//         <li>
//           <a href="/about" className="text-white hover:text-blue-300">About Us</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };




const Navbar = () => {
    const navigate = useNavigate();
    const onAboutTextClick = useCallback(() => {
        navigate("/about");
      }, [navigate]);
    
      const onContactTextClick = useCallback(() => {
        navigate("/contact");
      }, [navigate]);

      const onSignInTextClick = useCallback(() => {
        navigate("/SignIn");
      }, [navigate]);

      const onCartTextClick = useCallback(() => {
        navigate("/MyCart");
      }, [navigate]);
      
  
  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);
    return (
      <nav className="bg-pink-200 h-22 w-full">
      <div className="flex items-center justify-between">
        <img
          className="w-24 h-24 object-cover cursor-pointer"
          alt=""
          src="/paa-creations-logo-1-1@2x.png"
          onClick={onPaaCreationsLogo11Click}
        />
        {/* <div className="text-right space-y-4 space-x-4"> */}
        <div className="flex items-center space-x-6">
          <div className="text-xl uppercase text-pink-600 font-bold cursor-pointer hover:text-white" >
            Cakes
          </div>
          <div className="text-xl  uppercase text-pink-600 font-bold cursor-pointer hover:text-white mr" onClick={onCartTextClick}>
            My Cart
          </div>
          <div className="text-xl uppercase text-pink-600 font-bold cursor-pointer hover:text-white mr-4" onClick={onSignInTextClick}>
            Sign In
          </div>
          <div className="text-xl uppercase text-pink-600 font-bold cursor-pointer hover:text-white mr-4" onClick={onAboutTextClick}>
            About Us
          </div>
          <div className="text-xl uppercase text-pink-600 font-bold cursor-pointer hover:text-white mr-4" onClick={onContactTextClick}>
            Contact Us
          </div>
        </div>
        </div>
      {/* </div> */}
      </nav>
      



    );

};

export default Navbar;