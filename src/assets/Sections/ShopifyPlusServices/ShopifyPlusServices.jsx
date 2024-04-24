import TextComponent from "../../Components/TextComponent/TextComponent";
import {
  SerSvg1,
  SerSvg2,
  SerSvg3,
  SerSvg4,
  SerSvg5,
  SerSvg6,
} from "../../Images/ShopifyPlusSvg/ShopifyPlusSvg";

import "./ShopifyPlusService.css";
const ShopifyPlusServices = () => {
  const servicesData = [
    {
      index: 1,
      title: "Store Development",
      content:
        "We develop a Shopify Plus site that meets your eCommerce needs by utilizing attractive designs and templates",
      SvgComponent: SerSvg1,
    },
    {
      index: 2,
      title: "App Development",
      content:
        "We leverage our platform knowledge to create a Shopify app that will facilitate the expansion of your store.",
      SvgComponent: SerSvg2,
    },
    {
      index: 3,
      title: "Migration",
      content:
        "Enhance your online business with our migration service, ensuring a smooth transition.",
      SvgComponent: SerSvg3,
    },
    {
      index: 4,
      title: "Customization",
      content:
        "Empower your ecommerce store's personalization and customer engagement through our customization services.",
      SvgComponent: SerSvg4,
    },
    {
      index: 5,
      title: "Integration",
      content:
        "From integrating third-party tools to payment gateways, our migration services ensure seamless connections.",
      SvgComponent: SerSvg5,
    },
    {
      index: 6,
      title: "Maintenance & Support",
      content:
        "We cover everything from keeping up-to-date with platform updates and the latest releases to offering continuous support.",
      SvgComponent: SerSvg6,
    },
  ];
  return (
    <>
      <div className="relative  bacground_image ">
        <div className="py-[20px] sm:py-[50px] md:py-[90px] lg:py-[120px] ">
          <div>
            <TextComponent
              mainClass="!max-w-full  w-[100%] sm:w-[90%] md:w-[70%]  lg:w-[60%] !text-center"
              spanClass="!text-[#1a50a3] text-center !font-bold "
              headingClass="!pt-[14px] !leading-[30px] !md:leading-[30px] lg:!leading-[56px] text-center  mx-auto font-bold    !pb-[20px]"
              heading="Elevate your online store with the help of our Shopify Plus development services."
              spantext="Why choose us?"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-2 md:w-[100%] pt-[60px] px-[40px ] pb-[50px] max-w-full lg:max-w-[1292px] mx-auto">
            {servicesData.map((serCard, index) => (
              <div
                key={index}
                className=" relative px-[20px] sm:px-[10px] md:px-[20px]  lg:px-[40px] py-[40px] rounded transition-all duration-300 hover:shadow-2xl changeColorSvg  "
              >
                <div>
                  <serCard.SvgComponent />
                </div>
                <div className="mt-[30px]">
                  <h5 className="font-bold leading-[25px] mb-[20px] md:text-[16px] lg:text-[18px] tracking-[-.02em]">
                    {serCard.title}
                  </h5>
                  <p className=" max-w-full lg:max-w-[213px] w-full font-normal text-[16px] leading-[25px] lg:leading-[30px]">
                    {serCard.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopifyPlusServices;
