import React from "react";
import "./FashionCss/FashionCss.css";
const Fashion = (props) => {
  const { title, price, thumbnail } = props.product;

  return (
    <div className="card w-[280px] h-[200px] card-side box-border bg-blue-200">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Starting</p>
        <p>
          <span className="price-design">${price}.00</span>
        </p>
      </div>
      <figure>
        <img
          className="w-24 mr-10 px-2 h-full rounded-2xl"
          src={thumbnail}
          alt="Movie"
        />
      </figure>
    </div>
  );
};

export default Fashion;
