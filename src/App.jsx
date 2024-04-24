import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./assets/Components/Footer/Footer";
import Header from "./assets/Components/Header/Header";
import Capabilities from "./assets/Pages/Capabilities";
import About from "./assets/Pages/About";
import Blog from "./assets/Pages/Blog";
import SeeAll from "./assets/Pages/SeeAll";
import ShopifyPlus from "./assets/Pages/ShopifyPlus";
import ConatactPage from "./assets/Pages/ContactPage";
import Home from "./assets/Pages/Home";
import FooterBar from "../src/assets/Components/FooterBar/FooterBar";
import RivyoShopifyApp from "./assets/Pages/Rivyo-Shopify-App";
import ReboltBundle from "./assets/Pages/ReboltBundle";
import NativeSubscription from "./assets/Pages/NativeSubscription";
import AddUpCheckOut from "./assets/Pages/AddUpCheckOut";
import WishListClub from "./assets/Pages/WishListClub";
import EnginesDiscountBox from "./assets/Pages/EnginesDiscountBox";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/capabilities" element={<Capabilities />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/Blog" element={<Blog />} />
          <Route path="/pages/ShopifyApp" element={<SeeAll />} />
          <Route path="/Shopify-Plus" element={<ShopifyPlus />} />
          <Route path="/pages/rivyo_review" element={<RivyoShopifyApp />} />
          <Route path="/pages/rebolt_bundle" element={<ReboltBundle />} />
          <Route
            path="/pages/Native_Subscription"
            element={<NativeSubscription />}
          />
          <Route path="/pages/add_up_checkout" element={<AddUpCheckOut />} />
          <Route
            path="/pages/engines_discount_box"
            element={<EnginesDiscountBox />}
          />
          <Route path="/pages/WishListClub" element={<WishListClub />} />
        </Routes>
        <Footer />
        <FooterBar />
      </BrowserRouter>
    </>
  );
}

export default App;
