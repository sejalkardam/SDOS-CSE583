import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import custom from "../assets/custom.png";
import Navbar from "../components/Navbar";
import Drift from "react-driftjs";
import CakeCard from "../components/CakeCard";
import client from '../sanityClient.js';
import { Link } from "react-router-dom";
const CakesPage = () => {
  const customizeCake = () => {
    window.scrollTo(0, 0);
  };
  
  const navigate = useNavigate();

  const onIMAGEClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onStartingAt491Click = useCallback(() => {
    navigate("/product-page1");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const [cakesData, setCakesData] = useState([]);

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
      setCakesData(res);

    });
  }, []);

  const onIMAGE8Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <>
      {/* // Navbar
      // Catalogue */}

      <div className="mx-12 my-6 flex-wrap justify-center flex flex-row z-10 text-[1.13rem]">

        {cakesData.map(function (cake, i) {
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

      <div className="space-y-6 font-righteous my-8 flex flex-col items-center justify-center bg-yellow-200" onClick={customizeCake}>
        
        <p className="text-3xl">Customize your Cake today!</p>
        <div className="">
          <img className="font-righteous w-[100%] h-[25rem] mb-8" src={custom} alt="" />
        </div>
        <div style={{fontSize:"4rem", textShadow:"6rem"}} className="font-bold text-white drop-shadow-xl  absolute">
          Custom your cake
        </div>
      </div>

    </>
  )

};


export default CakesPage;
