import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import JobCard from "../components/JobCard";
import { useGetJobs } from "../hooks/api/jobs/useJobsQuery";

const Jobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  
  const {
    data: jobs,
    isLoading,
    status,
    refetch,
  } = useGetJobs(
    title,
    location,
    minSalary,
    maxSalary,
    jobType,
    selectedCategory
  );

  const applyFilters = () => {
    setIsFilter(true)
    setSelectedCategory("");
    refetch();
  };

  const clearFilters = () => {
    setIsFilter(false)
    setTitle("");
    setLocation("");
    setMinSalary("");
    setMaxSalary("");
    setJobType("");
  };

  const handleCategoryClick = (value) => {
    setTitle("");
    setLocation("");
    setMinSalary("");
    setMaxSalary("");
    setJobType("");
    setSelectedCategory(value);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [selectedCategory, isFilter]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = jobs?.slice(0, 8);

  const categories = [
    {
      title: "All Job",
      value: "",
    },
    {
      title: "Frontend",
      value: "frontend",
    },
    {
      title: "Backend",
      value: "backend",
    },
    {
      title: "UI/UX",
      value: "ui/ux",
    },
    {
      title: "DevOps",
      value: "devops",
    },
    {
      title: "Mobile Programmer",
      value: "mobile",
    },
    {
      title: "Marketing",
      value: "marketing",
    },
  ];

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
      <div className="mb-5 mt-3 flex gap-4">
        {categories.map((category) => (
          <button
            key={category.title}
            className={`py-1 px-4 rounded-full ${
              selectedCategory === category.value
                ? "bg-blue-600 text-white"
                : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.title}
          </button>
        ))}
      </div>
      {/* List Card */}
      <div className="flex relative">
        <div className="flex w-full flex-col gap-y-5 pr-5 h-full">
          {/* Card */}
          {data?.map((job) => (
            <Card key={job._id} data={job} />
          ))}
        </div>
        <div className="bg-gray-200 py-10 rounded-lg px-5 max-h-[530px] max-w-64 sticky top-32">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Filter Job Board</h3>
            <button className="text-gray-400" onClick={clearFilters}>
              Clear
            </button>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="search" className="font-semibold">
                Keyword
              </label>
              <input
                type="text"
                id="search"
                name="title"
                placeholder="e.g. Frontend"
                className="outline-none w-full bg-white p-2 rounded-xl"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g. Bandung"
                className="outline-none w-full bg-white p-2 rounded-xl"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            {/* Job Type */}
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="jobtype" className="font-semibold">
                Job Type
              </label>
              <select
                name="jobtype"
                id="jobtype"
                className="w-full p-2 rounded-xl cursor-pointer"
                onChange={(e) => setJobType(e.target.value)}
                value={jobType}
              >
                <option>Pilih Job Type</option>
                <option value="fulltime">Fulltime</option>
                <option value="parttime">Part-time</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            {/* Salary */}
            <h3 className="mt-3">Salary Range</h3>
            <div className="flex justify-between items-center gap-3 mt-1">
              <input
                type="number"
                placeholder="min"
                className="w-full rounded-lg py-1 px-3"
                onChange={(e) => setMinSalary(e.target.value)}
                value={minSalary}
              />
              <input
                type="number"
                placeholder="max"
                className="w-full rounded-lg py-1 px-3"
                onChange={(e) => setMaxSalary(e.target.value)}
                value={maxSalary}
              />
            </div>
            {/* Button */}
            <button
              className="bg-bluu hover:bg-blue-800 text-white w-full py-2 rounded-full mt-5"
              onClick={applyFilters}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
