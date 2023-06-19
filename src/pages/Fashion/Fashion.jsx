import React from "react";
import "./FashionCss/FashionCss.css";
const Fashion = (props) => {
  const { title, price, thumbnail } = props.product;

  return (
    <div className="card  card-side box-border bg-blue-200">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}</p>
      </div>
      <figure>
        <img className="w-24 h-full rounded-lg" src={thumbnail} alt="Movie" />
      </figure>
    </div>
  );
};

export default Fashion;
