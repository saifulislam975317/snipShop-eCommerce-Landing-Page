import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log("pdid", id);
  const navigate = useNavigate();

  const [pdId, pdIdChange] = useState("");
  const [title, titleChange] = useState("");
  const [brand, brandChange] = useState("");
  const [price, priceChange] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pdIdChange(data.id);
        titleChange(data.title);
        brandChange(data.brand);
        priceChange(data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const productData = {
      id,
      title,
      brand,
      price,
    };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        alert("Product updated Successfully");
        navigate("/crud");
      })

      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="flex justify-center ">
      <div className="w-96 border-2 p-5 mt-2">
        <h1 className="text-2xl text-center font-bold">Update Product</h1>
        <form onSubmit={handleUpdateProduct}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Id</span>
            </label>
            <input
              type="number"
              value={id}
              onChange={(e) => pdIdChange(e.target.value)}
              disabled
              placeholder="Enter product id"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => titleChange(e.target.value)}
              placeholder="Enter product name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => brandChange(e.target.value)}
              placeholder="Enter brand name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => priceChange(e.target.value)}
              placeholder="Enter price "
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control  mt-6">
            <button className="btn btn-success" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
