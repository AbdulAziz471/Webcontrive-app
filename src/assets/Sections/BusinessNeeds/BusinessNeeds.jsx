import TextComponent from "../../Components/TextComponent/TextComponent";
import BusinessNeed from "../../Images/BusinessNeed.png";
import "./BusinessNeeds.css";
const BusinessNeeds = () => {
  return (
    <>
      <div className="pt-[120px]">
        <div className="bg-colr">
          <div className="max-w-[1494px] w-full px-[15px] mx-auto ">
            <div className="flex flex-col lg:flex-row pt-[80px] pb-[60px] gap-x-[128px] items-center max ">
              <div className="max-w-[567px] w-full pt-0 pl-0 pr-0">
                <TextComponent
                  mainClass="!max-w-[515px]"
                  spanClass="!text-[#a5e359] !font-semibold "
                  headingClass="!pt-[14px]   !pb-[20px] text-white"
                  contantClass="!max-w-[491px] text-white"
                  heading="Tailored to meet your specific business needs"
                  content="Our brand-building services thrive with Shopify Plus' omnichannel capabilities, utilizing customized solutions to unleash your store's full potential."
                  spantext="Our Shopify Plus Solutions"
                />
              </div>

              <div className="max-w-[750px] w-full   ">
                <div className=" relative   lg:mt-[-190px]">
                  <img className="" src={BusinessNeed} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessNeeds;
