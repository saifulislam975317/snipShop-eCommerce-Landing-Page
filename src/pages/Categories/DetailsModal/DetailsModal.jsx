import React from "react";

const DetailsModal = ({ details }) => {
  console.log(details);
  const { title, description, brand, rating, stock } = details;
  return (
    <>
      <dialog id="detailsModal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Product Name: {title}</h3>
          <p className="py-1 text-blue-300">Brand: {brand}</p>
          <p className="py-1 text-orange-400">
            Rating: <span className="">{rating}</span>
          </p>
          <p className="py-1 text-green-500">Stock: {stock}</p>
          <p className="py-1">About: {description}</p>
        </form>
      </dialog>
    </>
  );
};

export default DetailsModal;
