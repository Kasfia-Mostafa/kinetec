import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer";
import { Navbar } from "./Home/Navbar";

const Main = () => {
  return (
    <div className="h-[100vh] bg-[#fafffc] ">
      <Navbar></Navbar>
    <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
