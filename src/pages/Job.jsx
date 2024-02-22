import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div className="min-h-svh">
      <Header />
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
            <div className="flex items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="company_img"
                className="w-40 h-40"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">UI UX Designer</h2>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold">at Google</span>
                  <span className="rounded-md bg-blue-500 text-white text-sm uppercase px-2">
                    fulltime
                  </span>
                </div>
              </div>
            </div>
            {/* button */}
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Apply Now
            </button>
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
                <ul className="list-disc ml-5 font-light">
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
                </ul>
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
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Working Site</h3>
                  <span>Internship</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Job Posted</h3>
                  <span>20 Feb 2024</span>
                </div>
                <div className="text-lg font-semibold text-center">
                  <h3 className="text-gray-400">Salary Monthly</h3>
                  <span>IDR 10.0000.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Job;