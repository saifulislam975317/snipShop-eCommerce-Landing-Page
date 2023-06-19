import React from "react";
import Category from "./Category/Category";

const Categories = ({ products }) => {
  return (
    <div className="mt-24">
      <div className="p-5">
        <h1 className="font-bold text-4xl ">Shop by Category</h1>
        <p className="mt-6">
          Life is hard enough already. Let us <br /> make it a little easier.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-7 mt-[66px] rounded-2xl">
        {products &&
          products
            ?.slice(0, 9)
            .map((product) => (
              <Category product={product} key={product.id}></Category>
            ))}
      </div>
    </div>
  );
};

export default Categories;
