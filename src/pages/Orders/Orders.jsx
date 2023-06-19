import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const order = useLoaderData();
  const { title, price, thumbnail, description } = order;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-xl text-black ">
            <th>Picture </th>
            <th>Name</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-28 h-28">
                    <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td className="text-xl">{title}</td>
            <td className="font-bold text-orange-400 text-xl">${price}</td>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
