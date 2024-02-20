import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="p-5 h-screen flex flex-col items-center justify-between gap-5">
      <h1 className="font-semibold text-2xl">Home Page</h1>
      <Card />
      <span></span>
    </div>
  );
};

export default Home;
