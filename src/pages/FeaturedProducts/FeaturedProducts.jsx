import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";
const FeaturedProducts = ({ products }) => {
  return (
    <div>
      <div className="mt-24">
        <h1 className="text-center font-bold text-4xl">
          Featured Product For <br /> Pre-Order
        </h1>
        <p className=" flex justify-end items-center mr-16 text-xl">
          Discover Our Products
          <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-7 mt-[66px] rounded-2xl">
        <span className="flex items-center justify-center space-x-2 text-xl">
          <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
          <BiRightArrowCircle className="font-bold text-2xl"></BiRightArrowCircle>
        </span>
        {products &&
          products
            ?.slice(21, 24)
            .map((product) => (
              <FeaturedProduct
                product={product}
                key={product.id}
              ></FeaturedProduct>
            ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
