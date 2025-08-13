import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../assets/shared/tablet/menu.svg";
import closeIcon from "../../assets/shared/tablet/x.svg";
import audiophileLogo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import headphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ProductsDiv from "./ProductsDiv";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black flex flex-col justify-center min-h-20 md:min-h-17 lg:min-h-22">
      {/**<!-- Mobile navbar -->*/}
      <div className="md:hidden flex justify-around items-center">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            <img
              src={isOpen ? closeIcon : hamburgerIcon}
              alt="hamburger menu icon"
            />
          </button>

          {/*Main content for hamburger menu */}

          {/*Backdrop*/}
          {isOpen && (
            <div
              className="fixed inset-0 top-23 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/*hamburger menu */}
          <div
            className={`fixed top-23 left-0 z-50 w-full h-[80%] rounded-b-xl bg-white transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menu content */}
            <div className="flex flex-col gap-20 mt-16 mx-8">
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
            </div>
          </div>
        </div>
        <div>
          <Link to="/home">
            <img
              src={audiophileLogo}
              alt="audiophile logo back to home"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <button>
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
      </div>

      {/**<!-- Tablet navbar -->*/}
      <div className="hidden md:block lg:hidden w-full">
        <div className="flex justify-between items-center px-6">
          <div className="flex gap-12">
            <button
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? closeIcon : hamburgerIcon}
                alt="hamburger icon"
              />
            </button>

            {/* Menu content */}
            {/*Backdrop*/}
            {isOpen && (
              <div
                className="fixed inset-0 top-23 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
                onClick={() => setIsOpen(false)}
              ></div>
            )}
            <div
              className={`fixed top-23 left-0 z-50 w-full h-[50%] rounded-b-xl bg-white transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex gap-4 mt-20 mx-8">
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
              </div>
            </div>
            <Link to="/home">
              <img
                src={audiophileLogo}
                alt="audiophile logo back to home"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="">
            <button className="cursor-pointer">
              <img src={cartIcon} alt="cart icon" />
            </button>
          </div>
        </div>
      </div>

      {/**<!-- Desktop navbar -->*/}
      <div className="hidden lg:block w-full">
        <div className="flex items-center justify-between mx-14">
          <Link to="/home">
            <img
              src={audiophileLogo}
              alt="audiophile logo back to home"
              className="cursor-pointer"
            />
          </Link>

          {/**<!-- ul for links -->*/}
          <div className="">
            <ul className="text-white text-xs flex gap-8">
              <li className="hover:text-audiophile-secondary-hover font-bold tracking-widest">
                <Link to="/home">HOME</Link>
              </li>
              <li className="hover:text-audiophile-secondary-hover font-bold tracking-widest">
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li className="hover:text-audiophile-secondary-hover font-bold tracking-widest">
                <Link to="/speakers">SPEAKERS</Link>
              </li>
              <li className="hover:text-audiophile-secondary-hover font-bold tracking-widest">
                <Link to="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="cursor-pointer">
              <img src={cartIcon} alt="cart icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
