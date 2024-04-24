import "./TextAndImageBannar.css";
import GreenArrow from "../../Images/GreenArrow.svg";
import Button from "../../Components/Button/Buton";
import AppsCard from "../../Components/AppsCard/AppsCard";
import ShopifyBuild from "../../Components/ShopifyBuildSmall/ShopifyBuild";
export default function TextAndImageBannar(props) {
  return (
    <>
      <div
        className={`bg-black  pt-[100px] pb-[60px] ${props.background_color}`}
      >
        <div
          className={`flex flex-col-reverse  justify-center  lg:flex-row max-w-[1620px] w-full mx-auto px-[15px]  ${props.main_class}`}
        >
          <div
            className={`w-[90%] Custom_padding font-semibold  lg:w-1/2 pt-[50px] text-center lg:text-left lg:pt-[16px] ${props.textbannar}  `}
          >
            {props.buildText && <ShopifyBuild buildText={props.buildText} />}
            {props.TopLinkText && (
              <div
                className={`bg-[#ceff92] py-[10px] max-w-max flex items-center px-[24px] rounded-full gap-x-[8px] mb-[20px] ${props.TopLinkClass}`}
              >
                <span>
                  <img
                    className="w-[20px ] h-[20px]"
                    src={props.TopLinkImg}
                    alt=""
                  />
                </span>
                <span
                  className={`text-[#084f17] text-[11px] font-bold leading-[15px] tracking-[1.32px] uppercase ${props.TopLinkTextClass}`}
                >
                  <p>{props.TopLinkText}</p>
                </span>
              </div>
            )}
            {props.linkText && (
              <div className="flex pb-[20px] justify-center md:justify-start lg:justify-start  ">
                <img src={props.svg} alt="" />
              </div>
            )}
            <h1
              className={`tracking-[-.04em] mb-[20px] w-full  font-semibold text-[30px] lg:text-[54px] leading-[42px] lg:leading-[62px] text-white ${props.heading_class} `}
            >
              {props.Bannartilte}
            </h1>
            <p
              className={` leading-[23px] text-[16px] pb-[30px] max-w-full text-white ${props.content_class}`}
            >
              {props.content_1}
              <br />
              {props.content_2}
            </p>
            <div>
              {props.linkText && (
                <a className="flex gap-[1.25em] text-[#a5e359] hover:gap-[2.25em] font-bold text-[18px] leading-[25px] tracking-[-.02em] transition-all duration-300 ease-in-out lg:justify-start justify-center">
                  {props.linkText}
                  <img src={GreenArrow} alt="vsdfsdf" />
                </a>
              )}
            </div>
            {props.btnText && (
              <div>
                <Button btn={props.btnText} to={"/ShopifyPlus"} />
              </div>
            )}

            {props.rating && (
              <div className="block">
                <AppsCard
                  ratingTextClass={props.ratingTextClass}
                  rating={props.rating}
                  totlePersons={props.totlePersons}
                  dwonloads={props.dwonloads}
                  mainCardDiv={props.mainCardDiv}
                  mainCardClass={props.mainCardClass}
                  CardContantClass={props.CardContantClass}
                  ratingClass={props.ratingClass}
                  dwonloadsTextClass={props.dwonloadsTextClass}
                />
              </div>
            )}
          </div>
          <div className={`w-[90%] lg:w-1/2 lg:pl-[50px] ${props.ImgBannar} `}>
            <img className="w-full" src={props.img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
