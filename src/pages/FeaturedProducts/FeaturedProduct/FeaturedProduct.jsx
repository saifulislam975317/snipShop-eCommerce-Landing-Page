import React from "react";
import "./FeaturedProductCss/FeatureProduct.css";
const FeaturedProduct = (props) => {
  const { title, price, thumbnail } = props.product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="w-[289px] h-[162px] rounded-2xl mt-5"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price:${price} USD</p>
        <div className="card-actions">
          <button id="orderNow" className="btn ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
