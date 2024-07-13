import Main from "@/Main/Main";
import AboutUsPage from "@/Pages/AboutUsPage/AboutUsPage";
import Homepage from "@/Pages/Homepage/Homepage";
import ProductDetails from "@/Pages/ProductDetails/ProductDetails";
import ProductsPage from "@/Pages/ProductsPage/ProductsPage";
import Cart from "@/Pages/Cart/Cart";
import { createBrowserRouter } from "react-router-dom";
import PaymentPage from "@/Pages/PaymentPage/PaymentPage";
import ProductTable from "@/Pages/ProductManagement/ProductTable";
import ProductManagement from "@/Pages/ProductManagement/ProductManagement";

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
      },
      {
        path:'/productManagement',
        element:<ProductTable />
      },
      {
        path:'/newProduct',
        element:<ProductManagement />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/payment',
        element:<PaymentPage />
      }
    ]
  },
]);

export default router;
