import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-1 lg:px-10 px-3 font-plusjakarta mb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
