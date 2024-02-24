import React, { useEffect, useState } from "react";
import { useGetJobs } from "../hooks/api/jobs/useJobsQuery";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Jobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [hasMore, setHasMore] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const [isFilter, setIsFilter] = useState(false);

  const {
    data: jobs,
    isLoading,
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
    <div className="lg:px-0 px-5 relative">
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
      <div className="flex justify-between items-center">
        <h2 className="font-bold lg:text-2xl text-xl">Popular Category</h2>
        <span
          className="cursor-pointer lg:hidden block"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter
        </span>
      </div>
      <div className="mb-5 mt-3 flex gap-4 overflow-x-scroll lg:overflow-hidden">
        {categories.map((category) => (
          <button
            key={category.title}
            className={`py-1 px-12 rounded-full ${
              selectedCategory === category.value
                ? "bg-blue-600 text-white"
                : "bg-blue-200 text-bluu"
            }`}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.title}
          </button>
        ))}
      </div>
      {/* List Card */}
      <div className="flex lg:flex-row flex-col-reverse gap-x-5 gap-y-5 relative">
        <div className="flex-1">
          <InfiniteScroll className="flex flex-col gap-y-5" dataLength={jobs.length}>
            {/* Card */}
            {jobs?.map((job) => (
              <Card key={job._id} data={job} />
            ))}
          </InfiniteScroll>
        </div>
        {/* filter */}
        <div
          className={`bg-[#EFEFEF] py-10 rounded-lg px-5 max-h-[530px] lg:max-w-64 lg:sticky lg:top-32 lg:block ${
            showFilter ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Filters</h3>
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
                <option>Choose Job Type</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            {/* Salary */}
            <h3 className="mt-3">Salary Range</h3>
            <div className="flex justify-between items-center gap-3 mt-1">
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded-lg py-1 px-3"
                onChange={(e) => setMinSalary(e.target.value)}
                value={minSalary}
              />
              <input
                type="number"
                placeholder="Max"
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
