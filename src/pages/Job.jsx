import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useGetJob } from "../hooks/api/jobs/useJobsQuery";


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
          <div className="text-gray-400">Job Details</div>
        </div>
        {/* Content */}
        <div>
          {/* user */}
          <div className="flex items-center justify-between max-w-5xl">
            {/* user */}
            <div className="flex items-center gap-5 my-5">
              <img
                src={`https://ui-avatars.com/api/?name=${fullname}&background=D9D9D9`}
                alt="company_img"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{job.jobTitle}</h2>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold">
                    {job.companyName}
                  </span>
                  {job.jobType.map((type) => (
                    <span
                      key={type}
                      className="rounded-md bg-blue-500 text-white text-sm uppercase px-2"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* button */}
            <a href={linkJob} target="_blank" className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Apply Now
            </a>
          </div>

          <div className="flex gap-10">
            <div className="left flex-[2]">
              {/* Company Profile */}
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">Company Profile</h2>
                <p className="text-lg font-light">
                  a subsidiary of Alphabet Inc, is a provider of search and
                  advertising services on the internet. The company{"'"}s
                  business areas include advertising, search, platforms and
                  operating systems, and enterprise and hardware products. Its
                  portfolio of products and services include Google Search,
                  Google Chrome, Google Docs, Google Calendar, Google Photos,
                  Google Meet, Google Drive, Google Finance, Google Play Books,
                  Google News, Google Earth, Google Ad Manager, Google Play,
                  AdMob, Google Maps, AdSense, Gmail, Google Groups, and
                  YouTube. The company has business presence across the
                  Americas, Europe, Asia-Pacific, Africa, and the Middle East.
                  Google is headquartered in Mountain View, California, the US.
                </p>
              </div>
              
              {/* Job Description */}
              <div className="flex flex-col gap-1 my-3">
                <h2 className="text-2xl font-semibold">Job Description</h2>
                <p className="font-light text-justify">{job.jobDesc}</p>
                {/* <ul className="list-disc ml-5 font-light">
                  <li>
                    Participate in and support product design and user research
                    activities.
                  </li>
                  <li>
                    Planning and conducting user research studies, such as
                    interviews, remote and in-person usability sessions,
                    surveys, card sorts, etc.
                  </li>
                  <li>
                    Assisting ongoing research with note-taking and observation
                  </li>
                  <li>
                    Have the ability to write testing scripts, track and manage
                    data, and present findings
                  </li>
                  <li>Willingness to help recruit and schedule participants</li>
                </ul> */}
              </div>
              {/* Skill Requirements */}
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">Skill Requirements</h2>
                <ul className="list-disc ml-5 font-light">
                  <li className="">
                    Participate in and support product design and user research
                    activities.
                  </li>
                  <li>
                    Planning and conducting user research studies, such as
                    interviews, remote and in-person usability sessions,
                    surveys, card sorts, etc.
                  </li>
                  <li>
                    Assisting ongoing research with note-taking and observation
                  </li>
                </ul>
              </div>
            </div>

            <div className="right flex-[1] flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Job Overview</h2>
              <div className="bg-blue-200 rounded-md grid grid-cols-2 p-5 gap-5">
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Job Location</h3>
                  <span>{location}</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Working Site</h3>
                  <span className="capitalize">{job.workingSite}</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Job Posted</h3>
                  <span>{format(new Date(job.createdAt), "dd-MM-yyyy")}</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Salary Monthly</h3>
                  <span>{job.salaryNum ? "IDR " + job.salaryNum : "Undisclosed"}</span>
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
