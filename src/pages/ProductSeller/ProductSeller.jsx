import React from "react";
import justin from "../../assets/justin/justin.png";
import head from "../../assets/justin/head.png";
import "./ProductSellerCss/ProductSeller.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";

const ProductSeller = () => {
  return (
    <div className="hero mt-[103px]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="product-seller">
          <img src={justin} className="max-w-sm rounded-lg " />
        </div>
        <div className="ml-[82px]">
          <h1 className="text-3xl font-bold flex mr-1 mb-1 items-center">
            Justin Pierre <img className="w-9 h-9" src={head} alt="" />
          </h1>
          <p>Product Seller</p>

          <p className="py-6">
            “In 2 years, my business went from just me <br /> and my Shop site
            to 40 employees, my own <br /> fulfillment center and over 22
            million dollars <br /> in revenue.”
          </p>
          <span className="flex space-x-2 text-3xl">
            <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
            <BiRightArrowCircle></BiRightArrowCircle>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSeller;
