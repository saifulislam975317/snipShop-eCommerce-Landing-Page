import React from "react";
import "./HeaderCss/HeaderCss.css";
import camera1 from "../../assets/home/camera1.png";
import camera2 from "../../assets/home/camera2.png";
import camera3 from "../../assets/home/camera3.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className=" headerLink">
      <div className="pt-3">
        <a href="#">Jewelry & Accessories</a>
        <a className="text-decoration-line: underline" href="#">
          Clothing & Shoes
        </a>
        <a href="#">Home & Living</a>
        <a href="#">Wedding & Party</a>
        <a href="#">Toys & Entertainment</a>
        <a href="#">Art & Collection</a>
        <a href="#">Craft Supplies & Tools</a>
        <a href="#">Vintage</a>
      </div>

      <div className="hero  headerArea">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="ml-[50px]">
            <div className="mb-[65px] text-center">
              <img
                src={camera2}
                className="w-[130px] h-[130px] rounded-[64px] "
              />
              <p className="mt-[15px]">
                Fuji 14mm <br /> Lens
              </p>
            </div>
            <div className="mb-[65px] text-center">
              <img
                src={camera3}
                className="w-[130px] h-[130px] rounded-[64px] "
              />
              <p className="mt-[15px]">
                Camera <br /> Stand
                <BsFillArrowDownCircleFill className="ml-12 font-bold text-2xl mt-8"></BsFillArrowDownCircleFill>
              </p>
            </div>
          </div>
          <div>
            <img id="camera1" src={camera1} />
          </div>

          <div>
            <p className="py-6">100% QUALITY, 100% SATISFACTION</p>
            <h1 className="text-5xl font-bold">
              Where the world <br /> comes to shop.
            </h1>
            <p className="py-6">
              Life is hard enough already. Let us make it a little <br />{" "}
              easier, Vision of Snipshop for a better outlook.
            </p>
            <button id="shopNowBtn" className="btn ">
              Shop Now
            </button>
            <div id="startFrom">
              <p>Start from</p>
              <h1 className="font-bold text-[30px]">110.00$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
