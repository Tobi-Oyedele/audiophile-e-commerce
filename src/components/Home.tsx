import Navbar from "./common/Navbar";
import Main from "./common/Main";
import ProductsSection from "./common/ProductsSection";
import Zx9speaker from "./common/Zx9speaker";
import BestAudioGear from "./common/BestAudioGear";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Main />
      <ProductsSection />
      {/* <Zx9speaker /> */}
      <div className="mt-20">
        <BestAudioGear />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
