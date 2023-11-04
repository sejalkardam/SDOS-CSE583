import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import xyz from "../images/cake.jpeg"

const Home = () => {
  const navigate = useNavigate();

  const onRectangle11Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onViewAllButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInstagramFeedTextClick = useCallback(() => {
    window.open("www.instagram.com/paacreations");
  }, []);

  const onRectangle17Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whatWeBake']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCAKESTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAkarIconsinstagramFillClick = useCallback(() => {
    window.open("https://www.instagram.com/paacreations");
  }, []);

  const onRectangle28Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    
<div>
  <div className="w-full h-12 bg-white-400 border-2 border-black flex justify-center items-center">
    </div>
    <div className="w-full h-96 bg-yellow-400 border-2 border-black flex justify-center items-center">
    {/* <div className="w-16 h-2 bg-yellow-300 ml-16 w-64 p-4">
        
      </div> */}
      {/* <div className="p-4 relative">
        <div className="h-full w-1/2 absolute left-0 top-2 bg-yellow-200 ml-0"></div>
        <div className="h-full w-1/2 absolute right-0 top-10 bg-yellow-200"></div>
        <div className="h-full w-1/2 absolute left-1/4 top-0 bg-yellow-200"></div>
      </div> */}
      

      <div className=" pt-3 pb-3 pl-80">
        <img src={xyz} alt="Your Image" className="w-96 h-80" />
      </div>
    </div>
    <div className="w-full h-12 bg-white-400 border-2 border-black flex justify-center items-center">
    </div>
</div>

    // <p>hello</p>
    // <div className="relative bg-white w-full h-[255.38rem] overflow-hidden text-center text-[1rem] text-chocolate font-roboto">
    //   <div className="absolute top-[166.94rem] left-[29.25rem] rounded-3xs bg-ivory w-[43.25rem] h-[22.81rem]" />
    //   <img
    //     className="absolute top-[166.88rem] left-[29.81rem] w-[11.96rem] h-[11.73rem]"
    //     alt=""
    //     src="/message-icon.svg"
    //   />
    //   <div className="relative bg-gold-200 w-[75rem] h-[6.44rem]">
    //     <div className="absolute top-[148.94rem] left-[0rem] bg-gold-200 w-[75rem] h-[6.44rem]" />
    //   </div>
    //   <div className="absolute top-[10.63rem] left-[0rem] bg-gold-300 w-[75rem] h-[37.19rem]" />
    //   <div className="absolute top-[15.69rem] left-[33.13rem] rounded-3xs box-border w-[37.06rem] h-[29.5rem] border-[3px] border-solid border-khaki" />
    //   <img
    //     className="absolute bottom-[210.81rem] left-[31.63rem] rounded-3xs w-[37.06rem] h-[32.31rem] object-cover"
    //     alt=""
    //     src="/first-image@2x.png"
    //   />
    //   <img
    //     className="absolute top-[-183.5rem] left-[75rem] w-[75rem] h-[37.5rem] object-cover"
    //     alt=""
    //     src="/image11@2x.png"
    //   />
    //   <div className="absolute top-[-183.5rem] left-[90.63rem] bg-crimson w-[43.75rem] h-[9.88rem]" />
    //   <div className="absolute top-[-175.06rem] left-[108.44rem] bg-white w-[8.13rem] h-[2.88rem]" />
    //   <div className="absolute top-[84.94rem] left-[0rem] bg-lightgoldenrodyellow w-[75rem] h-[15.31rem]" />
    //   <div className="absolute top-[18.69rem] left-[-0.81rem] rounded-3xs bg-gold-100 w-[29.44rem] h-[3rem]" />
    //   <img
    //     className="absolute top-[86.22rem] left-[4.41rem] rounded-xl w-[17.81rem] h-[17.81rem]"
    //     alt=""
    //     src="/star-6.svg"
    //   />
    //   <img
    //     className="absolute top-[86.1rem] left-[23.28rem] rounded-xl w-[17.81rem] h-[17.81rem]"
    //     alt=""
    //     src="/star-6.svg"
    //   />
    //   <img
    //     className="absolute top-[85.97rem] left-[41.1rem] rounded-xl w-[17.81rem] h-[17.81rem]"
    //     alt=""
    //     src="/star-6.svg"
    //   />
    //   <img
    //     className="absolute top-[85.85rem] left-[58.91rem] rounded-xl w-[17.81rem] h-[17.81rem]"
    //     alt=""
    //     src="/star-6.svg"
    //   />
    //   <div className="absolute top-[112.75rem] left-[2.63rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
    //   <div className="absolute top-[112.75rem] left-[20.31rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
    //   <div className="absolute top-[112.75rem] left-[38.13rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
    //   <div className="absolute top-[112.75rem] left-[56.06rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
    //   <img
    //     className="absolute top-[113.5rem] left-[3.63rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
    //     alt=""
    //     src="/image@2x.png"
    //   />
    //   <img
    //     className="absolute top-[113.5rem] left-[39.19rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
    //     alt=""
    //     src="/image1@2x.png"
    //   />
    //   <img
    //     className="absolute top-[113.5rem] left-[21.31rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
    //     alt=""
    //     src="/image2@2x.png"
    //   />
    //   <img
    //     className="absolute top-[113.5rem] left-[57.13rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
    //     alt=""
    //     src="/image3@2x.png"
    //   />
    //   <img
    //     className="absolute top-[150.74rem] left-[23.18rem] w-[37.09rem] h-[3.09rem]"
    //     alt=""
    //     src="/vector-5.svg"
    //   />
    //   <div
    //     className="absolute top-[150.75rem] left-[59.88rem] rounded-3xs bg-white w-[10.13rem] h-[2.88rem] cursor-pointer"
    //     onClick={onRectangle11Click}
    //   />
    //   <div className="absolute top-[132.88rem] left-[6.38rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
    //   <div className="absolute top-[132.88rem] left-[24.06rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
    //   <div className="absolute top-[133.81rem] left-[25.06rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
    //     Starting at 49$
    //   </div>
    //   <div className="absolute top-[132.88rem] left-[41.94rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
    //   <div className="absolute top-[133.81rem] left-[42.81rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
    //     Starting at 49$
    //   </div>
    //   <div className="absolute top-[132.88rem] left-[59.88rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
    //   <div className="absolute top-[-193.37rem] left-[-277.56rem] text-[0.81rem] leading-[0.98rem] text-crimson inline-block w-[5.19rem]">{`Hans & Franz`}</div>
    //   <img
    //     className="absolute top-[88.58rem] left-[6.96rem] rounded-md w-[9.38rem] h-[9.38rem]"
    //     alt=""
    //     src="/star-2.svg"
    //   />
    //   <img
    //     className="absolute top-[88.59rem] left-[25.85rem] rounded-md w-[9.19rem] h-[9.38rem]"
    //     alt=""
    //     src="/star-3.svg"
    //   />
    //   <img
    //     className="absolute top-[88.56rem] left-[43.51rem] rounded-md w-[9.88rem] h-[9.38rem]"
    //     alt=""
    //     src="/star-4.svg"
    //   />
    //   <img
    //     className="absolute top-[88.59rem] left-[61.47rem] rounded-md w-[9.19rem] h-[9.38rem]"
    //     alt=""
    //     src="/star-3.svg"
    //   />
    //   <div className="absolute top-[22.69rem] left-[2.81rem] text-[2.25rem] tracking-[0.84px] uppercase font-righteous text-left inline-block w-[24.94rem] h-[6.19rem]">
    //     FRESHLY BAKED EGGLESS CAKES
    //   </div>
    //   <div className="absolute top-[29.63rem] left-[2.81rem] text-[1.13rem] tracking-[0.84px] uppercase text-left inline-block w-[25.81rem]">
    //     hand made with care, PERFECT FOR EVERY CELEBRATION
    //   </div>
    //   <div className="absolute top-[-180.37rem] left-[93.81rem] text-[1.31rem] tracking-[0.84px] leading-[1.84rem] uppercase text-white inline-block w-[37.38rem]">
    //     One Small Step for lil' Franz, One Giant Leap of Franz Combinations
    //   </div>
    //   <div className="absolute top-[-174.19rem] left-[109.56rem] text-[0.88rem] leading-[1.08rem] uppercase text-crimson text-left inline-block w-[5.94rem]">
    //     Learn More
    //   </div>
    //   <div className="absolute top-[52.81rem] left-[20.31rem] text-[2.5rem] tracking-[1.31px] font-righteous inline-block w-[34.38rem]">
    //     Eggless Cakes
    //   </div>
    //   <div className="absolute top-[55.94rem] left-[21.31rem] text-[2.5rem] tracking-[1.31px] font-righteous inline-block w-[33.38rem]">
    //     Grand flavour
    //   </div>
    //   <div className="absolute top-[60.56rem] left-[15rem] text-[1.13rem] tracking-[1.1px] leading-[1.84rem] inline-block w-[44.94rem]">
    //     Experience the magic of our homemade, eggless cakes. Each one is a
    //     flavorful work of art, perfect for any occasion. From elegant designs to
    //     tempting flavors, there's something for every taste. Savor them with
    //     your loved ones or enjoy them at a special party. Every bite will leave
    //     you wanting more.
    //   </div>
    //   <div className="absolute top-[77.19rem] left-[20.31rem] text-[2.5rem] tracking-[2.62px] font-righteous inline-block w-[34.38rem]">
    //     Paa Creations makes sure
    //   </div>
    //   <div
    //     className="absolute top-[105.25rem] left-[20.31rem] text-[2.5rem] tracking-[2.62px] font-righteous inline-block w-[34.38rem]"
    //     data-scroll-to="whatWeBake"
    //   >
    //     What we bake
    //   </div>
    //   <div className="absolute top-[81.56rem] left-[17.31rem] text-[1.13rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[40.44rem]">
    //     Your cakes are made with premium ingredients and wonderful flavors based
    //     on years of experience.
    //   </div>
    //   <div className="absolute top-[90.38rem] left-[9.38rem] text-[1.63rem] leading-[1.97rem] inline-block w-[0.63rem]">
    //     1
    //   </div>
    //   <div className="absolute top-[94.38rem] left-[2.5rem] tracking-[0.84px] leading-[1.84rem] uppercase inline-block w-[14.44rem]">
    //     Home Made cakes
    //   </div>
    //   <div className="absolute top-[90.38rem] left-[28.13rem] text-[1.63rem] leading-[1.97rem] inline-block w-[0.94rem]">
    //     2
    //   </div>
    //   <div className="absolute top-[94.5rem] left-[20.31rem] tracking-[0.84px] leading-[1.84rem] uppercase inline-block w-[16.56rem]">
    //     No Artificial Flavors or Preservatives
    //   </div>
    //   <div className="absolute top-[90.5rem] left-[46rem] text-[1.63rem] leading-[1.97rem] inline-block w-[1.06rem]">
    //     3
    //   </div>
    //   <div className="absolute top-[94.44rem] left-[38.13rem] tracking-[0.84px] leading-[1.84rem] uppercase inline-block w-[16.56rem]">
    //     QUALITY INGREDIENTS
    //   </div>
    //   <div className="absolute top-[90.25rem] left-[63.81rem] text-[1.63rem] leading-[1.97rem] inline-block w-[0.81rem]">
    //     4
    //   </div>
    //   <div className="absolute top-[94.81rem] left-[55.94rem] tracking-[0.84px] leading-[1.84rem] uppercase inline-block w-[16.56rem]">
    //     Equal parts: Flavor + Fun
    //   </div>
    //   <div className="absolute top-[151.25rem] left-[2.5rem] text-[1.31rem] tracking-[0.84px] leading-[1.84rem] uppercase font-medium text-black text-left inline-block w-[26.44rem]">
    //     About us: HERE IS OUR STORY
    //   </div>
    //   <div className="absolute top-[-21.62rem] left-[2.63rem] text-[1.31rem] tracking-[0.84px] leading-[1.84rem] uppercase text-white text-left inline-block w-[6.75rem]">
    //     flavors.
    //   </div>
    //   <div className="absolute top-[151.63rem] left-[59.88rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-black inline-block w-[10.13rem]">
    //     VIEW story
    //   </div>
    //   <div
    //     className="absolute top-[138.25rem] left-[31.13rem] w-[12.88rem] h-[2.88rem] cursor-pointer text-[0.88rem] text-black"
    //     onClick={onViewAllButtonClick}
    //   >
    //     <div className="absolute top-[0rem] left-[1.31rem] rounded-3xs bg-white box-border w-[10.13rem] h-[2.88rem] border-[1px] border-solid border-black" />
    //     <div className="absolute top-[0.88rem] left-[0rem] leading-[1.08rem] uppercase inline-block w-[12.88rem]">
    //       View all
    //     </div>
    //   </div>
    //   <div className="absolute top-[170.69rem] left-[38.13rem] text-[2.5rem] tracking-[0.94px] leading-[1.38rem] font-righteous text-black inline-block w-[25.5rem] h-[1.81rem]">
    //     Lets talk
    //   </div>
    //   <div
    //     className="absolute top-[197.25rem] left-[24.75rem] text-[2.5rem] tracking-[0.94px] leading-[1.38rem] font-righteous text-black inline-block w-[25.5rem] h-[1.81rem] cursor-pointer"
    //     onClick={onInstagramFeedTextClick}
    //   >
    //     Instagram feed
    //   </div>
    //   <div className="absolute top-[59.28rem] left-[12.72rem] box-border w-[50.94rem] h-[0.06rem] border-t-[1px] border-solid border-gold-200" />
    //   <div className="absolute top-[108.84rem] left-[12.72rem] box-border w-[50.94rem] h-[0.06rem] border-t-[1px] border-solid border-gold-200" />
    //   <div
    //     className="absolute top-[34.75rem] left-[2.81rem] rounded-3xs bg-white w-[16.56rem] h-[2.88rem] cursor-pointer"
    //     onClick={onRectangle17Click}
    //   />
    //   <div className="absolute top-[35.75rem] left-[8.5rem] text-[0.88rem] leading-[1.08rem] uppercase text-black inline-block w-[5.25rem] h-[0.94rem]">
    //     Our cakes
    //   </div>
    //   <div className="absolute top-[160.38rem] left-[21.19rem] text-inherit leading-[1.08rem] uppercase font-semibold font-inherit text-dimgray">
    //     <ul className="m-0 pl-[1.31rem]">Choose ur cake</ul>
    //   </div>
    //   <div className="absolute top-[160.38rem] left-[34.38rem] leading-[1.08rem] uppercase font-semibold text-dimgray">
    //     2. Contact us
    //   </div>
    //   <div className="absolute top-[160.38rem] left-[45.31rem] leading-[1.08rem] uppercase font-semibold text-dimgray">
    //     3. Eat the cake
    //   </div>
    //   <img
    //     className="absolute top-[161.69rem] left-[21.06rem] w-[33.63rem] h-[0.19rem]"
    //     alt=""
    //     src="/line-2.svg"
    //   />
    //   <div className="absolute top-[130.69rem] left-[7.25rem] text-[1.13rem] tracking-[2.62px] text-black">
    //     Choco nilla
    //   </div>
    //   <div className="absolute top-[130.69rem] left-[25.06rem] text-[1.13rem] tracking-[2.62px] text-black">
    //     Berry blast
    //   </div>
    //   <div className="absolute top-[130.69rem] left-[42.19rem] text-[1.13rem] tracking-[2.62px] text-black">
    //     Mucho choco
    //   </div>
    //   <div className="absolute top-[130.69rem] left-[58.63rem] text-[1.13rem] tracking-[2.62px] text-black">
    //     Lemony goodness
    //   </div>
    //   <div className="absolute top-[133.81rem] left-[7.25rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
    //     Starting at 49$
    //   </div>
    //   <div className="absolute top-[133.81rem] left-[60.75rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
    //     Starting at 49$
    //   </div>
    //   <div className="absolute top-[19.5rem] left-[3.44rem] tracking-[0.94px] leading-[1.38rem] text-gray-500">
    //     -Cakes from Prachi-
    //   </div>
    //   <img
    //     className="absolute top-[9.38rem] left-[28.63rem] w-[7.25rem] h-[7.25rem]"
    //     alt=""
    //     src="/party1.svg"
    //   />
    //   <div className="absolute top-[12.56rem] left-[30.56rem] text-black text-left flex items-center w-[2.5rem] h-[2.5rem] [transform:_rotate(-30deg)] [transform-origin:0_0]">
    //     Yum!
    //   </div>
    //   <img
    //     className="absolute top-[110.25rem] left-[0rem] w-[7.25rem] h-[7.25rem]"
    //     alt=""
    //     src="/party.svg"
    //   />
    //   <div className="absolute top-[113.5rem] left-[1.94rem] flex items-center justify-center w-[2.5rem] h-[2.5rem] [transform:_rotate(-30deg)] [transform-origin:0_0]">
    //     Top Pick
    //   </div>
    //   <img
    //     className="absolute top-[166.94rem] left-[2.5rem] rounded-3xs w-[25.31rem] h-[22.81rem] object-cover"
    //     alt=""
    //     src="/image12@2x.png"
    //   />
    //   <div className="absolute top-[8.13rem] left-[0rem] rounded-3xs bg-lemon w-[75rem] h-[8.13rem]" />
    //   <div className="absolute top-[0rem] left-[0rem] bg-white w-[7.5rem] h-[8.13rem]" />
    //   <div className="absolute top-[0rem] left-[15rem] bg-white w-[7.5rem] h-[8.13rem]" />
    //   <div className="absolute top-[0rem] left-[30rem] bg-white w-[7.5rem] h-[8.13rem]" />
    //   <div className="absolute top-[0rem] left-[45rem] bg-white w-[7.5rem] h-[8.13rem]" />
    //   <div className="absolute top-[0rem] left-[60rem] bg-white w-[7.5rem] h-[8.13rem]" />
    //   <div className="relative bg-gainsboro w-[22.5rem] h-[5.29rem]">
    //     <div className="absolute top-[6.73rem] left-[52.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
    //     <div className="absolute top-[6.73rem] left-[67.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
    //   </div>
    //   <div
    //     className="absolute top-[3.31rem] left-[47rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium text-black inline-block w-[7.69rem] cursor-pointer"
    //     onClick={onCAKESTextClick}
    //   >
    //     CAKES
    //   </div>
    //   <div className="absolute top-[3.31rem] left-[55.94rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium text-black inline-block w-[7.69rem]">
    //     About
    //   </div>
    //   <div className="absolute top-[3.31rem] left-[64.88rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium text-black inline-block w-[7.63rem]">
    //     Contact
    //   </div>
    //   <div className="absolute top-[232.19rem] left-[0rem] w-[75rem] h-[23.19rem] text-white">
    //     <div className="absolute top-[1.63rem] left-[0rem] bg-khaki w-[75rem] h-[0.19rem]" />
    //     <div className="absolute top-[1.81rem] left-[0rem] bg-black w-[75rem] h-[21.38rem]" />
    //     <div className="absolute top-[0rem] left-[35.5rem] rounded-3xs bg-gold-200 w-[4.06rem] h-[4.06rem]" />
    //     <div className="absolute top-[6.06rem] left-[29.13rem] text-[2.5rem] font-righteous inline-block w-[16.81rem]">
    //       Follow Us
    //     </div>
    //     <div className="absolute top-[14.13rem] left-[29.31rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[16.63rem]">
    //       prachi_153@rediffmail.com
    //     </div>
    //     <div className="absolute top-[16.56rem] left-[32.38rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.44rem]">
    //       +91 9911114128
    //     </div>
    //     <div className="absolute top-[19rem] left-[32.5rem] tracking-[0.94px] leading-[1.38rem] inline-block w-[10.13rem]">
    //       Noida - India
    //     </div>
    //     <img
    //       className="absolute top-[10.44rem] left-[36.63rem] w-[1.94rem] h-[1.94rem] overflow-hidden cursor-pointer"
    //       alt=""
    //       src="/akariconsinstagramfill3.svg"
    //       onClick={onAkarIconsinstagramFillClick}
    //     />
    //     <img
    //       className="absolute top-[10.44rem] left-[39.81rem] w-[1.94rem] h-[1.94rem] overflow-hidden"
    //       alt=""
    //       src="/akariconsfacebookfill1.svg"
    //     />
    //     <img
    //       className="absolute top-[10.5rem] left-[33.63rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
    //       alt=""
    //       src="/akariconswhatsappfill3.svg"
    //     />
    //   </div>
    //   <div className="absolute top-[173.75rem] left-[38.13rem] text-[1.13rem] tracking-[0.94px] leading-[1.63rem] text-gray-100 inline-block w-[25.5rem]">
    //     Paa Creations would love to be at your next event. Our cakes are the
    //     perfect delicacy to celebrate any occasion. Be it your birthday,
    //     anniversary or any other occasion, Paa Creations is here to serve you.
    //   </div>
    //   <img
    //     className="absolute top-[200.31rem] left-[2.5rem] rounded w-[16.81rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-111@2x.png"
    //   />
    //   <img
    //     className="absolute top-[213.31rem] left-[2.5rem] rounded w-[16.81rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-112@2x.png"
    //   />
    //   <img
    //     className="absolute top-[200.31rem] left-[20.56rem] rounded w-[16.75rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-113@2x.png"
    //   />
    //   <img
    //     className="absolute top-[213.31rem] left-[20.56rem] rounded w-[16.75rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-114@2x.png"
    //   />
    //   <img
    //     className="absolute top-[200.31rem] left-[38.56rem] rounded w-[16.75rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-115@2x.png"
    //   />
    //   <img
    //     className="absolute top-[213.31rem] left-[38.56rem] rounded w-[16.75rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-116@2x.png"
    //   />
    //   <img
    //     className="absolute top-[200.31rem] left-[56.56rem] rounded w-[16.81rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-117@2x.png"
    //   />
    //   <img
    //     className="absolute top-[213.31rem] left-[56.56rem] rounded w-[16.81rem] h-[11.75rem] object-cover opacity-[0.9]"
    //     alt=""
    //     src="/rectangle-118@2x.png"
    //   />
    //   <img
    //     className="absolute h-[1.04%] w-[3.38%] top-[91.21%] right-[48.21%] bottom-[7.74%] left-[48.42%] max-w-full overflow-hidden max-h-full"
    //     alt=""
    //     src="/e076735c70194744ac56140b689ba33f5.svg"
    //   />
    //   <img
    //     className="absolute top-[0rem] left-[1.38rem] w-[10.63rem] h-[10.63rem] object-cover"
    //     alt=""
    //     src="/paa-creations-logo-1-1@2x.png"
    //   />
    //   <div
    //     className="absolute top-[183.63rem] left-[42.56rem] rounded-3xs bg-gold-200 w-[16.56rem] h-[2.88rem] cursor-pointer"
    //     onClick={onRectangle28Click}
    //   />
    //   <div className="absolute top-[184.5rem] left-[42.56rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-black inline-block w-[16.56rem]">
    //     Get in tocuh
    //   </div>
    // </div>
  );
};

export default Home;
