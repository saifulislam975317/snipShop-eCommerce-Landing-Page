import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Orders from "../pages/Orders/Orders";

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
