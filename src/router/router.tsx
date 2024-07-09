import Main from "@/Main/Main";
import MainLayout from "@/Main/MainLayout";
import AboutUsPage from "@/Pages/AboutUsPage/AboutUsPage";
import Homepage from "@/Pages/Homepage/Homepage";

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
        path:'/about',
        element:<AboutUsPage />
      }
    ]
  },
]);

export default router;
