import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage2 = () => {
  const navigate = useNavigate();

  const onHomeCakesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIMAGE1Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onRectangle15Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCAKESTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/product-page2");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/product-page2");
  }, [navigate]);

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[159.44rem] overflow-hidden text-center text-[1rem] text-black font-roboto">
      <div className="absolute top-[56.31rem] left-[11.56rem] bg-gray-200 w-[52.06rem] h-[24.44rem]" />
      <img
        className="absolute top-[16.88rem] left-[4.88rem] rounded-3xs w-[28.5rem] h-[29.63rem] object-cover"
        alt=""
        src="/image10@2x.png"
      />
      <div className="absolute top-[30.75rem] left-[38.13rem] rounded-3xs bg-lightgreen w-[10.13rem] h-[3.13rem]" />
      <div className="absolute top-[30.75rem] left-[49.5rem] rounded-3xs box-border w-[10.13rem] h-[3.13rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[-65.62rem] left-[-277.56rem] text-[0.81rem] leading-[0.98rem] text-crimson inline-block w-[5.19rem]">{`Hans & Franz`}</div>
      <div className="absolute top-[16.88rem] left-[38.13rem] text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous text-left inline-block w-[24.94rem]">
        Choco madness
      </div>
      <div className="absolute top-[21rem] left-[38.13rem] tracking-[0.94px] leading-[1.38rem] text-gray-700 text-left inline-block w-[34.19rem] h-[4rem]">
        We talk like triple chocolate here! A fan favorite and full on rich
        chocolate flavour and texture of this cake is set to be a favorite of
        yours, too.
      </div>
      <div className="absolute top-[29.06rem] left-[38.13rem] font-medium font-h2-petite text-left inline-block w-[11.38rem]">
        MESSAGE TO ORDER:
      </div>
      <div className="absolute top-[31.81rem] left-[40.63rem] text-[0.88rem] uppercase font-medium inline-block w-[6.13rem]">
        Whatsapp
      </div>
      <div className="absolute top-[31.81rem] left-[50.75rem] text-[0.88rem] uppercase font-medium text-chocolate inline-block w-[7.63rem]">
        email
      </div>
      <div
        className="absolute top-[13.06rem] left-[2.63rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium cursor-pointer text-gray-900"
        onClick={onHomeCakesClick}
      >
        <span>{`Home / Cakes / `}</span>
        <span className="text-black">Choco</span>
      </div>
      <div className="absolute top-[47.56rem] left-[17.56rem] rounded-[50%] bg-black w-[1rem] h-[1rem]" />
      <div className="absolute top-[47.56rem] left-[19.56rem] rounded-[50%] box-border w-[1rem] h-[1rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[47.56rem] left-[21.56rem] rounded-[50%] box-border w-[1rem] h-[1rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[100.38rem] left-[2.63rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[100.38rem] left-[20.31rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[100.38rem] left-[38.13rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
      <div className="absolute top-[100.38rem] left-[56.06rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
      <img
        className="absolute top-[101.13rem] left-[3.63rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover cursor-pointer"
        alt=""
        src="/image@2x.png"
        onClick={onIMAGE1Click}
      />
      <img
        className="absolute top-[101.13rem] left-[39.19rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <img
        className="absolute top-[101.13rem] left-[21.31rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
        alt=""
        src="/image2@2x.png"
      />
      <img
        className="absolute top-[101.13rem] left-[57.13rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
        alt=""
        src="/image3@2x.png"
      />
      <div
        className="absolute top-[120.5rem] left-[6.38rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem] cursor-pointer"
        onClick={onRectangle7Click}
      />
      <div className="absolute top-[120.5rem] left-[24.06rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
      <div className="absolute top-[121.44rem] left-[25.06rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
        Starting at 49$
      </div>
      <div className="absolute top-[120.5rem] left-[41.94rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
      <div className="absolute top-[121.44rem] left-[42.81rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
        Starting at 49$
      </div>
      <div className="absolute top-[120.5rem] left-[59.88rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
      <div className="absolute top-[118.31rem] left-[7.25rem] text-[1.13rem] tracking-[2.62px]">
        Choco nilla
      </div>
      <div className="absolute top-[118.31rem] left-[25.06rem] text-[1.13rem] tracking-[2.62px]">
        Berry blast
      </div>
      <div className="absolute top-[118.31rem] left-[42.19rem] text-[1.13rem] tracking-[2.62px]">
        Mucho choco
      </div>
      <div className="absolute top-[118.31rem] left-[58.63rem] text-[1.13rem] tracking-[2.62px]">
        Lemony goodness
      </div>
      <div className="absolute top-[121.44rem] left-[7.25rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
        Starting at 49$
      </div>
      <div className="absolute top-[121.44rem] left-[60.75rem] text-[0.88rem] leading-[1.08rem] uppercase font-medium text-chocolate text-left inline-block w-[7.25rem] h-[1.06rem]">
        Starting at 49$
      </div>
      <img
        className="absolute top-[97.88rem] left-[0rem] w-[7.25rem] h-[7.25rem]"
        alt=""
        src="/party.svg"
      />
      <div className="absolute top-[101.06rem] left-[1.94rem] text-chocolate flex items-center justify-center w-[2.5rem] h-[2.5rem] [transform:_rotate(-30deg)] [transform-origin:0_0]">
        Top Pick
      </div>
      <img
        className="absolute top-[31.39rem] left-[34.83rem] w-[1.05rem] h-[1.84rem]"
        alt=""
        src="/arrow-1.svg"
      />
      <img
        className="absolute top-[31.39rem] left-[2.38rem] w-[1.05rem] h-[1.84rem]"
        alt=""
        src="/arrow-11.svg"
      />
      <div className="absolute top-[8.13rem] left-[0rem] rounded-3xs bg-lemon w-[75rem] h-[8.13rem]" />
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[7.5rem] h-[8.13rem]" />
      <div className="absolute top-[0rem] left-[15rem] bg-white w-[7.5rem] h-[8.13rem]" />
      <div className="absolute top-[0rem] left-[30rem] bg-white w-[7.5rem] h-[8.13rem]" />
      <div
        className="absolute top-[0rem] left-[45rem] bg-white w-[7.5rem] h-[8.13rem] cursor-pointer"
        onClick={onRectangle15Click}
      />
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
      <div
        className="absolute top-[3.31rem] left-[64.88rem] text-[1.25rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.63rem] cursor-pointer"
        onClick={onContactTextClick}
      >
        Contact
      </div>
      <div className="absolute top-[93rem] left-[19.63rem] text-[2.5rem] tracking-[2.62px] font-righteous inline-block w-[34.38rem]">
        More bentos
      </div>
      <div className="absolute top-[96.59rem] left-[12.03rem] box-border w-[50.94rem] h-[0.06rem] border-t-[1px] border-solid border-gold-200" />
      <div
        className="absolute top-[125.88rem] left-[32.44rem] rounded-3xs bg-white box-border w-[10.13rem] h-[2.88rem] cursor-pointer border-[1px] border-solid border-black"
        onClick={onRectangle19Click}
      />
      <div className="absolute top-[126.75rem] left-[31.06rem] text-[0.88rem] leading-[1.08rem] uppercase inline-block w-[12.88rem]">
        View all
      </div>
      <img
        className="absolute top-[31.69rem] left-[39.38rem] w-[1.27rem] h-[1.25rem]"
        alt=""
        src="/vector3.svg"
      />
      <div className="absolute top-[35.63rem] left-[38.13rem] w-[34.38rem] h-[10.88rem] text-left font-h2-petite">
        <img
          className="absolute top-[1.44rem] left-[32.19rem] w-[0.94rem] h-[0.94rem] cursor-pointer"
          alt=""
          src="/.svg"
          onClick={onIconClick}
        />
        <img
          className="absolute top-[5rem] left-[32.19rem] w-[0.94rem] h-[0.94rem]"
          alt=""
          src="/.svg"
        />
        <img
          className="absolute top-[8.56rem] left-[32.19rem] w-[0.94rem] h-[0.94rem]"
          alt=""
          src="/.svg"
        />
        <div className="absolute top-[0rem] left-[0rem] box-border w-[34.38rem] h-[10.88rem] border-[0.5px] border-solid border-gray-300" />
        <div
          className="absolute top-[0.81rem] left-[0.19rem] flex flex-row items-start justify-start p-[0.63rem] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className="relative">ALLERGENTS</div>
        </div>
        <div className="absolute top-[5rem] left-[0.81rem]">INGREDIENTS</div>
        <div className="absolute top-[8.56rem] left-[0.81rem]">SIZE</div>
        <div className="absolute top-[3.73rem] left-[-0.02rem] box-border w-[34.22rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-300" />
        <div className="absolute top-[7.3rem] left-[-0.02rem] box-border w-[34.22rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-300" />
      </div>
      <img
        className="absolute top-[31.56rem] left-[50.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/carbonemail.svg"
      />
      <div className="absolute top-[49.06rem] left-[22.95rem] text-[0.75rem] font-h2-petite text-left" />
      <div className="absolute top-[53.25rem] left-[15.63rem] w-[45rem] h-[32.31rem] text-left text-[1.38rem] font-h2-petite">
        <b className="absolute top-[0rem] left-[1.94rem] text-[1.5rem]">
          Facebook Reviews: (12)
        </b>
        <img
          className="absolute top-[4.38rem] left-[1.94rem] rounded-[50%] w-[5.13rem] h-[5rem] object-cover"
          alt=""
          src="/ellipse-8@2x.png"
        />
        <img
          className="absolute top-[17.5rem] left-[1.94rem] rounded-[50%] w-[5rem] h-[5rem] object-cover"
          alt=""
          src="/ellipse-9@2x.png"
        />
        <div className="absolute top-[4.38rem] left-[11.44rem] tracking-[0.46px] font-medium font-roboto inline-block w-[32.38rem] h-[7.5rem]">
          <p className="m-0">Loren S.</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-[1.13rem]">{`The kids absolutely loved the frosting and the texture was fantastic! `}</p>
          <p className="m-0 text-[1.13rem]">Very recommended</p>
        </div>
        <div className="absolute top-[17.5rem] left-[11.25rem] tracking-[0.46px] inline-block w-[32.56rem] h-[7.5rem] font-roboto">
          <p className="m-0 font-h2-petite">
            <b>Ivan K.</b>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            My first time ordering, definatly was a pleasent surprise
          </p>
        </div>
        <div className="absolute top-[29.06rem] left-[10.56rem] rounded-3xs bg-gold-200 w-[11.69rem] h-[3.25rem] flex flex-row items-start justify-start p-[0.63rem] box-border text-center text-[1rem]">
          <div className="relative flex items-center justify-center w-[10.25rem] h-[1.88rem] shrink-0">
            ADD COMMENT
          </div>
        </div>
        <div className="absolute top-[29rem] left-[23.5rem] rounded-3xs bg-white box-border w-[11.69rem] h-[3.25rem] flex flex-row items-start justify-start p-[0.63rem] text-center text-[1rem] border-[1px] border-solid border-black">
          <div className="relative flex items-center justify-center w-[10.25rem] h-[1.88rem] shrink-0">
            VIEW ALL
          </div>
        </div>
        <div className="absolute top-[27.48rem] left-[0.73rem] box-border w-[44.28rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-900" />
        <div className="absolute top-[14.36rem] left-[-0.02rem] box-border w-[44.28rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-900" />
      </div>
      <b className="absolute top-[64.94rem] left-[49.63rem] font-h2-petite text-left">
        Reply
      </b>
      <b className="absolute top-[78.06rem] left-[49.63rem] font-h2-petite text-left">
        Reply
      </b>
      <img
        className="absolute top-[64.81rem] left-[53.88rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/bxlike.svg"
      />
      <img
        className="absolute top-[77.88rem] left-[53.88rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/bxlike.svg"
      />
      <b className="absolute top-[25.75rem] left-[38.13rem] text-[1.5rem] font-h2-petite text-left">
        49$
      </b>
      <img
        className="absolute top-[0rem] left-[1.38rem] w-[10.63rem] h-[10.63rem] object-cover cursor-pointer"
        alt=""
        src="/paa-creations-logo-1-1@2x.png"
        onClick={onPaaCreationsLogo11Click}
      />
      <div className="absolute top-[136.25rem] left-[0rem] w-[75rem] h-[23.19rem] text-white">
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
          src="/akariconsinstagramfill2.svg"
        />
        <img
          className="absolute top-[10.44rem] left-[39.81rem] w-[1.94rem] h-[1.94rem] overflow-hidden"
          alt=""
          src="/akariconsfacebookfill.svg"
        />
        <img
          className="absolute top-[10.5rem] left-[33.63rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/akariconswhatsappfill2.svg"
        />
      </div>
      <img
        className="absolute h-[1.67%] w-[3.38%] top-[85.93%] right-[48.21%] bottom-[12.4%] left-[48.42%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/e076735c70194744ac56140b689ba33f3.svg"
      />
    </div>
  );
};

export default ProductPage2;
