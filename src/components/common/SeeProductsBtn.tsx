import type { PropsWithChildren } from "react";

type ProductBtnProps = PropsWithChildren<{
  className?: string;
}>;

function SeeProductsBtn({ className }: ProductBtnProps) {
  return (
    <button
      className={`text-white tracking-widest p-3.5 text-center cursor-pointer ${className}`}
    >
      SEE PRODUCT
    </button>
  );
}

export default SeeProductsBtn;
