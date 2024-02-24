import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="py-5 lg:px-10 px-3 font-plusjakarta">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
