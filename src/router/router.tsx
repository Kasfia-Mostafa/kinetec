import Main from "@/Main/Main";
import AboutUsPage from "@/Pages/AboutUsPage/AboutUsPage";
import Homepage from "@/Pages/Homepage/Homepage";
import ProductDetails from "@/Pages/ProductDetails/ProductDetails";
import ProductsPage from "@/Pages/ProductsPage/ProductsPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:'/products',
        element:<ProductsPage />
      },
      {
        path:'/products/:id',
        element:<ProductDetails />
      },
      {
        path:'/about',
        element:<AboutUsPage />
      }
    ]
  },
]);

export default router;
