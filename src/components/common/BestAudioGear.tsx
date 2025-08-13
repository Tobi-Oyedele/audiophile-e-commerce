import mobileBestAudioGear from "../../assets/shared/mobile/image-best-gear.jpg";
import tabletBestAudioGear from "../../assets/shared/tablet/image-best-gear.jpg";
import desktopBestAudioGear from "../../assets/shared/desktop/image-best-gear.jpg";

const BestAudioGear = () => {
  return (
    <div className="mx-8 mb-10">
      <img
        src={mobileBestAudioGear}
        alt="best audio gear"
        className="rounded-xl block md:hidden lg:hidden"
      />
      <img
        src={tabletBestAudioGear}
        alt="best audio gear"
        className="rounded-xl hidden md:block lg:hidden"
      />
      <div className="space-y-4 text-center lg:hidden">
        <h1 className="font-bold text-2xl md:text-4xl md:mt-8 mt-4">
          BRINGING YOU THE{" "}
          <span className="text-audiophile-secondary-color">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="font-thin">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="flex">
          <div className="space-y-7 flex-1 place-content-center pr-20">
            <h1 className="font-bold text-5xl">
              BRINGING YOU THE{" "}
              <span className="text-audiophile-secondary-color">BEST</span>{" "}
              AUDIO GEAR
            </h1>
            <p className="font-thin">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={desktopBestAudioGear}
              alt="best audio gear"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestAudioGear;
