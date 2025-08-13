import bgImageMobile from "../../assets/product-xx99-mark-two-headphones/mobile/Bitmap.png";
import bgImageTablet from "../../assets/product-xx99-mark-two-headphones/tablet/Bitmap.jpg";
import bgImageDesktop from "../../assets/product-xx99-mark-two-headphones/desktop/Bitmap.jpg";
import SeeProductsBtn from "./SeeProductsBtn";

const Main = () => {
  return (
    <main className="bg-[#191919] h-screen min-h-150 grid grid-cols-1 grid-rows-1 *:[grid-area:1/1] *:w-full *:h-full lg:*:w-auto">
      <picture className="*:object-center *:object-cover *:w-full *:h-full lg:*:object-contain lg:*:object-right">
        <source media="(width >= 768px)" srcSet={bgImageTablet} />
        <source media="(width >= 1024px)" srcSet={bgImageDesktop} />
        <img src={bgImageMobile} alt="background image mobile" />
      </picture>

      <div className="place-content-center text-center space-y-6 pt-18 text-white lg:text-left lg:pl-20">
        <p className="text-audiophile-primary-grey font-thin tracking-[0.5em] text-md">
          NEW PRODUCT
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p className="px-8 md:px-60 lg:px-0 lg:max-w-90 font-thin">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <SeeProductsBtn className="bg-audiophile-secondary-color hover:bg-audiophile-secondary-hover" />
      </div>
    </main>
  );
};

export default Main;
