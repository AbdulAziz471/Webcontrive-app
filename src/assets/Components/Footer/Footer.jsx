import { NavLink } from "react-router-dom";
import footerlogo from "../../Images/footerlogo.svg";
import HorizontalNav from "../HorizontalNav/HorizontalNav";
import IconsList from "../IconsList/IconsList";

export default function Footer() {
  const FooterNav = [
    {
      navTitle: "Shopify Apps",
      navItems: [
        { name: "Rivyo Review", url: "/pages/rivyo_review" },
        { name: "Rebolt Bundle", url: "/pages/rebolt_bundle" },
        {
          name: "Native Subscription",
          url: "/pages/Native_Subscription",
        },
        { name: "Wishlist Club", url: "/pages/WishListClub" },
        { name: "AddUp Checkout", url: "/pages/add_up_checkout" },
        {
          name: "Engines ‑ Discount Box",
          url: "/pages/engines_discount_box",
        },
      ],
    },
    {
      navTitle: "Hire Us",
      navItems: [
        {
          name: "Hire Shopify Developer",
          url: "/pages/Hire_Shopify_Developer",
        },
        {
          name: "Hire Shopify App Developer",
          url: "/pages/Hire_Shopify_app_Developer",
        },
        {
          name: "Hire Headless Developer",
          url: "/pages/Hire_Headless_Developer",
        },
        {
          name: "Hire Webflow Developer",
          url: "/pages/Hire_Webflow_Developer",
        },
      ],
    },
    {
      navTitle: "Company",
      navItems: [
        {
          name: "About",
          url: "/pages/about",
        },
        {
          name: "Life At Webcontrive",
          url: "/pages/life_at_webcontrive",
        },
        {
          name: "Careers",
          url: "/pages/Careers",
        },
        {
          name: "Blogs",
          url: "/pages/Blog",
        },
        {
          name: "Our Work",
          url: "/pages/our_work",
        },
      ],
    },
    {
      navTitle: "Support",
      navItems: [
        {
          name: "Help Center",
          url: "/pages/Help_center",
        },
        {
          name: "Contact Us",
          url: "/pages/Contact_us",
        },
        {
          name: "FAQ’s",
          url: "/pages/FAQs",
        },
      ],
    },
  ];

  return (
    <>
      <footer className=" m-[40px]">
        <div class=" max-w-screen-2xl mx-auto py-5  w-full    border-t border-black">
          <div class="lg:flex lg:flex-row lg:items-center  md:justify-between  flex justify-center flex-col-reverse">
            <div class="mb-6 mt-[30px] lg:mt-0 lg:py-10 md:mb-0 lg:px-16 px-9 lg:border-r-2 md:flex md:items-center md;w-full md:flex-col flex items-center flex-col  ">
              <NavLink
                to="/"
                class=" flex items-center flex-col max-w-[100px]   "
              >
                <img class="lg:w-full" src={footerlogo} alt="" />
              </NavLink>
              <IconsList />
            </div>
            <div class="lg:flex lg:justify-between lg:flex-row lg:px-14 md:flex md:flex-row md:justify-between  md:gap-1 md:w-full gap-8 sm:gap-1 sm:flex-col sm:w-full sm:px-3 sm:py-5  lg:w-3/4  ">
              {FooterNav.map((item, index) => (
                <HorizontalNav
                  key={index}
                  navTitle={item.navTitle}
                  navItems={item.navItems}
                />
              ))}
            </div>
          </div>
          <hr class=" border-gray-200 mx-auto dark:border-gray-700 " />
        </div>
      </footer>
    </>
  );
}
