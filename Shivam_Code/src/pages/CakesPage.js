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
      <div className="mx-12 my-6 flex-wrap flex flex-row z-10 text-[1.13rem]">

        {cakesData.map(function (cake, i) {
          return (
            <div className="mx-4 mt-4">
              <CakeCard key={i} info={cake} url={cake.cakeimage.asset.url} />
            </div>
          )
        })}
      </div>
      {/* // Promo wali cheez
    // Footer */}
    </>
  )

};

export default CakesPage;
