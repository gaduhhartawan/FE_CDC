import React from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useGetJob } from "../hooks/api/jobs/useJobsQuery";
import { MapPinIcon, BriefcaseIcon, ClockIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const Job = () => {
  const { id } = useParams();
  const { data: job, isLoading } = useGetJob(id);

  // location
  const parts = job?.jobLocation.split(",");
  let location;
  if (parts?.length > 1) {
    location = parts ? parts[1].trim() : "";
  } else {
    location = parts ? parts[0].trim() : "";
  }

  //Link
  const linkJob = job?.jobLink;

  // Img name
  const fullname = job?.companyName.split(" ").join("+");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // console.log(data);
  return (
    <div className="min-h-svh">
      {/* <Header /> */}
      <div className="p-6 lg:px-9">
        {/* breadcrumbs */}
        <div className="flex gap-2">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/jobs">All Jobs</Link>
          </span>
          <span>/</span>
          <div className="text-gray-400">Job Details</div>
        </div>
        {/* Content */}
        <div>
          {/* user */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between max-w-5xl">
            {/* user */}
            <div className="flex items-center gap-5 my-5">
              <img
                src={`https://ui-avatars.com/api/?name=${fullname}&background=D9D9D9`}
                alt="company_img"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{job.jobTitle}</h2>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold">
                    {job.companyName}
                  </span>
                  {job.jobType.map((type) => (
                    <span
                      key={type}
                      className="rounded-md bg-blue-500 text-white text-sm uppercase px-2 flex items-center"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* button */}
            <a
              href={linkJob}
              target="_blank"
              className="bg-blue-500 text-white px-5 py-2 rounded-md"
            >
              Apply Now
            </a>
          </div>

          <div className="flex lg:flex-row flex-col-reverse lg:gap-10 gap-5 lg:mt-0 mt-8">
            <div className="left flex-[2]">
              {/* Job Description */}
              <div className="flex flex-col gap-1 my-3">
                <h2 className="text-2xl font-semibold">Job Description</h2>
                <p className="text-justify">
                  <div dangerouslySetInnerHTML={{__html: job.jobDesc}}>

                  </div>
                </p>
              </div>
            </div>

            <div className="right flex-[1] flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Job Overview</h2>
              <div className="bg-whitegray rounded-xl grid lg:grid-cols-2 grid-cols-1 p-5 gap-5">
                <div className="flex flex-col text-lg font-semibold text-center items-center">
                  <MapPinIcon className="h-10 text-bluu"/>
                  <h3 className="text-gray-400">Job Location</h3>
                  <span>{location}</span>
                </div>
                <div className="flex flex-col text-lg font-semibold text-center">
                  <BriefcaseIcon className="h-10 text-bluu"/>
                  <h3 className="text-gray-400">Working Site</h3>
                  <span className="capitalize">{job.workingSite}</span>
                </div>
                <div className="flex flex-col text-lg font-semibold text-center">
                  <ClockIcon className="h-10 text-bluu"/>
                  <h3 className="text-gray-400">Job Posted</h3>
                  <span>{format(new Date(job.createdAt), "dd-MM-yyyy")}</span>
                </div>
                <div className="flex flex-col text-lg font-semibold text-center">
                  <BanknotesIcon className="h-10 text-bluu"/>
                  <h3 className="text-gray-400">Salary Monthly</h3>
                  <span>
                    {job.salaryNum ? "IDR " + job.salaryNum : "Undisclosed"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Job;
