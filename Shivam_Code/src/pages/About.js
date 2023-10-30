import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from '../sanityClient.js';
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
              { title}
            </p>;
          })}
        </div>
      </div>
      <div className="relative bg-white w-full mt-8  text-center text-[0.81rem] text-crimson font-roboto">
        <div className="oerflow-hidden text-[1.25rem] text-black">
          <div className="">
            <div className="">
              <div className="flex flex-row ">
                <div className="mx-12 flex flex-col text-[2.5rem] font-righteous">
                  <div className="mb-8 text-left tracking-[2.62px] inline-block w-[25.5rem]">
                    Founders story
                  </div>
                  <div className=" w-[38.88rem]  text-[1.13rem] text-gray-400 font-roboto">
                    <div className="tracking-[1.04px] leading-[1.88rem] inline-block w-[38.75rem]">

                      {description.map(function (title, i) {
                        return <p key={ i} className="m-0 text-left ">{ title}</p>
                      })}
                    </div>
                  
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-[10px] left-[20px] rounded-3xs box-border w-[24.5rem] h-[24.94rem] border-[1px] border-solid border-gray-400" />
                  <img
                    className="absolute top-0 left-[1px] rounded-3xs w-[24.5rem] h-[24.81rem] object-cover"
                    alt=""
                    src="/rectangle-127@2x.png"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-[30rem] w-full text-[1rem] text-white">


              <div className="absolute top-[7.63rem] left-[0rem] h-[23.06rem]  text-left text-[1.13rem] text-chocolate">
                <div className="absolute top-[12.69rem] left-[0rem] bg-ivory w-[75rem] h-[9.44rem]" />
                <div className="absolute top-[17.75rem] left-[38.13rem] rounded-3xs bg-gold-200 w-[10.13rem] h-[2.88rem]" />
                <div className="absolute top-[18.63rem] left-[40.25rem] text-[0.88rem] leading-[1.08rem] uppercase inline-block w-[5.81rem]">
                  Get in Touch
                </div>
                <div className="absolute top-[0rem] left-[38.13rem] text-[2.5rem] tracking-[2.1px] font-righteous inline-block w-[16.56rem]">
                  Say Hello
                </div>
                <div className="absolute top-[4.63rem] left-[38.13rem] tracking-[0.94px] leading-[1.63rem] text-gray-100 inline-block w-[34.38rem]">
                  Paa Creations would love to be at your next event. Our cakes are
                  the perfect delicacy to celebrate any occasion. Be it your
                  birthday, anniversary or any other occasion, Paa Creations is
                  here to serve you.
                </div>
                <b className="absolute top-[13.63rem] left-[38.13rem] tracking-[0.94px] leading-[1.38rem] inline-block text-black w-[16.63rem]">
                  Get in touch
                </b>
                <div className="absolute top-[15.06rem] left-[38.13rem] tracking-[0.94px] leading-[1.38rem] text-gray-700 inline-block w-[9.38rem]">
                  with us today!
                </div>
                <div className="absolute top-[0.94rem] left-[2.5rem] rounded-3xs box-border w-[24.63rem] h-[22.13rem] border-[1px] border-solid border-gray-400" />
                <img
                  className="absolute top-[0rem] left-[3.38rem] rounded-3xs w-[24.63rem] h-[22.13rem] object-cover"
                  alt=""
                  src="/image8@2x.png"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
