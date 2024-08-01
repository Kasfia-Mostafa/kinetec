import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer";
import { Navbar } from "./Home/Navbar";

const Main = () => {
  return (
    <div className="bg-[#fdffea] min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
