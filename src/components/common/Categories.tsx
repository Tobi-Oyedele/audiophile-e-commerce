import { type PropsWithChildren } from "react";
import SeeProductsBtn from "./SeeProductsBtn";

type CategoriesProps = PropsWithChildren<{
  mobileImageSource: string;
  tabletImageSource: string;
  desktopImageSource: string;
  imageAlt?: string;
  product: string;
  productDescription: string;
}>;

const Categories = ({
  product,
  productDescription,
  mobileImageSource,
  tabletImageSource,
  desktopImageSource,
  imageAlt,
}: CategoriesProps) => {
  return (
    <section className="mx-6 md:mx-0 mt-12 mb-18 md:flex md:flex-col md:items-center">
      <img
        src={tabletImageSource}
        alt={imageAlt}
        className="hidden md:block lg:hidden md:mx-8 md:rounded-xl md:w-[92%]"
      />
      <img
        src={mobileImageSource}
        alt={imageAlt}
        className="rounded-xl block md:hidden"
      />

      <div className="text-center space-y-4 mt-6 lg:hidden">
        <p className="tracking-[0.5em] text-audiophile-secondary-color">
          NEW PRODUCT
        </p>
        <h1 className="font-bold text-4xl md:w-md">{product}</h1>
        <p className="font-thin md:w-md">{productDescription}</p>
        <SeeProductsBtn className="bg-audiophile-secondary-color hover:bg-audiophile-secondary-hover" />
      </div>

      <section className="hidden lg:block lg:mx-8">
        <div className="flex items-center">
          <div className="flex-1">
            <img
              src={desktopImageSource}
              alt={imageAlt}
              className="hidden lg:block lg:rounded-xl"
            />
          </div>

          <div className="flex-1 ml-30 space-y-4">
            <p className="tracking-[0.5em] text-audiophile-secondary-color">
              NEW PRODUCT
            </p>
            <h1 className="font-bold text-4xl md:w-md">{product}</h1>
            <p className="font-thin md:w-md">{productDescription}</p>
            <SeeProductsBtn className="bg-audiophile-secondary-color hover:bg-audiophile-secondary-hover" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Categories;
