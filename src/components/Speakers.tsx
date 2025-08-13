import Navbar from "./common/Navbar";
import Categories from "./common/Categories";
import mobileZx9Speaker from "../../src/assets/product-zx9-speaker/mobile/image-product.jpg";
import tabletZx9Speaker from "../../src/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import desktopZx9Speaker from "../../src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import mobileZx7Speaker from "../../src/assets/product-zx7-speaker/mobile/image-product.jpg";
import tabletZx7Speaker from "../../src/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import desktopZx7Speaker from "../../src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import ProductsSection from "./common/ProductsSection";
import BestAudioGear from "./common/BestAudioGear";

const Speakers = () => {
  return (
    <div>
      <Navbar />
      {/*<!-- Header -->*/}
      <header className="bg-black p-6 md:py-12">
        <h1 className="text-center text-white tracking-widest font-bold text-xl">
          SPEAKERS
        </h1>
      </header>

      {/*<!-- ZX9 SPEAKERS-->*/}
      <Categories
        mobileImageSource={mobileZx9Speaker}
        tabletImageSource={tabletZx9Speaker}
        desktopImageSource={desktopZx9Speaker}
        product="ZX9 SPEAKER"
        productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />

      {/*<!-- ZX7 SPEAKERS-->*/}
      <Categories
        mobileImageSource={mobileZx7Speaker}
        tabletImageSource={tabletZx7Speaker}
        desktopImageSource={desktopZx7Speaker}
        product="ZX7 SPEAKER"
        productDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      />

      <ProductsSection />
      <BestAudioGear />
    </div>
  );
};

export default Speakers;
