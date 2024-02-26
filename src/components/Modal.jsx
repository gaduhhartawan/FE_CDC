import React, { useState, useEffect } from "react";
import RichTextEditor from "./RichTextEditor";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { RemoveScroll } from "react-remove-scroll";
import { useGetJob, useUpdateJob } from "../hooks/api/jobs/useJobsQuery";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loading from "./Loading";

export default function Modal({ showModal, setShowModal, jobData }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  const id = jobData._id || ""
  const { data, isLoading, refetch } = useGetJob(id);
  const [currentJob, setCurrentjob] = useState({
    _id: "",
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

  const [value, setValue] = useState();
  
  useEffect(() => {
    setCurrentjob({
      _id: data?._id,
      companyName: data?.companyName,
      jobType: data?.jobType,
      jobTitle: data?.jobTitle,
      salaryNum: data?.salaryNum,
      jobCategory: data?.jobCategory,
      jobLocation: data?.jobLocation,
      workingSite: data?.workingSite,
      jobLink :data?.jobLink,
    });
    setCurrentjob((prev) => {
      return { ...prev, jobDesc: value };
    });
  }, [data, value]);

  const handleChange = (e) => {
    setCurrentjob((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const sites = [
    {
      title: "Onsite",
      value: "onsite",
    },
    {
      title: "Remote",
      value: "remote",
    },
    {
      title: "Hybrid",
      value: "hybrid",
    },
  ];

  const type = [
    {
      title: "Full-Time",
      value: ["fulltime"],
    },
    {
      title: "Part-Time",
      value: ["parttime"],
    },
    {
      title: "Internship",
      value: ["internship"],
    },
  ];

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

  const { mutate, error } = useUpdateJob(id, {
    onSuccess: () => {
      toast.success("Your post has been updated!", {
        pauseOnHover: false,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: [data.userId] });
      // localStorage.setItem("currentUser", JSON.stringify(data));
      setShowModal(false);
      refetch();
    },
  });

  console.log(currentJob)

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      userId: currentUser?._id,
      job : {
        ...currentJob
      }
    });
    console.log(error);
  };

  const onCancelClick = () => {
    Swal.fire({
      icon: "question",
      title: "Cancel Edit Post?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#E54335",
    }).then((result) => {
      if (result.isConfirmed) {
        setShowModal(false);
      }
    });
  };

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (showModal) {
    return (
      <RemoveScroll>
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute w-full h-full bg-black bg-opacity-80"></div>
          <div className="relative lg:w-2/5 w-11/12 bg-white shadow-lg lg:rounded-3xl rounded-xl p-4 overflow-y-scroll max-h-[80vh] modal">
              <h1 className="font-plusjakarta lg:text-4xl text-xl font-semibold text-start mt-2">
                Edit Post
              </h1>
              <hr className="h-px my-8 bg-gray-200 border-0" />
            <form onSubmit={handleSubmit}>
              {/* Company Name */}
              <div className="mt-2">
                <label className="text-md lg:text-lg font-medium mt-10">
                  Company Name
                </label>
                <input
                  className="w-full rounded-xl p-4 mt-3 bg-gray-200 text-black mb-5"
                  type="text"
                  id="companyName"
                  value={currentJob.companyName}
                  onChange={handleChange}
                  placeholder="tryfix.com"
                  required
                />
              </div>
              {/* Job Type */}
              <div>
                <label className="text-md lg:text-lg font-medium"> Job Type </label>
                <div className="flex flex-row w-full justify-end items-center rounded-x mb-5">
                  <select
                    className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                    id="jobType"
                    value={currentJob.jobType}
                    onChange={handleChange}
                  >
                    <option key="" value="">
                      Choose Type
                    </option>
                    {type.map((tipe) => (
                      <option key={tipe.value} value={tipe.value}>
                        {tipe.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-5 h-5 absolute mr-3 mt-2 pointer-events-none" />
                </div>
              </div>
              {/* Job Title */}
              <div>
                <label className="text-md lg:text-lg font-medium mt-10"> Job Title</label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black mb-5"
                  type="text"
                  id="jobTitle"
                  placeholder="Fullstack Developer"
                  value={currentJob.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Salary */}
              <div>
                <label className="text-md lg:text-lg font-medium mt-10"> Salary</label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black mb-5"
                  type="number"
                  id="salaryNum"
                  placeholder="Rp. 7.500.000"
                  value={currentJob.salaryNum}
                  onChange={handleChange}
                />
              </div>
              {/* Job Category */}
              <div>
                <label className="text-md lg:text-lg font-medium mt-10">
                  {" "}
                  Job Category
                </label>
                <div className="flex flex-row w-full justify-end items-center rounded-xl mb-5">
                  <select
                    className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                    id="jobCategory"
                    value={currentJob.jobCategory}
                    onChange={handleChange}
                  >
                    <option defaultValue="" value="" key="">
                      Choose Category
                    </option>
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
                <label className="text-md lg:text-lg font-medium mt-10"> Location</label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black mb-5"
                  type="text"
                  id="jobLocation"
                  placeholder="Bandung"
                  value={currentJob.jobLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Working Site */}
              <div>
                <label className="text-md lg:text-lg font-medium mt-10">
                  Working Site
                </label>
                <div className="flex flex-row w-full justify-end items-center rounded-xl mb-5">
                  <select
                    className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                    id="workingSite"
                    value={currentJob.workingSite}
                    onChange={handleChange}
                  >
                    <option key="" value="" defaultValue="">
                      Choose Working Site
                    </option>
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
              <div className="mb-5">
                <label className="text-md lg:text-lg font-medium mt-10">
                  {" "}
                  Job Description
                </label>
                <RichTextEditor setValue={setValue} value={data?.jobDesc} />
              </div>
              {/* Job Link */}
              <div>
                <label className="text-md lg:text-lg font-medium mt-10"> Job Link</label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                  type="text"
                  id="jobLink"
                  placeholder=" tryfix.com/career"
                  value={currentJob.jobLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0"></hr>
              <div className="mt-8 flex flex-col lg:flex-row-reverse gap-x-4 text-white lg:justify-start">
                {/* Submit Button  */}
                <button className="lg:w-1/6 active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold">
                  Update
                </button>

                {/* Cancel Button  */}
                <button
                  type="button"
                  className="lg:w-1/12 active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl text-red-500 font-bold"
                  onClick={onCancelClick}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </RemoveScroll>
    );
  }
  return null;
}
