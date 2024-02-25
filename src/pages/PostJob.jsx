import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { usePostJob } from "../hooks/api/jobs/useJobsQuery";
import RichTextEditor from "../components/RichTextEditor";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const [job, setJob] = useState({
    userId: currentUser?._id,
    companyName: "",
    jobType: [],
    jobTitle: "",
    salaryNum: 0,
    jobCategory: "",
    jobDesc: "",
    jobLocation: "",
    workingSite: "",
    jobLink :"",
  });

  // jobDesc update value
  const [value, setValue] = useState("");

  useEffect(() => {
    setJob((prev) => {
      return { ...prev, jobDesc: value };
    });
  }, [value, job]);

  const handleChange = (e) => {
    setJob((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const sites = [
    {
      title: "Onsite",
      value: "onsite"
    },
    {
      title: "Remote",
      value: "remote"
    },
    {
      title: "Hybrid",
      value: "hybrid"
    }
  ]

  const type = [
    {
      title: "Full-Time",
      value: ["fulltime"]
    },
    {
      title: "Part-Time",
      value: ["parttime"]
    },
    {
      title: "Internship",
      value: ["internship"]
    }
  ]

  const categories = [
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

  console.log(job);

  const { mutate, error } = usePostJob({
    onSuccess: () => {
      setJob({
        userId: currentUser?._id,
        companyName: "",
        jobType: [],
        jobTitle: "",
        salaryNum: 0,
        jobCategory: "",
        jobDesc: "",
        jobLocation: "",
        workingSite: "",
        jobLink :"",
      });

      toast.success("Register Berhasil!", {
        pauseOnHover: false,
        position: "bottom-right",
      });

      navigate("/myjobpost");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(job);
    console.log(error);
  };

  const onCancelClick = () => {
    Swal.fire({
      icon: "question",
      title: "Cancel Job Posting?",
      text: "This action cannot be undone. The job posting will be removed from the system.",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#E54335",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  return (
    <>
      <div className="w-full">
        <div className=" w-full flex items-center justify-center">
          <div className="px-5 py-20 rounded-3xl  border-1 border-gray-200">
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
              <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="mt-9"> 
                  <label className="text-lg font-medium mt-10">
                    Company Name
                  </label>
                  <input
                    className="w-full  rounded-xl p-4 mt-3 bg-gray-200 text-black"
                    type="text"
                    id="companyName"
                    onChange={handleChange}
                    placeholder="tryfix.com"
                    required
                  />
                </div>
                {/* Job Type */}
                <div>
                  <label className="text-lg font-medium mt-10"> Job Type </label>
                  <div className="flex flex-row w-full justify-end items-center rounded-x">
                    <select
                      className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                      id="jobType"
                      onChange={handleChange}>
                      <option key="" value="" >Choose Type</option>
                      {type.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 absolute mr-3 mt-2 pointer-events-none" />
                  </div>
                </div>
                {/* Job Title */}
                <div>
                  <label className="text-lg font-medium mt-10"> Job Title</label>
                  <input
                    className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                    type="text"
                    id="jobTitle"
                    placeholder="Fullstack Developer"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Salary */}
                <div>
                  <label className="text-lg font-medium mt-10"> Salary</label>
                  <input
                    className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                    type="number"
                    id="salaryNum"
                    placeholder="Rp. 7.500.000"
                    onChange={handleChange}
                  />
                </div>
                {/* Job Category */}
                <div>
                  <label className="text-lg font-medium mt-10"> Job Category</label>
                  <div className="flex flex-row w-full justify-end items-center rounded-x">
                    <select
                      className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                      id="jobCategory"
                      onChange={handleChange}>
                      <option defaultValue="" value="" key="" >Choose Category</option>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 absolute mr-3 mt-2 pointer-events-none" />
                  </div>
                </div>
                {/* Location */}
                <div>
                  <label className="text-lg font-medium mt-10"> Location</label>
                  <input
                    className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                    type="text"
                    id="jobLocation"
                    placeholder="Bandung"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Working Site */}
                <div>
                  <label className="text-lg font-medium mt-10">Working Site</label>
                  <div className="flex flex-row w-full justify-end items-center rounded-x">
                    <select
                      className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                      id="workingSite"
                      onChange={handleChange}
                    >
                      <option key="" value="" defaultValue="">Choose Working Site</option>
                      {sites.map((site) => (
                        <option key={site.value} value={site.value}>
                          {site.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 absolute mr-3 mt-2 pointer-events-none" />
                  </div>
                </div>
                {/* Job Desc */}
                <div>
                  <label className="text-lg font-medium mt-10">
                    {" "}
                    Job Description
                  </label>
                  <RichTextEditor setValue={setValue}/>
                </div>
                {/* Job Link */}
                <div>
                  <label className="text-lg font-medium mt-10"> Job Link</label>
                  <input
                    className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                    type="text"
                    id="jobLink"
                    placeholder=" tryfix.com/career"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Submit Button  */}
                <div>
                  <div className="mt-8  flex flex-col gap-y-4 text-white">
                    <button className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold">
                      Create Job
                    </button>
                  </div>
                </div>
                {/* Cancel Button  */}
                <div>
                  <div className="mt-3  flex flex-col gap-y-4 text-white">
                    <button
                      type="button"
                      className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-300 text-white font-bold"
                      onClick={onCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
