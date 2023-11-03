import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage1 = () => {
  const navigate = useNavigate();

  const onMilkChocolateSaltClick = useCallback(() => {
    navigate("/product-page1");
  }, [navigate]);

  const onIMAGE1Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
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

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeCakesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle18Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[159.44rem] overflow-hidden text-center text-[0.81rem] text-crimson font-roboto">
      <div className="absolute top-[-65.62rem] left-[-277.56rem] leading-[0.98rem] inline-block w-[5.19rem]">{`Hans & Franz`}</div>
      <div className="absolute top-[-65.62rem] left-[0rem] w-[75rem] h-[225.06rem] overflow-hidden text-[1rem] text-black">
        <div className="absolute top-[65.63rem] left-[0rem] w-[75rem] h-[159.44rem] overflow-hidden">
          <div className="absolute top-[16.88rem] left-[2.5rem] w-[70rem] h-[29.63rem] overflow-hidden text-left">
            <img
              className="absolute top-[0rem] left-[2.38rem] rounded-3xs w-[28.5rem] h-[29.63rem] object-cover"
              alt=""
              src="/image10@2x.png"
            />
            <img
              className="absolute top-[14.52rem] left-[32.33rem] w-[1.05rem] h-[1.84rem]"
              alt=""
              src="/arrow-1.svg"
            />
            <img
              className="absolute top-[14.52rem] left-[0rem] w-[0.92rem] h-[1.84rem]"
              alt=""
              src="/arrow-11.svg"
            />
            <div className="absolute top-[0rem] left-[35.63rem] w-[34.38rem] h-[29.63rem] overflow-hidden">
              <div className="absolute top-[13.88rem] left-[0rem] rounded-3xs bg-lightgreen w-[10.13rem] h-[3.13rem]" />
              <div className="absolute top-[13.88rem] left-[11.38rem] rounded-3xs box-border w-[10.13rem] h-[3.13rem] border-[1px] border-solid border-black" />
              <div className="absolute top-[0rem] left-[0rem] text-[2.5rem] tracking-[1.31px] leading-[2.87rem] font-righteous inline-block w-[24.94rem]">
                Choco madness
              </div>
              <div className="absolute top-[4.13rem] left-[0rem] tracking-[0.94px] leading-[1.38rem] text-gray-700 inline-block w-[34.19rem] h-[4rem]">
                We talk like triple chocolate here! A fan favorite and full on
                rich chocolate flavour and texture of this cake is set to be a
                favorite of yours, too.
              </div>
              <div className="absolute top-[12.19rem] left-[0rem] font-medium font-h2-petite inline-block w-[11.38rem]">
                MESSAGE TO ORDER:
              </div>
              <div className="absolute top-[14.94rem] left-[2.5rem] text-[0.88rem] uppercase font-medium text-center inline-block w-[6.13rem]">
                Whatsapp
              </div>
              <div className="absolute top-[14.94rem] left-[12.63rem] text-[0.88rem] uppercase font-medium text-chocolate text-center inline-block w-[7.63rem]">
                email
              </div>
              <img
                className="absolute top-[14.81rem] left-[1.25rem] w-[1.27rem] h-[1.25rem]"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute top-[14.69rem] left-[12.63rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="/carbonemail.svg"
              />
              <b className="absolute top-[8.88rem] left-[0rem] text-[1.5rem] font-h2-petite">
                49$
              </b>
              <div className="absolute top-[18.75rem] left-[0rem] w-[34.38rem] h-[10.88rem] font-h2-petite">
                <div className="absolute bottom-[0rem] left-[0rem] box-border w-[34.38rem] h-[10.88rem] border-[0.5px] border-solid border-gray-300">
                  <div className="absolute top-[8.56rem] left-[0.81rem] w-[32.31rem] h-[1.19rem] overflow-hidden">
                    <img
                      className="absolute bottom-[0.25rem] left-[31.38rem] w-[0.94rem] h-[0.94rem]"
                      alt=""
                      src="/.svg"
                    />
                    <div className="absolute bottom-[0rem] left-[0rem]">
                      SIZE
                    </div>
                  </div>
                  <div className="absolute top-[3.75rem] left-[0rem] w-[34.19rem] h-[3.56rem] overflow-hidden">
                    <div className="absolute bottom-[3.55rem] left-[-0.02rem] box-border w-[34.22rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-300" />
                    <div className="absolute bottom-[-0.02rem] left-[-0.02rem] box-border w-[34.22rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-300" />
                    <div className="absolute top-[1.25rem] left-[0.81rem] w-[32.31rem] h-[1.19rem] overflow-hidden">
                      <img
                        className="absolute bottom-[0.25rem] left-[31.38rem] w-[0.94rem] h-[0.94rem]"
                        alt=""
                        src="/.svg"
                      />
                      <div className="absolute bottom-[0rem] left-[0rem]">
                        INGREDIENTS
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-[1.56rem] left-[0.75rem] inline-block w-[32.38rem] h-[1.06rem] cursor-pointer"
                  onClick={onMilkChocolateSaltClick}
                >
                  Milk, Chocolate, Salt, Cream, Sugar, Nuts
                </div>
              </div>
              <div className="absolute top-[20.59rem] left-[32.16rem] box-border w-[1rem] h-[0.06rem] border-t-[1px] border-solid border-black" />
            </div>
          </div>
          <img
            className="absolute top-[47.56rem] left-[17.56rem] w-[39.88rem] h-[1rem] overflow-hidden"
            alt=""
            src="/frame4.svg"
          />
          <div className="absolute top-[53.25rem] left-[11.38rem] w-[52.25rem] h-[32.31rem] overflow-hidden text-left text-[1.38rem]">
            <div className="absolute top-[0rem] left-[0.19rem] w-[52.06rem] h-[32.31rem] overflow-hidden">
              <div className="absolute top-[0rem] left-[0rem] w-[52.06rem] h-[32.31rem] overflow-hidden">
                <div className="absolute top-[0rem] left-[0rem] w-[52.06rem] h-[27.5rem] overflow-hidden">
                  <div className="absolute top-[3.06rem] left-[0rem] bg-gray-200 w-[52.06rem] h-[24.44rem]" />
                </div>
                <div className="absolute top-[0rem] left-[4.06rem] w-[45rem] h-[32.31rem]">
                  <div className="absolute top-[4.38rem] left-[1.94rem] w-[41.88rem] h-[7.5rem] overflow-hidden">
                    <img
                      className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[5.13rem] h-[5rem] object-cover"
                      alt=""
                      src="/ellipse-8@2x.png"
                    />
                    <div className="absolute top-[0rem] left-[9.5rem] tracking-[0.46px] font-medium inline-block w-[32.38rem] h-[7.5rem]">
                      <p className="m-0">Loren S.</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0 text-[1.13rem]">{`The kids absolutely loved the frosting and the texture was fantastic! `}</p>
                      <p className="m-0 text-[1.13rem]">Very recommended</p>
                    </div>
                  </div>
                  <div className="absolute top-[17.5rem] left-[1.94rem] w-[41.88rem] h-[7.5rem] overflow-hidden">
                    <img
                      className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[5rem] h-[5rem] object-cover"
                      alt=""
                      src="/ellipse-9@2x.png"
                    />
                    <div className="absolute top-[0rem] left-[9.31rem] tracking-[0.46px] inline-block w-[32.56rem] h-[7.5rem]">
                      <p className="m-0 font-h2-petite">
                        <b>Ivan K.</b>
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        My first time ordering, definatly was a pleasent
                        surprise
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[29rem] left-[10.56rem] w-[24.63rem] h-[3.31rem] overflow-hidden text-center text-[1rem] font-h2-petite">
                    <div className="absolute top-[0.06rem] left-[0rem] rounded-3xs bg-gold-200 w-[11.69rem] h-[3.25rem] flex flex-row items-start justify-start p-[0.63rem] box-border">
                      <div className="relative flex items-center justify-center w-[10.25rem] h-[1.88rem] shrink-0">
                        ADD COMMENT
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[12.94rem] rounded-3xs bg-white box-border w-[11.69rem] h-[3.25rem] flex flex-row items-start justify-start p-[0.63rem] border-[1px] border-solid border-black">
                      <div className="relative flex items-center justify-center w-[10.25rem] h-[1.88rem] shrink-0">
                        VIEW ALL
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] w-[19.31rem] h-[1.81rem] overflow-hidden text-[1.5rem] font-h2-petite">
                    <b className="absolute top-[0rem] left-[1.94rem]">
                      Facebook Reviews: (12)
                    </b>
                  </div>
                  <div className="absolute top-[27.48rem] left-[0.73rem] box-border w-[44.28rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-900" />
                  <div className="absolute top-[14.36rem] left-[-0.02rem] box-border w-[44.28rem] h-[0.03rem] border-t-[0.5px] border-solid border-gray-900" />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[38.06rem] w-[5.75rem] h-[26.13rem] overflow-hidden text-[1rem] font-h2-petite">
                <div className="absolute top-[0rem] left-[0rem] w-[2.75rem] h-[12.88rem] overflow-hidden">
                  <b className="absolute top-[11.69rem] left-[0rem]">Reply</b>
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[2.75rem] h-[26rem] overflow-hidden">
                  <b className="absolute top-[24.81rem] left-[0rem]">Reply</b>
                </div>
                <img
                  className="absolute top-[0rem] left-[4.25rem] w-[1.5rem] h-[26.13rem] overflow-hidden"
                  alt=""
                  src="/frame5.svg"
                />
                <img
                  className="absolute top-[0rem] left-[4.25rem] w-[1.5rem] h-[13.06rem] overflow-hidden"
                  alt=""
                  src="/frame6.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[97.88rem] left-[0rem] w-[75rem] h-[26.5rem] overflow-hidden text-[0.88rem] text-chocolate">
            <div className="absolute top-[0rem] left-[0rem] w-[72.63rem] h-[26.5rem] overflow-hidden">
              <div className="absolute top-[2.5rem] left-[2.63rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
              <div className="absolute top-[2.5rem] left-[20.31rem] rounded-3xs box-border w-[16.44rem] h-[24rem] border-[1px] border-solid border-black" />
              <div className="absolute top-[2.5rem] left-[38.13rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
              <div className="absolute top-[2.5rem] left-[56.06rem] rounded-3xs box-border w-[16.56rem] h-[24rem] border-[1px] border-solid border-black" />
              <img
                className="absolute top-[3.25rem] left-[3.63rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover cursor-pointer"
                alt=""
                src="/image@2x.png"
                onClick={onIMAGE1Click}
              />
              <img
                className="absolute top-[3.25rem] left-[39.19rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
                alt=""
                src="/image1@2x.png"
              />
              <img
                className="absolute top-[3.25rem] left-[21.31rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
                alt=""
                src="/image2@2x.png"
              />
              <img
                className="absolute top-[3.25rem] left-[57.13rem] rounded-3xs w-[14.44rem] h-[15.06rem] object-cover"
                alt=""
                src="/image3@2x.png"
              />
              <div
                className="absolute top-[22.63rem] left-[6.38rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem] cursor-pointer"
                onClick={onRectangle7Click}
              />
              <div className="absolute top-[22.63rem] left-[24.06rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
              <div className="absolute top-[23.56rem] left-[25.06rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
                Starting at 49$
              </div>
              <div className="absolute top-[22.63rem] left-[41.94rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
              <div className="absolute top-[23.56rem] left-[42.81rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
                Starting at 49$
              </div>
              <div className="absolute top-[22.63rem] left-[59.88rem] rounded-3xs bg-gold-200 w-[8.94rem] h-[2.88rem]" />
              <div className="absolute top-[20.44rem] left-[7.25rem] text-[1.13rem] tracking-[2.62px] text-black">
                Choco nilla
              </div>
              <div className="absolute top-[20.44rem] left-[25.06rem] text-[1.13rem] tracking-[2.62px] text-black">
                Berry blast
              </div>
              <div className="absolute top-[20.44rem] left-[42.19rem] text-[1.13rem] tracking-[2.62px] text-black">
                Mucho choco
              </div>
              <div className="absolute top-[20.44rem] left-[58.63rem] text-[1.13rem] tracking-[2.62px] text-black">
                Lemony goodness
              </div>
              <div className="absolute top-[23.56rem] left-[7.25rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
                Starting at 49$
              </div>
              <div className="absolute top-[23.56rem] left-[60.75rem] leading-[1.08rem] uppercase font-medium text-left inline-block w-[7.25rem] h-[1.06rem]">
                Starting at 49$
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[7.25rem] h-[7.25rem]"
                alt=""
                src="/party.svg"
              />
              <div className="absolute top-[3.19rem] left-[1.94rem] text-[1rem] flex items-center justify-center w-[2.5rem] h-[2.5rem] [transform:_rotate(-30deg)] [transform-origin:0_0]">
                Top Pick
              </div>
            </div>
          </div>
          <div className="absolute top-[125.88rem] left-[31.06rem] w-[12.88rem] h-[2.88rem] overflow-hidden text-[0.88rem]">
            <div
              className="absolute top-[0rem] left-[1.38rem] rounded-3xs bg-white box-border w-[10.13rem] h-[2.88rem] cursor-pointer border-[1px] border-solid border-black"
              onClick={onRectangle11Click}
            />
            <div className="absolute top-[0.88rem] left-[0rem] leading-[1.08rem] uppercase inline-block w-[12.88rem]">
              View all
            </div>
          </div>
          <div className="absolute top-[136.25rem] left-[0rem] w-[75rem] h-[23.19rem] overflow-hidden text-white">
            <img
              className="absolute h-[11.49%] w-[3.38%] top-[3.23%] right-[48.21%] bottom-[85.28%] left-[48.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/e076735c70194744ac56140b689ba33f4.svg"
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
                src="/frame7.svg"
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
          <div className="absolute top-[93rem] left-[19.63rem] w-[35.75rem] h-[3.13rem] overflow-hidden text-[2.5rem] font-righteous">
            <div className="absolute top-[0rem] left-[0rem] tracking-[2.62px] inline-block w-[34.38rem]">
              More bentos
            </div>
          </div>
          <div className="absolute top-[96.59rem] left-[12.03rem] box-border w-[50.94rem] h-[0.06rem] border-t-[1px] border-solid border-gold-200" />
          <div className="absolute top-[49.06rem] left-[22.95rem] text-[0.75rem] font-h2-petite text-left" />
          <div className="absolute top-[0rem] left-[0rem] w-[75rem] h-[14.38rem] overflow-hidden text-[1.25rem]">
            <div
              className="absolute top-[3.31rem] left-[47rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
              onClick={onCAKESTextClick}
            >
              CAKES
            </div>
            <div
              className="absolute top-[3.31rem] left-[55.94rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.69rem] cursor-pointer"
              onClick={onAboutTextClick}
            >
              About
            </div>
            <div
              className="absolute top-[3.31rem] left-[64.88rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium inline-block w-[7.63rem] cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </div>
            <img
              className="absolute top-[0rem] left-[1.38rem] w-[10.63rem] h-[10.63rem] object-cover cursor-pointer"
              alt=""
              src="/paa-creations-logo-1-1@2x.png"
              onClick={onPaaCreationsLogo11Click}
            />
            <div className="absolute top-[0rem] left-[2.63rem] w-[12.56rem] h-[14.38rem] overflow-hidden text-[1rem] text-gray-900">
              <div
                className="absolute top-[13.06rem] left-[0rem] tracking-[1.19px] leading-[1.28rem] uppercase font-medium cursor-pointer"
                onClick={onHomeCakesClick}
              >
                <span>{`Home / Cakes / `}</span>
                <span className="text-black">Choco</span>
              </div>
            </div>
            <div className="absolute top-[8.13rem] left-[0rem] rounded-3xs bg-lemon w-[75rem] h-[8.13rem]" />
            <div className="absolute top-[0rem] left-[0rem] bg-white w-[7.5rem] h-[8.13rem]" />
            <div className="absolute top-[0rem] left-[15rem] bg-white w-[7.5rem] h-[8.13rem]" />
            <div className="absolute top-[0rem] left-[30rem] bg-white w-[7.5rem] h-[8.13rem]" />
            <div
              className="absolute top-[0rem] left-[45rem] bg-white w-[7.5rem] h-[8.13rem] cursor-pointer"
              onClick={onRectangle18Click}
            />
            <div className="absolute top-[0rem] left-[60rem] bg-white w-[7.5rem] h-[8.13rem]" />
            <div className="relative bg-gainsboro w-[22.5rem] h-[5.29rem]">
              <div className="absolute top-[6.73rem] left-[52.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
              <div className="absolute top-[6.73rem] left-[67.5rem] bg-gainsboro w-[7.5rem] h-[5.29rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage1;
