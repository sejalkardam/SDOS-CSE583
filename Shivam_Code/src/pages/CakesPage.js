import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import CakeCard from "../components/CakeCard";
import client from '../sanityClient.js';

const CakesPage = () => {
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
      <div className="flex flex-row space-x-8 my-4 z-10 text-[1.13rem] tracking-[1.1px] inline-block">

        {cakesData.map(function (cake, i) {
          return <CakeCard className='mt-4' key={i} info={cake} url={cake.cakeimage.asset.url} />;
        })}
      </div>
      {/* // Promo wali cheez
    // Footer */}
    </>
  );

};

export default CakesPage;
