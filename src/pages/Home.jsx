import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SearchBox /> */}
      <div className="p-5 h-screen flex flex-col items-center justify-between gap-5">
        <SearchBox />
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
