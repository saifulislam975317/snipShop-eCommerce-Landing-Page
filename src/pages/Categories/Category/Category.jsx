import React from "react";
import { BsPlusCircle } from "react-icons/bs";
const Category = ({ product, setDetails }) => {
  const { title, price, thumbnail } = product;

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
        <span className="flex justify-evenly items-center">
          <p>
            ${price}
            <span className="price-design text-decoration-line: line-through ml-4">
              $60
            </span>
          </p>

          <button onClick={() => window.detailsModal.showModal()}>
            <BsPlusCircle
              onClick={() => setDetails(product)}
              className="font-bold text-2xl bg-slate-100 rounded-2xl"
            ></BsPlusCircle>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Category;
