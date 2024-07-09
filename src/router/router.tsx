import Main from "@/Main/Main";
import MainLayout from "@/Main/MainLayout";
import AboutUsPage from "@/Pages/AboutUsPage/AboutUsPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<MainLayout></MainLayout>
      },
      {
        path:'/about',
        element:<AboutUsPage />
      }
    ]
  },
]);

export default router;
