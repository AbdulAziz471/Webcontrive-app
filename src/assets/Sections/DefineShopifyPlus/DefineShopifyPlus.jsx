import TextComponent from "../../Components/TextComponent/TextComponent";
import ServicesCard from "../../Components/ServicesCards/ServicesCard";



import "./DefineShopifyPlus.css";
export default function DefineShopifyPlus(props) {
  const servicesData = [
    {
      title: "DTC & B2B",
      description:
        "Sell across multiple markets like retail, DTC & B2B through a single high-powered platform.",

      mainClass: "buttom !py-[30px] !pl-[22px] !pr-[30px]  after:!bg-[#1a50a3]",
      textDiv: "!max-w-[232px] !mt-0  text-center lg:text-left",
      mainHeadingClass: "!pb-0",
    },
    {
      title: "Seamless Checkout",
      description:
        " Level up your brand with a refined customer journey along with a faster checkout experience...",

      mainClass: "buttom  right before:!bg-[#1a50a3] after:!bg-[#1a50a3]",
      textDiv: "lg:!max-w-[232px]  !mt-0 text-center lg:text-left",
      mainHeadingClass: "!pb-0",
    },
    {
      title: "Fully Secured",
      description:
        "Effortlessly expand your customer base while maintaining the security of sensitive consumer data.",
      mainClass: "  before:!bg-[#1a50a3] after:!bg-[#1a50a3]",
      textDiv: "!max-w-[232px] !mt-0 text-center lg:text-left",

      mainHeadingClass: "!pb-0",
    },
    {
      title: "Business Growth",
      description:
        "Grow your business w ith an impeccable platform without any hassle on the technical end.",
      mainClass: "right  before:!bg-[#1a50a3] text-center",
      textDiv: "!max-w-[232px] !mt-0 text-center lg:text-left",

      mainHeadingClass: "!pb-0",
    },
  ];
  return (
    <>
      <div className="background_color py-[80px]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex flex-col items-center lg:flex-row gap-x-[141px] ">
            <div className="">
              <TextComponent
                mainClass="!max-w-[515px]"
                spanClass="!text-[#1a50a3] !font-bold "
                headingClass="!pt-[14px]   !pb-[20px]"
                contantClass="!max-w-[390px]"
                heading="Highly adaptable, easily customizable, and lightning-fast."
                content="Shopify Plus is an enterprise-level ecommerce platform designed to meet the needs of ecommerce businesses."
                spantext="What is Shopify Plus?"
              />
            </div>
            <div className="before:!bg-[#1a50a3]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:w-[90%] lg:max-w-[607px]">
                {servicesData.map((service, index) => (
                  <ServicesCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    img={service.img}
                    mainClass={service.mainClass}
                    textDiv={service.textDiv}
                    mainHeadingClass={service.mainHeadingClass}
                    contentClass={service.contentClass}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
