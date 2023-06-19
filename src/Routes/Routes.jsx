import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Fashion from "../pages/Fashion/Fashion";
import Categories from "../pages/Categories/Categories";

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
        element: <Fashion></Fashion>,
      },

      {
        path: "/",
        element: <Categories></Categories>,
      },
    ],
  },
]);

export default router;
