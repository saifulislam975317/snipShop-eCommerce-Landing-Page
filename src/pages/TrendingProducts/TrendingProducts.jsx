import React, { useEffect, useState } from "react";
import Fashion from "../Fashion/Fashion";
import "./TPCss/TPCss.css";
import { Link } from "react-router-dom";

const TrendingProducts = ({ products, setProducts }) => {
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleFilter = (catItems) => {
    let result = products.filter((catData) => {
      return catData.category === catItems;
    });
    setFilterProducts(result);
  };

  return (
    <div>
      <div className="text-center mt-[70px]">
        <h1 className="font-[700] text-4xl">Shop Our Trending Products</h1>
        <p className="mt-6">
          Life is hard enough already. Let us make it a <br /> little easier.
        </p>
        <div className="mt-[46px] mb-[104px] link-design">
          <Link onClick={() => handleFilter("fragrances")}>Fashion</Link>
          <Link onClick={() => handleFilter("laptops")}>Technology</Link>
          <Link onClick={() => handleFilter("skincare")}>Interiors</Link>
          <Link onClick={() => handleFilter("groceries")}>Food & Drink</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-7 gap-3">
        {filterProducts?.map((product) => (
          <Fashion product={product} key={product.id}></Fashion>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
