import { createContext } from "react";
import "swiper/css/bundle";
import Navbar from "../sections/Navbar";
import Carousel from "../sections/Carousel";
import Sponsers from "../sections/Sponsers";
import Products from "../sections/Products";
import ClientFeedback from "../sections/ClientFeedback";
import Footer from "../sections/Footer";

export const DataContext = createContext();
function App() {
  return (
    <div className="appContainer">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Sponsers></Sponsers>
      <Products></Products>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>
    </div>
  );
}

export default App;
