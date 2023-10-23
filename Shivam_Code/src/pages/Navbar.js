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
    return (
        <div>
        
        <div className="absolute top-[3.31rem] left-[47rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem]">
              CAKES
            </div>
            <div
              className="absolute top-[3.31rem] left-[55.94rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
              onClick={onAboutTextClick}
            >
              About
            </div>
            <div
              className="absolute top-[3.31rem] left-[64.88rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.63rem] cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </div>
        </div>


    );

};

export default NavBar;
