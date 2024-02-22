import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import FilterCard from "../components/FilterCard";

const Home = () => {
  const Jobs = ["Frontend", "Backend", "Devops", "UI/UX", "Mobile Programmer"]
  return (
    <div>
      <Header />
      <div className="flex flex-col px-3 py-1 lg:px-12 lg:py-8">
        <SearchBox />
      </div>
      <div className="p-5 h-full flex flex-col mx-6 mt-6">
        <div className="flex flex-row justify-between h-full w-full">
          <div className="flex flex-col w-full ml-8">
            <div className="flex flex-row h-14 mb-2 justify-between items-baseline">
              <h1 className="text-3xl font-plusjakarta text-black font-bold ">
                Job Opportunity
              </h1>
              <a href="#" className="text-xl font-plusjakarta text-bluu font-bold h-14">
                View All Job
              </a>
            </div>
            <div className="flex flex-row mb-8 gap-8 font-plusjakarta">
              {Jobs.map((job) => (
                <span className="text-white font-medium hover:bg-bluu flex justify-center items-center rounded-xl w-60 h-10 text-center bg-palebluu ">{job}</span>
              ))}
            </div>
            <div class="grid grid-rows-2 grid-flow-col gap-8 justify-evenly">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      <span></span>
    </div>
  </div>
  );
};

export default Home;
