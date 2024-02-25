import React, { useState } from "react";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";
import { searchJobs } from "../hooks/api/jobs/useJobsQuery";
import { Link } from "react-router-dom";
import NoJobs from "../components/NoJobs";
import Loading from "../components/Loading";

const Home = () => {
  const [search, setSearch] = useState("");
  const [location, setlocation] = useState("");
  const { data, isLoading } = searchJobs(search, location);

  const jobs = data?.slice(0, 5);
  
  return (
    <div>
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
                  to="/jobs"
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
            <Loading isLoading={isLoading} />
            <NoJobs data={jobs?.length} />
            <div className="flex flex-col gap-5">
              {jobs?.map((job) => (
                <Card key={job._id} data={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
