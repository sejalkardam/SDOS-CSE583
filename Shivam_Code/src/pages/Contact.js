import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const onCAKESTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[98.63rem] overflow-hidden text-center text-[1rem] text-black font-roboto">
      <img
        className="absolute top-[5.81rem] left-[6.44rem] w-[22.18rem] h-[22.18rem] overflow-hidden"
        alt=""
        src="/healthiconscontactsupport.svg"
      />
      <div className="absolute top-[37.31rem] left-[42.25rem] rounded-10xs bg-white box-border w-[25rem] h-[2.25rem] border-[1px] border-solid border-gray-500" />
      <div className="absolute top-[42.56rem] left-[42.25rem] rounded-10xs bg-white box-border w-[25.25rem] h-[2.25rem] border-[1px] border-solid border-gray-600" />
      <div className="absolute top-[48.44rem] left-[42.25rem] bg-white box-border w-[25.25rem] h-[2.38rem] border-[1px] border-solid border-gray-600" />
      <div className="absolute top-[53.81rem] left-[42.25rem] rounded-10xs bg-white box-border w-[25.25rem] h-[10rem] border-[1px] border-solid border-gray-600" />
      <div className="absolute top-[65.06rem] left-[42.25rem] rounded-3xs bg-gold-200 w-[10.13rem] h-[2.88rem]" />
      <div className="absolute top-[-90.94rem] left-[-277.56rem] text-[0.81rem] leading-[0.98rem] text-crimson inline-block w-[5.19rem]">{`Hans & Franz`}</div>
      <div className="absolute top-[12.5rem] left-[17.69rem] text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous inline-block w-[39.69rem]">
        Freshly baked eggless cakes
      </div>
      <div className="absolute top-[16.88rem] left-[15.06rem] text-[1.13rem] tracking-[1.1px] leading-[1.84rem] text-gray-700 inline-block w-[44.88rem]">
        Have questions? Interested in our designer cakes? We’d love to talk to
        you! Use our contact form below to send us a message. We’ll respond just
        as soon as we can.
      </div>
      <div className="absolute top-[29.94rem] left-[42rem] text-[2.5rem] tracking-[2.62px] font-righteous inline-block w-[25.5rem]">
        Message us
      </div>
      <div className="absolute top-[35.56rem] left-[42.25rem] leading-[1.2rem] text-chocolate text-left inline-block w-[5.25rem]">
        Your name
      </div>
      <div className="absolute top-[35.69rem] left-[63.44rem] text-[0.81rem] leading-[0.98rem] text-firebrick text-left inline-block w-[4.06rem]">
        (Required)
      </div>
      <div className="absolute top-[40.81rem] left-[42.25rem] leading-[1.2rem] text-chocolate text-left inline-block w-[6.69rem]">
        Email Address
      </div>
      <div className="absolute top-[46.5rem] left-[63.44rem] text-[0.81rem] leading-[0.98rem] text-firebrick text-left inline-block w-[4.06rem]">
        (Required)
      </div>
      <div className="absolute top-[46.38rem] left-[42.25rem] leading-[1.2rem] text-chocolate text-left inline-block w-[7.31rem]">
        Phone Number
      </div>
      <div className="absolute top-[52.06rem] left-[42.25rem] leading-[1.2rem] text-chocolate text-left inline-block w-[6.75rem]">
        Your Message
      </div>
      <div className="absolute top-[52.19rem] left-[63.44rem] text-[0.81rem] leading-[0.98rem] text-firebrick text-left inline-block w-[4.06rem]">
        (Required)
      </div>
      <div className="absolute top-[65.94rem] left-[45.13rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left">
        Lets talk
      </div>
      <img
        className="absolute top-[15.81rem] left-[21.06rem] w-[33.63rem] h-[0.19rem]"
        alt=""
        src="/line-6.svg"
      />
      <div className="absolute top-[33.05rem] left-[36.86rem] box-border w-[0.03rem] h-[31.72rem] border-r-[0.5px] border-solid border-gray-900" />
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
        className="absolute top-[3.31rem] left-[47rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
        onClick={onCAKESTextClick}
      >
        CAKES
      </div>
      <div
        className="absolute top-[3.31rem] left-[55.94rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
        onClick={onAboutTextClick}
      >
        About
      </div>
      <div className="absolute top-[3.31rem] left-[64.88rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.63rem]">
        Contact
      </div>
      <div className="absolute top-[5.03rem] left-[65.78rem] bg-black box-border w-[5.81rem] h-[0.19rem] border-t-[3px] border-solid border-chocolate" />
      <div className="absolute top-[29.94rem] left-[7.5rem] text-[2.5rem] tracking-[2.62px] font-righteous inline-block w-[25.5rem]">
        Contact us
      </div>
      <img
        className="absolute h-[1.86%] w-[2.58%] top-[55.74%] right-[67.75%] bottom-[42.4%] left-[29.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[1.7%] w-[2.37%] top-[55.8%] right-[71.97%] bottom-[42.5%] left-[25.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute h-[1.68%] w-[2.32%] top-[55.8%] right-[76.01%] bottom-[42.52%] left-[21.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute top-[34.13rem] left-[7.63rem] text-[1.25rem] tracking-[1.1px] leading-[1.84rem] inline-block w-[25.38rem]">
        <p className="m-0 font-medium"></p>
        <p className="m-0 font-semibold">Address</p>
        <p className="m-0">{`A-1802, Amrapali Sapphire, `}</p>
        <p className="m-0">Sector-45, Noida</p>
        <p className="m-0 font-semibold">&nbsp;</p>
        <p className="m-0">+91-9911114128</p>
        <p className="m-0">prachi_153@rediffmail.com</p>
        <p className="m-0 font-medium">&nbsp;</p>
        <p className="m-0 font-semibold">Working hours</p>
        <p className="m-0">{`Monday - Sunday: `}</p>
        <p className="m-0">10:00-22:00</p>
        <p className="m-0 font-medium">&nbsp;</p>
        <p className="m-0 font-medium"></p>
      </div>
      <img
        className="absolute top-[0rem] left-[1.38rem] w-[10.63rem] h-[10.63rem] object-cover cursor-pointer"
        alt=""
        src="/paa-creations-logo-1-1@2x.png"
        onClick={onPaaCreationsLogo11Click}
      />
      <div className="absolute top-[75.44rem] left-[0rem] w-[75rem] h-[23.19rem] text-white">
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
          src="/akariconsinstagramfill.svg"
        />
        <img
          className="absolute top-[10.44rem] left-[39.81rem] w-[1.94rem] h-[1.94rem] overflow-hidden"
          alt=""
          src="/akariconsfacebookfill.svg"
        />
        <img
          className="absolute top-[10.5rem] left-[33.63rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/akariconswhatsappfill.svg"
        />
      </div>
      <img
        className="absolute h-[2.7%] w-[3.38%] top-[77.25%] right-[48.21%] bottom-[20.05%] left-[48.42%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/e076735c70194744ac56140b689ba33f1.svg"
      />
    </div>
  );
};

export default Contact;
