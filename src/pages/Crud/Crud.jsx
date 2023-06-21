import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Crud = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleUpdate = (id) => {
    navigate(`/crud/updateProduct/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Deleted Successfully");

          window.location.reload(false);
        })

        .catch((error) => console.log("Error", error));
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className=" text-center">
        <Link className="btn btn-success text-white" to="/crud/addProduct">
          Add Product +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>
                <a
                  onClick={() => handleUpdate(item.id)}
                  className="btn btn-primary mr-1"
                >
                  Edit
                </a>
                <a
                  onClick={() => handleDelete(item.id)}
                  className="btn bg-red-600"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
