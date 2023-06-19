import React, { useState } from "react";
import Header from "../Header/Header";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Brands from "../Brands/Brands";
import SocialMedia from "../SocialMedia/SocialMedia";
import ProductSeller from "../ProductSeller/ProductSeller";

const Home = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Header></Header>

      <TrendingProducts
        products={products}
        setProducts={setProducts}
      ></TrendingProducts>
      <Categories products={products}></Categories>
      <FeaturedProducts products={products}></FeaturedProducts>
      <Brands></Brands>

      <SocialMedia></SocialMedia>
      <ProductSeller></ProductSeller>
    </div>
  );
};

export default Home;
