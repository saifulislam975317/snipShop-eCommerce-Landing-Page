import React from "react";
import "./FooterCss/Footer.css";
import bgFooter from "../../../assets/footer/footer.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SlSocialDribbble } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="mt-[103px]">
      <footer
        style={{ backgroundImage: `url(${bgFooter})` }}
        className="footer p-10 footerArea "
      >
        <div>
          <span className=" text-white">Shop</span>
          <a className="link link-hover">Gift cards</a>
          <a className="link link-hover">SnipShop blog</a>
        </div>
        <div>
          <span className="">Sell</span>
          <a className="link link-hover">Sell on SnipShop</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Forums</a>
          <a className="link link-hover">Affiliates</a>
        </div>
        <div>
          <span className="">About</span>
          <a className="link link-hover">SnipShop.Inc</a>
          <a className="link link-hover">Policies</a>
          <a className="link link-hover">Investors</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
          <a className="link link-hover">Impact</a>
        </div>
        <div>
          <span className="">Help</span>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Trust and safety</a>
          <a className="link link-hover">Privacy settings</a>

          <a className="link link-hover border-2 rounded-xl p-2">
            Download the SnipShop App
          </a>
          <div className="flex socialIcon">
            <a href="#">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
            <a href="#">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#">
              {" "}
              <BsTwitter></BsTwitter>
            </a>
            <a href="#">
              <SlSocialDribbble></SlSocialDribbble>
            </a>
            <a href="#">
              <TiSocialPinterestCircular></TiSocialPinterestCircular>
            </a>
          </div>
        </div>
      </footer>
      <div className="privacyArea flex justify-around items-center">
        <div>
          <p>&copy;2021-2023 SnipShop.com</p>
        </div>
        <div>
          <p className="privacyLink">
            <a href="">Terms of use</a>
            <a href="">Privacy</a>
            <a href="">Interest-based ads</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
