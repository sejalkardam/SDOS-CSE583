import { useCallback } from "react";
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const navigate = useNavigate();
    const onAboutTextClick = useCallback(() => {
        navigate("/about");
      }, [navigate]);
    
      const onContactTextClick = useCallback(() => {
        navigate("/contact");
      }, [navigate]);
  
  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);
    return (
      <div className="flex items-center justify-between">
        <img
          className="w-24 h-24 object-cover cursor-pointer"
          alt=""
          src="/paa-creations-logo-1-1@2x.png"
          onClick={onPaaCreationsLogo11Click}
        />
        <div className="flex items-center space-x-6">
          <div className="text-sm uppercase font-medium cursor-pointer" >
            Cakes
          </div>
          <div className="text-sm uppercase font-medium cursor-pointer" onClick={onAboutTextClick}>
            About
          </div>
          <div className="text-sm uppercase font-medium cursor-pointer" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
      </div>



    );

};

export default NavBar;
