import audiophileLogo from "../../assets/shared/desktop/logo.svg";
import facebookLogo from "../../assets/shared/desktop/icon-facebook.svg";
import instagramLogo from "../../assets/shared/desktop/icon-instagram.svg";
import twitterLogo from "../../assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-audiophile-primary-black text-white py-6 px-4 md:py-10">
      {/*mobile*/}
      <div className="space-y-6 md:space-y-8 lg:hidden place-items-center md:place-items-start">
        <div>
          <img src={audiophileLogo} alt="audiophile logo" />
        </div>
        <div className="">
          <ul className="text-white text-xs flex flex-col gap-5 place-items-center md:flex-row">
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
        <div>
          <p className="font-thin text-sm mt-2 text-center md:text-start">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="space-y-6 place-items-center md:flex md:justify-between w-full">
          <p className="text-sm">Copyright 2021. All Rights Reserved</p>

          <div className="flex gap-4 items-center">
            <img src={facebookLogo} alt="facebook logo" />
            <img src={twitterLogo} alt="twitter logo" />
            <img src={instagramLogo} alt="instagram logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
