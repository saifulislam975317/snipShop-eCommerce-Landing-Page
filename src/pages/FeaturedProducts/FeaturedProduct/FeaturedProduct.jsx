import React, { useState } from "react";
import "./FeaturedProductCss/FeatureProduct.css";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
  const { id, title, price, thumbnail } = product;

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="w-[289px] h-[162px] rounded-2xl mt-5"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl order-price font-bold">${price}.00 USD</p>
        <div className="card-actions">
          <Link to={`/orders/${id}`}>
            <button id="orderNow" className="btn mt-[40px]">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
