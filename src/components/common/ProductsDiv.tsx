import { useEffect, type PropsWithChildren } from "react";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

type ProductProps = PropsWithChildren<{
  imageSource: string;
  imageAlt?: string;
  product: string;
  page: string;
}>;

function ProductsDiv({ imageSource, imageAlt, product, page }: ProductProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger the effect when the pathname changes

  return (
    <div className="bg-audiophile-primary-grey rounded-md w-full flex flex-col items-center">
      <img
        src={imageSource}
        alt={imageAlt}
        className="size-25 -mt-9 md:size-40 md:-mt-16"
      />
      <div className="space-y-2 pb-2">
        <h1 className="font-bold text-sm md:text-lg">{product}</h1>
        <Link
          to={page}
          className="tracking-widest flex items-center justify-center gap-3.5"
        >
          <span className="text-sm md:text-lg">SHOP</span>
          <img src={arrow} alt="arrow right" />
        </Link>
      </div>
    </div>
  );
}

export default ProductsDiv;
