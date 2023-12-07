import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from "./pages/About";
import CakeProductPage from "./pages/CakeProductPage";
import CakesPage from "./pages/CakesPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OrderPage from "./pages/Order_Page";
import ProductPage from "./pages/ProductPage";
import ProductPage1 from "./pages/ProductPage1";
import ProductPage2 from "./pages/ProductPage2";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/product-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-page2":
        title = "";
        metaDescription = "";
        break;
      case "/product-page1":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="app-container"> {/* Wrap the entire content in a container */}
      {/* <Home/> */}

      <Navbar />
      <Routes>
        <Route path="/catalogue" element={<CakesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-page2" element={<ProductPage1 />} />
        <Route path="/product-page1" element={<ProductPage2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<CakeProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/confirmation" element={<OrderConfirmed />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
