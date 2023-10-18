import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const onCAKESTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[141.44rem] overflow-hidden text-center text-[0.81rem] text-crimson font-roboto">
      <div className="absolute top-[-122.75rem] left-[-277.56rem] leading-[0.98rem] inline-block w-[5.19rem]">{`Hans & Franz`}</div>
      <div className="absolute top-[-122.75rem] left-[0rem] w-[320.13rem] h-[264.19rem] overflow-hidden text-[1.25rem] text-black">
        <div className="absolute top-[122.75rem] left-[0rem] w-[320.13rem] h-[141.44rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[320.13rem] h-[80.75rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[26.15rem] overflow-hidden">
              <img
                className="absolute top-[8.13rem] left-[4.88rem] w-[18.03rem] h-[18.03rem] overflow-hidden"
                alt=""
                src="/iconparkoutlinecaketwo.svg"
              />
              <div className="absolute top-[14.75rem] left-[24.56rem] text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous">
                About Paa Creations
              </div>
              <div className="absolute top-[19.38rem] left-[14.88rem] text-[1.13rem] tracking-[1.1px] inline-block w-[45.25rem]">
                <p className="m-0">
                  Our Eggless Designer Cakes are a great combination of taste
                  and nutrients.
                </p>
                <p className="m-0">
                  Our wide range of flavours and designs are ready for you.
                </p>
              </div>
              <img
                className="absolute top-[18.06rem] left-[21.06rem] w-[33.63rem] h-[0.19rem]"
                alt=""
                src="/line-6.svg"
              />
              <div className="absolute top-[8.13rem] left-[0rem] rounded-3xs bg-lemon w-[75rem] h-[8.13rem]" />
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[7.5rem] h-[8.13rem]" />
              <div className="absolute top-[0rem] left-[15rem] bg-white w-[7.5rem] h-[8.13rem]" />
              <div className="absolute top-[0rem] left-[30rem] bg-white w-[7.5rem] h-[8.13rem]" />
              <div className="absolute top-[0rem] left-[45rem] bg-white w-[7.5rem] h-[8.13rem]" />
              <div className="absolute top-[0rem] left-[60rem] bg-white w-[7.5rem] h-[8.13rem]" />
              <div className="relative bg-gainsboro w-[22.5rem] h-[5.29rem]">
                <div className="absolute top-[6.73rem] left-[52.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
                <div className="absolute top-[6.73rem] left-[67.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
              </div>
              <div
                className="absolute top-[3.31rem] left-[47rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
                onClick={onCAKESTextClick}
              >
                CAKES
              </div>
              <div className="absolute top-[3.31rem] left-[55.94rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem]">
                About
              </div>
              <div className="absolute top-[3.31rem] left-[64.88rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.63rem]">
                Contact
              </div>
              <div className="absolute top-[5.03rem] left-[56.84rem] bg-black box-border w-[5.81rem] h-[0.19rem] border-t-[3px] border-solid border-chocolate" />
              <img
                className="absolute top-[0rem] left-[1.38rem] w-[10.63rem] h-[10.63rem] object-cover cursor-pointer"
                alt=""
                src="/paa-creations-logo-1-1@2x.png"
                onClick={onPaaCreationsLogo11Click}
              />
            </div>
            <div className="absolute top-[30.75rem] left-[0rem] w-[320.13rem] h-[27.69rem] overflow-hidden text-left text-[0.88rem]">
              <div className="absolute top-[0rem] left-[2.5rem] w-[317.63rem] h-[27.69rem] overflow-hidden">
                <div className="absolute top-[8.19rem] left-[315.19rem] leading-[1.08rem] uppercase inline-block w-[2.44rem] h-[1.94rem]" />
                <div className="absolute top-[0rem] left-[0rem] w-[38.88rem] h-[25.63rem] overflow-hidden text-[2.5rem] font-righteous">
                  <div className="absolute top-[0rem] left-[0rem] tracking-[2.62px] inline-block w-[25.5rem]">
                    Founders story
                  </div>
                  <div className="absolute top-[4.38rem] left-[0rem] w-[38.88rem] h-[21.25rem] overflow-hidden text-[1.13rem] text-gray-400 font-roboto">
                    <div className="absolute top-[13.75rem] left-[0rem] tracking-[1.04px] leading-[1.88rem] inline-block w-[38.88rem]">
                      Coming back to israel i missed some of the flavours i
                      tried in Hong Kong. Not everyone is familiar with them, I
                      started baking them for family and friends events, and
                      People tend to give their starters names. We called ours
                      “Petites Bentos.”.
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] tracking-[1.04px] leading-[1.88rem] inline-block w-[38.75rem]">
                      <p className="m-0">Hi I am Prachi,</p>
                      <p className="m-0">
                        I was born and raised in Russia and moved to Israel in
                        at a very young age. In 2017 I relocated to Hong kong
                        and lived there for 4 years, the culinary impact on me
                        was huge. I thought it would be nice to combine my
                        experience and passion with tasty cakes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1.88rem] left-[44.56rem] w-[25.44rem] h-[25.81rem] overflow-hidden">
                  <div className="absolute top-[0.88rem] left-[0.94rem] rounded-3xs box-border w-[24.5rem] h-[24.94rem] border-[1px] border-solid border-gray-400" />
                  <img
                    className="absolute top-[0rem] left-[0rem] rounded-3xs w-[24.5rem] h-[24.81rem] object-cover"
                    alt=""
                    src="/rectangle-127@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[60.75rem] left-[0rem] w-[72.5rem] h-[5.63rem] overflow-hidden text-left text-[1.13rem] text-gray-400">
              <div className="absolute top-[0rem] left-[2.5rem] tracking-[1.04px] leading-[1.88rem] inline-block w-[70rem]">
                <p className="m-0">{`While baking the cakes, it occurred to me that a tiny cake asian & french fusion inspired cakes would be a great addition to the Tel avivs bakery scene. Sometimes people want a smaller portion, anddon’t want a whole cake, just few bites.`}</p>
                <p className="m-0">That was the day Petite biscuit was born.</p>
              </div>
            </div>
            <div className="absolute top-[79.63rem] left-[0rem] w-[53.06rem] h-[1.13rem] overflow-hidden text-[1rem] text-dimgray">
              <div className="absolute top-[0rem] left-[21.19rem] w-[31.88rem] h-[1.13rem] overflow-hidden">
                <div className="absolute top-[0rem] left-[0rem] text-inherit leading-[1.08rem] uppercase font-semibold font-inherit">
                  <ul className="m-0 pl-[1.31rem]">Choose ur cake</ul>
                </div>
                <div className="absolute top-[0rem] left-[24.13rem] leading-[1.08rem] uppercase font-semibold">
                  3. Eat the cake
                </div>
                <div className="absolute top-[0rem] left-[13.19rem] leading-[1.08rem] uppercase font-semibold">
                  2. Contact us
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[81rem] left-[0rem] w-[75rem] h-[60.44rem] overflow-hidden text-[1rem] text-white">
            <img
              className="absolute top-[0rem] left-[0rem] w-[54.69rem] h-[0.13rem] overflow-hidden"
              alt=""
              src="/frame3.svg"
            />
            <div className="absolute top-[37.25rem] left-[0rem] w-[75rem] h-[23.19rem] overflow-hidden">
              <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[23.19rem]">
                <div className="absolute top-[1.63rem] left-[0rem] bg-khaki w-[75rem] h-[0.19rem]" />
                <div className="absolute top-[1.81rem] left-[0rem] bg-black w-[75rem] h-[21.38rem]" />
                <div className="absolute top-[0rem] left-[35.5rem] rounded-3xs bg-gold-200 w-[4.06rem] h-[4.06rem]" />
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
                  className="absolute top-[10.44rem] left-[36.63rem] w-[1.94rem] h-[1.94rem] overflow-hidden"
                  alt=""
                  src="/akariconsinstagramfill1.svg"
                />
                <img
                  className="absolute top-[10.44rem] left-[39.81rem] w-[1.94rem] h-[1.94rem] overflow-hidden"
                  alt=""
                  src="/akariconsfacebookfill.svg"
                />
                <img
                  className="absolute top-[10.5rem] left-[33.63rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
                  alt=""
                  src="/akariconswhatsappfill1.svg"
                />
              </div>
              <img
                className="absolute h-[11.49%] w-[3.38%] top-[3.23%] right-[48.21%] bottom-[85.28%] left-[48.42%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/e076735c70194744ac56140b689ba33f2.svg"
              />
            </div>
            <div className="absolute top-[7.63rem] left-[0rem] w-[75rem] h-[23.06rem] overflow-hidden text-left text-[1.13rem] text-chocolate">
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
  );
};

export default About;
