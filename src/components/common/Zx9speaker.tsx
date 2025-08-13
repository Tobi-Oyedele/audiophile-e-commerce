import mobileImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const Zx9speaker = () => {
  return (
    <div className="bg-audiophile-secondary-color mx-8 rounded-sm">
      <picture className="">
        <img
          src={mobileImg}
          alt="Zx9 mobile image"
          // className="mix-blend-multiply"
        />
      </picture>
    </div>
  );
};

export default Zx9speaker;
