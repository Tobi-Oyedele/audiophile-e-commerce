import Navbar from "./common/Navbar";
import Main from "./common/Main";
import ProductsSection from "./common/ProductsSection";
import BestAudioGear from "./common/BestAudioGear";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Main />
      <ProductsSection />
      <div className="mt-20">
        <BestAudioGear />
      </div>
    </div>
  );
};

export default Home;
