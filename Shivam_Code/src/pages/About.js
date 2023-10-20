import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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
          <p className="m-0">
            Our Eggless Designer Cakes are a great combination of taste
            and nutrients.
          </p>
          <p className="m-0">
            Our wide range of flavours and designs are ready for you.
          </p>
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
                      <p className="m-0 text-left ">Hi I am Prachi,</p>
                      <p className="m-0 text-left">
                        I was born and raised in Russia and moved to Israel in
                        at a very young age. In 2017 I relocated to Hong kong
                        and lived there for 4 years, the culinary impact on me
                        was huge. I thought it would be nice to combine my
                        experience and passion with tasty cakes
                      </p>
                    </div>
                    <div className="text-left tracking-[1.04px] leading-[1.88rem] inline-block w-[38.88rem]">
                      Coming back to israel i missed some of the flavours i
                      tried in Hong Kong. Not everyone is familiar with them, I
                      started baking them for family and friends events, and
                      People tend to give their starters names. We called ours
                      “Petites Bentos.”.
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

            <div className="absolute top-[31rem] left-[0rem] w-full h-[60.44rem]  text-[1rem] text-white">
              <div className="absolute top-[37.25rem] left-[0rem] w-full h-[23.19rem] ">
                <div className="absolute top-[0rem] left-[0rem] w-full h-[23.19rem]">
                  <div className="absolute top-[1.63rem] left-[0rem] bg-khaki w-full h-[0.19rem]" />
                  <div className="absolute top-[1.81rem] left-[0rem] bg-black w-full h-[21.38rem]" />
                  <div className="absolute top-[0rem] left-[45.5rem] rounded-3xs bg-gold-200 w-[4.06rem] h-[4.06rem]" />
                  <div className="absolute top-[6.06rem] left-[29.13rem] text-[2.5rem] font-righteous inline-block w-[16.81rem]">
                    Follow Us
                  </div>
                  <div className="absolute top-[14.13rem] left-[29.31rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[16.63rem]">
                    prachi_153@rediffmail.com
                  </div>
                  <div className="absolute top-[16.56rem] left-[32.38rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.44rem]">
                    +91 9911114128
                  </div>
                  <div className="absolute top-[19rem] left-[32.5rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.13rem]">
                    Noida - India
                  </div>
                  <img
                    className="absolute top-[10.44rem] left-[36.63rem] w-[1.94rem] h-[1.94rem] "
                    alt=""
                    src="/akariconsinstagramfill1.svg"
                  />
                  <img
                    className="absolute top-[10.44rem] left-[39.81rem] w-[1.94rem] h-[1.94rem] "
                    alt=""
                    src="/akariconsfacebookfill.svg"
                  />
                  <img
                    className="absolute top-[10.5rem] left-[33.63rem] w-[1.75rem] h-[1.75rem] "
                    alt=""
                    src="/akariconswhatsappfill1.svg"
                  />
                </div>
                <img
                  className="absolute h-[11.49%] w-[3.38%] top-[3.23%] right-[48.21%] bottom-[85.28%] left-[48.42%] max-w-full  max-h-full"
                  alt=""
                  src="/e076735c70194744ac56140b689ba33f2.svg"
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
