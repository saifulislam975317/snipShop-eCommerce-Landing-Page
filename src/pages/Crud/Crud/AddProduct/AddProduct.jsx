import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const title = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;

    const productData = {
      id,
      title,
      brand,
      price,
    };

    console.log(productData);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        alert("Product Added Successfully");
        navigate("/crud");
      })

      .catch((error) => console.log("Error", error));
  };
  return (
    <div className="flex justify-center ">
      <div className="w-96 border-2 p-5 mt-2">
        <h1 className="text-2xl text-center font-bold">Add a Product</h1>
        <form onSubmit={handleAddProduct}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Id</span>
            </label>
            <input
              type="number"
              name="id"
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
              name="name"
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
              name="brand"
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
              name="price"
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

export default AddProduct;
