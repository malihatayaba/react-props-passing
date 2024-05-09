import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Mainlayout;
