import Navbar from "./common/Navbar";
import Categories from "./common/Categories";
import ProductsSection from "./common/ProductsSection";
import mobileYx1earphones from "../../src/assets/product-yx1-earphones/mobile/image-product.jpg";
import tabletYx1earphones from "../../src/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import desktopYx1earphones from "../../src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import BestAudioGear from "./common/BestAudioGear";

const Earphones = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-black p-6 md:py-12">
        <h1 className="text-center text-white tracking-widest font-bold text-xl">
          EARPHONES
        </h1>
      </header>

      <Categories
        mobileImageSource={mobileYx1earphones}
        tabletImageSource={tabletYx1earphones}
        desktopImageSource={desktopYx1earphones}
        product="YX1 WIRELESS EARPHONES"
        productDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />

      <ProductsSection />
      <BestAudioGear />
    </div>
  );
};

export default Earphones;
