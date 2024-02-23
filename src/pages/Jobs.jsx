import React from "react";
import JobCard from "../components/JobCard";

const Jobs = () => {
  return (
    <div className="relative">
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-1">
          Explore a world of possibilities with Top Companies
        </h2>
        <span className="text-sm font-light">
          Join the Top Companies community and start your journey to success
          today!
        </span>
      </div>
      {/* category */}
      <h2 className="font-bold text-2xl">Popular Category</h2>
      <div className="mb-7 mt-3">
        <button className="py-1 px-4 bg-blue-600 text-white rounded-full">
          All Job
        </button>
      </div>
      {/* List Card */}
      <div className="flex relative">
        <div className="flex-1 grid grid-cols-4 gap-y-5">
          {/* Card */}
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="bg-gray-200 py-10 rounded-lg px-5 sticky max-h-[530px] max-w-64">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Filter Job Board</h3>
            <button className="text-gray-400">Clear</button>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="search" className="font-semibold">
                Keyword
              </label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="e.g. Frontend"
                className="outline-none w-full bg-white p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="search" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="e.g. Bandung"
                className="outline-none w-full bg-white p-2 rounded-xl"
              />
            </div>
            {/* Job Type */}
            <div className="flex flex-col gap-1 mt-3">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <label htmlFor="fulltime">Full-time</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <label htmlFor="fulltime">Part-time</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="h-4 w-4" />
                <label htmlFor="fulltime">Internship</label>
              </div>
            </div>
            {/* Salary */}
            <h3 className="mt-3">Salary Range</h3>
            <div className="flex justify-between items-center gap-3 mt-1">
              <input
                type="number"
                placeholder="min"
                className="w-full rounded-lg py-1 px-3"
              />
              <input
                type="number"
                placeholder="max"
                className="w-full rounded-lg py-1 px-3"
              />
            </div>
            {/* Button */}
            <button className="bg-bluu text-white w-full py-2 rounded-full mt-5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
