// import * as React from 'react';
import Header from "../components/Header";

import React, { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";

export default function PostJob() {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div className="w-full h-screen ">
        <div className=" w-full flex items-center justify-center">
          <div className=" px-10 py-20 rounded-3xl  border-1 border-gray-200">
            <h1 className="font-plusjakarta text-4xl font-semibold text-center ">
              {" "}
              Let {"'"}s find the best candidates <br />
              for your team!
            </h1>
            <p className="font-plusjakarta font-reguler text-lg text-gray-500 mt-4 text-center">
              Post your job vacancy on our platform and reach millions of
              potential job seekers across Indonesia. <br />
              The process is quick and easy, just follow these steps:
            </p>
            <div className="mt-2"></div>

            <div>
              <div>
                <label className="text-lg font-medium mt-10">
                  {" "}
                  Company Name
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-3 bg-gray-200 text-black"
                  type="text"
                  id="companyname"
                  placeholder="tryfix.com"
                />
              </div>
              <label className="text-lg font-medium mt-10"> Job Type</label>
              <input
                className=" w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="text"
                id="jobtype"
                placeholder="Full-time"
              />
            </div>
            <div>
              <label className="text-lg font-medium mt-10"> Job Title</label>
              <input
                className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="text"
                id="jobtitle"
                placeholder="Fullstack Developer"
              />
            </div>
            <div>
              <label className="text-lg font-medium mt-10"> Salary</label>
              <input
                className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="number"
                id="salary"
                placeholder="Rp. 7.500.000"
              />
            </div>
            <div>
              <label className="text-lg font-medium mt-10"> Job Category</label>
              <input
                className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="numbtexter"
                id="jobcategory"
                placeholder="Website Developer"
              />
            </div>
            <div>
              <label className="text-lg font-medium mt-10"> Location</label>
              <input
                className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="text"
                id="localtion"
                placeholder="Bandung"
              />
            </div>
            <div>
              <label className="text-lg font-medium mt-10">
                {" "}
                Job Description
              </label>
              <RichTextEditor setValue={setValue} />
              <div>{/* <div>{value}</div> */}</div>
            </div>
            <div>
              <label className="text-lg font-medium mt-10"> Job Link</label>
              <input
                className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                type="text"
                id="joblink"
                placeholder=" tryfix.com/career"
              />
            </div>
            <div>
              <div className="mt-8  flex flex-col gap-y-4 text-white">
                <button className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold">
                  Create Job
                </button>
              </div>
            </div>
            <div>
              <div className="mt-3  flex flex-col gap-y-4 text-white">
                <button className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-300 text-white font-bold">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}