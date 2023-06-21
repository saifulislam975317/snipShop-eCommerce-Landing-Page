import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Orders from "../pages/Orders/Orders";
import Crud from "../pages/Crud/Crud";
import AddProduct from "../pages/Crud/Crud/AddProduct/AddProduct";
import UpdateProduct from "../pages/Crud/Crud/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/",
        element: <Categories></Categories>,
      },
      {
        path: "/crud",
        element: <Crud></Crud>,
      },
      {
        path: "/crud/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/crud/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/orders/:id",
        loader: async ({ params }) => {
          return fetch(`https://dummyjson.com/products/${params.id}`);
        },
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
