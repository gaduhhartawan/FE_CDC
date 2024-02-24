import React, { useState } from "react";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import { searchJobs } from "../hooks/api/jobs/useJobsQuery";
import { Link } from "react-router-dom";

function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <p className=" text-center justify-center items-center font-plusjakarta text-black font-bold text-3xl">
        Loading...
      </p>
    );
  }
  return <></>;
}

function NoJobsAvailable({ data }) {
  if (data === 0) {
    return (
      <p className=" text-center justify-center items-center font-plusjakarta text-black font-bold text-3xl mt-10">
        No Jobs Available Right Now!
      </p>
    );
  }
  return <></>;
}

const Home = () => {
  // const Jobs = ["Frontend", "Backend", "Devops", "UI/UX", "Mobile Programmer"];
  const [search, setSearch] = useState("");
  const [location, setlocation] = useState("");
  const { data, isLoading } = searchJobs(search, location);

  const jobs = data?.slice(0, 5);

  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col px-3 py-1 lg:px-12 lg:py-8">
        <SearchBox setlocation={setlocation} setSearch={setSearch} />
      </div>
      <div className="h-full flex flex-col mx-6 my-6">
        <div className="flex flex-row justify-between h-full w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-row h-14 justify-between items-center">
              <h1 className="lg:text-3xl text-xl font-plusjakarta text-black font-bold ">
                Job Opportunity
              </h1>
              <div>
                <Link
                  href="#"
                  className="lg:text-xl font-plusjakarta text-bluu font-bold h-14"
                >
                  View All Job
                </Link>
              </div>
            </div>
            <p className="mb-4 max-w-4xl">
              Discover a world of possibilities with Top Companies. Connect with
              leading businesses, explore exciting career paths, and achieve
              your professional goals.
            </p>
            {/* <div className="flex flex-row mb-8 gap-8 font-plusjakarta">
              {Jobs.map((job) => (
                <span
                  key={job}
                  className="text-white font-medium hover:bg-bluu flex justify-center items-center rounded-xl w-60 h-10 text-center bg-palebluu "
                >
                  {job}
                </span>
              ))}
            </div> */}
            <Loading isLoading={isLoading} />
            <NoJobsAvailable data={jobs?.length} />
            <div className="flex flex-col gap-5">
              {jobs?.map((job) => (
                <Card key={job._id} data={job} />
              ))}
            </div>
          </div>
        </div>
        {/* <span></span> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
