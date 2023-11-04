import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from '../sanityClient.js';
import contactimg from '../assets/contact.png';
import Navbar from "../components/Navbar.js";
const About = () => {
  const navigate = useNavigate();

  const [sanityData, setSanityData] = useState([]);
  const [titles, setTitles] = useState([]);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type == "about"]{
              title,
              description
          }`).then((res) => {
      setSanityData(res);
      setTitles(res[0].title);
      setDescription(res[0].description);

    });
  }

    , []);
  return (
    <>
      <div className="flex-col flex justify-center items-center justify-center items-center">
        <img
          className="z-0 absolute h-[18.03rem] "
          alt=""
          src="/iconparkoutlinecaketwo.svg"
        />
        <div className="mt-6 mb-4 z-10 text-[2.5rem] font-righteous">
          About Paa Creations
        </div>
        <img
          className="z-10 h-[0.19rem]"
          alt=""
          src="/line-6.svg"
        />
        <div className="my-4 z-10 text-[1.13rem] tracking-[1.1px] inline-block">

          {titles.map(function (title, i) {
            return <p className="m-0" key={i}>
              {title}
            </p>;
          })}
        </div>
      </div>

      <div className="flex flex-row my-4 justify-evenly flex-wrap">
        <div className="flex flex-col space-y-4">
          <div className="font-righteous text-3xl">
            <h3>
            Founder's Story
            </h3>
          </div>
          <div className="tracking-[1.04px]  leading-[1.88rem] inline-block w-[38.75rem]">

            {description.map(function (title, i) {
              return <p key={i} className="m-0 text-left ">{title}</p>
            })}
          </div>

        </div>
        <div className="flex">

          <img
            className="ml-8 z-10 rounded-3xs w-[24.5rem] h-[24.81rem]"
            alt=""
            src="/rectangle-127@2x.png"
          />
        </div>

      </div>


      <div style={{ 'font-family': 'Roboto' }} className="space-x-10 text-gray-300 font-bold flex flex-row justify-center items-center">
        <p>1. CHOOSE UR CAKE</p>
        <p>2. CONTACT US</p>
        <p>3. EAT UR CAKE</p>
      </div>


      <div className="relative">
        <div className="absolute w-full h-24 bg-yellow-100 bottom-[4rem] z-0" />

        <div className="flex flex-row my-4 justify-evenly flex-wrap">
          <div className="flex">

            <img
              className="ml-8 z-10 rounded-3xs w-[24.5rem] h-[24.81rem]"
              alt=""
              src={contactimg}
            />
          </div>
          <div className="z-10 justify-center flex flex-col space-y-4">
            <div className="font-righteous text-3xl">
              <h3>
              Say Hello
              </h3>
            </div>
            <div className="tracking-[1.04px]  leading-[1.88rem] inline-block w-[38.75rem]">


              <p className="m-0 text-left ">Paa Creations would love to be at your next event. Our cakes are the perfect delicacy to celebrate any occasion. Be it your birthday, anniversary or any other occasion, Paa Creations is here to serve you.</p>
            </div>
            <div>
              <b>
                Get in touch</b> <br></br>with us today!
            </div>

            <button onClick={() => { window.location.href = "/contact" }} className="w-[6rem] bg-yellow-300 p-2 rounded">
              Get in Touch
            </button>
          </div>

        </div>
      </div>











    </>
  );
};

export default About;
