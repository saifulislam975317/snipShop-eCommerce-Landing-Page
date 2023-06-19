import React from "react";

const Category = (props) => {
  const { title, price, thumbnail } = props.product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[289px] h-[162px] rounded-2xl mt-5"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default Category;
