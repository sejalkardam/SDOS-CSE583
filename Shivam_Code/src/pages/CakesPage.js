import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import CakeCard from "../components/CakeCard";
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

  

  const onIMAGE8Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="">
      <CakeCard/>
      {/* <div className="absolute top-[-95.06rem] left-[-277.56rem] leading-[0.98rem] inline-block w-[5.19rem]">{`Hans & Franz`}</div>
      <div className="absolute top-[-95.06rem] left-[0rem] w-[75rem] h-[250.06rem] overflow-hidden text-[0.88rem] text-black">
        <div className="absolute top-[95.06rem] left-[0rem] w-[75rem] h-[155rem] overflow-hidden">

          <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[42.13rem] overflow-hidden">
            <div className="absolute top-[13.06rem] left-[2.5rem] text-[1rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium text-gray-900">
              <span>{`Home / `}</span>
              <span className="text-black">Cakes</span>
            </div>
            <div className="absolute top-[18.13rem] left-[2.63rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
            <div className="absolute top-[18.13rem] left-[20.31rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
            <div className="absolute top-[18.13rem] left-[38.13rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
            
            <img
              className="absolute top-[18.88rem] left-[39.31rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
              alt=""
              src="/image1@2x.png"
            />
            <img
              className="absolute top-[18.88rem] left-[21.44rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <img
              className="absolute top-[18.88rem] left-[57.13rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
              alt=""
              src="/image3@2x.png"
            />
            <div
              className="absolute top-[38.25rem] left-[6.38rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem] cursor-pointer"
              onClick={onRectangle4Click}
            />
            <div className="absolute top-[38.25rem] left-[24.06rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[39.19rem] left-[25.06rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <div className="absolute top-[38.25rem] left-[41.94rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div
              className="absolute top-[39.19rem] left-[42.81rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem] cursor-pointer"
              onClick={onStartingAt491Click}
            >
              Starting at 49$
            </div>
            <div className="absolute top-[38.25rem] left-[59.88rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[36.06rem] left-[7.25rem] text-[1.13rem] tracking-[2.62px]">
              Choco nilla
            </div>
            <div className="absolute top-[36.06rem] left-[25.06rem] text-[1.13rem] tracking-[2.62px]">
              Berry blast
            </div>
            <div className="absolute top-[36.06rem] left-[42.19rem] text-[1.13rem] tracking-[2.62px]">
              Mucho choco
            </div>
            <div className="absolute top-[36.06rem] left-[58.63rem] text-[1.13rem] tracking-[2.62px]">
              Lemony goodness
            </div>
            <div className="absolute top-[39.19rem] left-[7.25rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <div className="absolute top-[39.19rem] left-[60.75rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <img
              className="absolute top-[15.63rem] left-[0rem] w-[7.25rem] h-[7.25rem]"
              alt=""
              src="/party.svg"
            />
            <div className="absolute top-[18.81rem] left-[1.94rem] text-[1rem] text-chocolate flex items-center justify-center w-[2.5rem] h-[2.5rem] [transform:_rotate(-30deg)] [transform-origin:0_0]">
              Top Pick
            </div>
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

            <div>
            </div>
            <div className="absolute top-[5.03rem] left-[47.97rem] bg-black box-border w-[5.81rem] h-[0.19rem] border-t-[3px] border-solid border-chocolate" />
            
          </div>
          <div className="absolute top-[43.38rem] left-[2.63rem] w-[70rem] h-[24rem] overflow-hidden text-left text-chocolate">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[17.69rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[35.5rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
            <div className="absolute top-[0rem] left-[53.44rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
            <img
              className="absolute top-[0.75rem] left-[18.81rem] rounded-3xs w-[14.44rem] h-[15.19rem] object-cover"
              alt=""
              src="/image4@2x.png"
            />
            <img
              className="absolute top-[0.75rem] left-[54.56rem] rounded-3xs w-[14.31rem] h-[15.06rem] object-cover"
              alt=""
              src="/image5@2x.png"
            />
            <img
              className="absolute top-[0.75rem] left-[1rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <img
              className="absolute top-[0.75rem] left-[36.63rem] rounded-3xs w-[14.31rem] h-[15rem] object-cover"
              alt=""
              src="/image6@2x.png"
            />
            <div className="absolute top-[20.13rem] left-[3.75rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[20.13rem] left-[21.44rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[21.06rem] left-[22.44rem] leading-[1.08rem] uppercase font-medium inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <div className="absolute top-[20.13rem] left-[39.31rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[21.06rem] left-[40.19rem] leading-[1.08rem] uppercase font-medium inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <div className="absolute top-[20.13rem] left-[57.25rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
            <div className="absolute top-[17.94rem] left-[4.63rem] text-[1.13rem] tracking-[2.62px] text-black text-center">
              Choco nilla
            </div>
            <div className="absolute top-[17.94rem] left-[22.44rem] text-[1.13rem] tracking-[2.62px] text-black text-center">
              Berry blast
            </div>
            <div className="absolute top-[17.94rem] left-[39.56rem] text-[1.13rem] tracking-[2.62px] text-black text-center">
              Mucho choco
            </div>
            <div className="absolute top-[17.94rem] left-[56rem] text-[1.13rem] tracking-[2.62px] text-black text-center">
              Lemony goodness
            </div>
            <div className="absolute top-[21.06rem] left-[4.63rem] leading-[1.08rem] uppercase font-medium inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
            <div className="absolute top-[21.06rem] left-[58.13rem] leading-[1.08rem] uppercase font-medium inline-block w-[7.25rem] h-[1.06rem]">
              Starting at 49$
            </div>
          </div>
          <div className="absolute top-[74.44rem] left-[0rem] w-[75rem] h-[44.38rem] overflow-hidden text-[2.88rem] font-righteous">
            <div className="absolute top-[0rem] left-[0rem] bg-lemon w-[75rem] h-[27.69rem]" />
            <img
              className="absolute top-[12.56rem] left-[2.5rem] rounded-3xs w-[70.63rem] h-[31.81rem] object-cover cursor-pointer"
              alt=""
              src="/image7@2x.png"
              onClick={onIMAGE8Click}
            />
            <div className="absolute top-[1.5rem] left-[24.69rem] tracking-[2.62px] inline-block w-[25.69rem]">
              Bento comes - Fun starts
            </div>
            <div className="absolute top-[22.38rem] left-[16.69rem] text-[4.75rem] tracking-[2.62px] text-white inline-block w-[42.25rem] [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.5)]">
              Custom your bento cake
            </div>
            <div className="absolute top-[9.88rem] left-[15.25rem] text-[1.13rem] tracking-[0.94px] leading-[1.38rem] font-roboto inline-block w-[44.5rem]">
              Bento cakes are rich In Flavor, and Fun to share with others!
            </div>
          </div>
          <div className="absolute top-[119.75rem] left-[11.44rem] w-[52.63rem] h-[2.81rem] overflow-hidden text-[1rem] text-chocolate">
            <div className="absolute top-[0.06rem] left-[0rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[19.69rem]">
              Average to medium size cakes
            </div>
            <div className="absolute top-[0rem] left-[35.06rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[17.56rem]">
              Fun size cake thats suits for sharing too!
            </div>
          </div>
          <div className="absolute top-[128.75rem] left-[0rem] w-[75rem] h-[23.19rem] overflow-hidden text-[1rem] text-white">
            <img
              className="absolute h-[11.49%] w-[3.38%] top-[3.23%] right-[48.21%] bottom-[85.28%] left-[48.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/e076735c70194744ac56140b689ba33f.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[23.19rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[1.81rem] overflow-hidden">
                <div className="absolute top-[1.63rem] left-[0rem] bg-khaki w-[75rem] h-[0.19rem]" />
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[23.19rem] overflow-hidden">
                <div className="absolute top-[1.81rem] left-[0rem] bg-black w-[75rem] h-[21.38rem]" />
              </div>
              <div className="absolute top-[0rem] left-[35.5rem] rounded-3xs bg-gold-200 w-[4.06rem] h-[4.06rem]" />
              <div className="absolute top-[0rem] left-[29.13rem] w-[16.81rem] h-[9.19rem] overflow-hidden text-[2.5rem] font-righteous">
                <div className="absolute top-[6.06rem] left-[0rem] inline-block w-[16.81rem]">
                  Follow Us
                </div>
              </div>
              <div className="absolute top-[0rem] left-[29.31rem] w-[16.63rem] h-[15.56rem] overflow-hidden">
                <div className="absolute top-[14.13rem] left-[0rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[16.63rem]">
                  prachi_153@rediffmail.com
                </div>
              </div>
              <div className="absolute top-[0rem] left-[32.38rem] w-[10.44rem] h-[18rem] overflow-hidden">
                <div className="absolute top-[16.56rem] left-[0rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.44rem]">
                  +91 9911114128
                </div>
              </div>
              <div className="absolute top-[0rem] left-[32.5rem] w-[10.13rem] h-[20.44rem] overflow-hidden">
                <div className="absolute top-[19rem] left-[0rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.13rem]">
                  Noida - India
                </div>
              </div>
              <img
                className="absolute top-[0rem] left-[36.63rem] w-[1.94rem] h-[12.38rem] overflow-hidden"
                alt=""
                src="/frame.svg"
              />
              <img
                className="absolute top-[0rem] left-[39.81rem] w-[1.94rem] h-[12.38rem] overflow-hidden"
                alt=""
                src="/frame1.svg"
              />
              <img
                className="absolute top-[0rem] left-[33.63rem] w-[1.75rem] h-[12.25rem] overflow-hidden"
                alt=""
                src="/frame2.svg"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CakesPage;
