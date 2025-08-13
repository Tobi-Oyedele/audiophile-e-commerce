import Navbar from "./common/Navbar";
import Categories from "./common/Categories";
import mobileImageMarkTwo from "../../src/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import tabletImageMarkTwo from "../../src/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import desktopImageMarkTwo from "../../src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import mobileImageMarkOne from "../../src/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tabletImageMarkOne from "../../src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import desktopImageMarkOne from "../../src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import mobileImageXX59 from "../../src/assets/product-xx59-headphones/mobile/image-product.jpg";
import tabletImageXX59 from "../../src/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import desktopImageXX59 from "../../src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import ProductsSection from "./common/ProductsSection";
import BestAudioGear from "./common/BestAudioGear";

const Headphones = () => {
  return (
    <div>
      <Navbar />
      {/*<!-- Header -->*/}
      <header className="bg-black p-9 md:py-12">
        <h1 className="text-center text-white tracking-widest font-bold text-2xl">
          HEADPHONES
        </h1>
      </header>

      {/*<!-- XX99 MARK II HEADPHONES-->*/}
      <Categories
        mobileImageSource={mobileImageMarkTwo}
        tabletImageSource={tabletImageMarkTwo}
        desktopImageSource={desktopImageMarkTwo}
        product="XX99 MARK II HEADPHONES"
        productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />

      {/*<!-- XX99 MARK I HEADPHONES-->*/}
      <Categories
        mobileImageSource={mobileImageMarkOne}
        tabletImageSource={tabletImageMarkOne}
        desktopImageSource={desktopImageMarkOne}
        product="XX99 MARK I HEADPHONES"
        productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />

      {/*<!-- XX59 HEADPHONES-->*/}
      <Categories
        mobileImageSource={mobileImageXX59}
        tabletImageSource={tabletImageXX59}
        desktopImageSource={desktopImageXX59}
        product="XX59 HEADPHONES"
        productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />

      <ProductsSection />
      <BestAudioGear />
    </div>
  );
};

export default Headphones;
