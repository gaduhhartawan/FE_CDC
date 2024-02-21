import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5 h-screen flex flex-col items-center justify-between gap-5">
      {/* <h1 className="font-semibold text-2xl">Home Page</h1> */}
        <div class="grid grid-rows-2 grid-flow-col gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      <span></span>
    </div>
  </div>
  );
};

export default Home;
