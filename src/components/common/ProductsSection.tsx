import headphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ProductsDiv from "./ProductsDiv";

const ProductsSection = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-5 my-24 mx-8 md:flex-row md:my-30 lg:mx-20 lg:mt-40">
      <ProductsDiv
        imageSource={headphonesThumbnail}
        imageAlt="headphones thumbnail"
        product="HEADPHONES"
        page="/headphones"
      />

      <ProductsDiv
        imageSource={speakersThumbnail}
        imageAlt="speakers thumbnail"
        product="SPEAKERS"
        page="/speakers"
      />

      <ProductsDiv
        imageSource={earphonesThumbnail}
        imageAlt="earphones thumbnail"
        product="EARPHONES"
        page="/earphones"
      />
    </section>
  );
};

export default ProductsSection;
