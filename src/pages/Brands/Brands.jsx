import React from "react";
import "./BrandsCss/Brands.css";
import bg from "../../assets/Brands/bg-logo.png";
import apple from "../../assets/Brands/apple.png";
import adidas from "../../assets/Brands/adidas.png";
import bmw from "../../assets/Brands/bmw.png";
import fila from "../../assets/Brands/fila.png";
import mi from "../../assets/Brands/mi.png";
import nike from "../../assets/Brands/nike.png";
import { BsArrowRight } from "react-icons/bs";
const Brands = () => {
  return (
    <div className="card card-side  mt-24 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
      <div
        className="bg-banner grid lg:grid-cols-3 md:grid-cols-2 ml-[150px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img src={apple} alt="Movie" />

        <img src={bmw} alt="Movie" />

        <img src={nike} alt="Movie" />

        <img src={fila} alt="Movie" />

        <img src={mi} alt="Movie" />

        <img src={adidas} alt="Movie" />
      </div>
      <div className="card-body ml-[120px]">
        <h2 className="card-title font-bold text-4xl">
          Explore Most Popular Brands
        </h2>
        <p className="mt-6">
          Life is hard enough already. Let us <br />
          make it a little easier.
        </p>
        <span className="flex items-center mt-8">
          See All<BsArrowRight className="ml-2"></BsArrowRight>
        </span>
      </div>
    </div>
  );
};

export default Brands;
