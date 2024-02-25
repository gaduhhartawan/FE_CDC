import React, {useState} from "react";
import RichTextEditor from "../components/RichTextEditor";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {RemoveScroll} from 'react-remove-scroll';

export default function Modal({showModal, setShowModal, data}) {
    const [value, setValue] = useState("");

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

    console.log(data) 
    if (showModal) {
        return (
        <RemoveScroll>
          <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute w-full h-full bg-black bg-opacity-80"></div>
          <div className="relative lg:w-2/4 w-3/4 bg-white shadow-lg rounded-md p-4 overflow-y-scroll max-h-[80vh] modal">
            <h3 className="text-xl font-semibold">Buat Peminjaman</h3>
                <form onSubmit={null}>
                    {/* Company Name */}
                    <div className="mt-9"> 
                    <label className="text-lg font-medium mt-10">
                        Company Name
                    </label>
                    <input
                        className="w-full  rounded-xl p-4 mt-3 bg-gray-200 text-black"
                        type="text"
                        id="companyName"
                        onChange={null}
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
                        onChange={null}>
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
                        onChange={null}
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
                        onChange={null}
                    />
                    </div>
                    {/* Job Category */}
                    <div>
                    <label className="text-lg font-medium mt-10"> Job Category</label>
                    <div className="flex flex-row w-full justify-end items-center rounded-x">
                        <select
                        className="w-full rounded-xl p-4 mt-2 appearance-none text-black bg-gray-200"
                        id="jobCategory"
                        onChange={null}>
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
                        onChange={null}
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
                        onChange={null}
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
                        onChange={null}
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
                        onClick={() => setShowModal(false)}
                        >
                        Cancel
                        </button>
                    </div>
                    </div>
                </form>
          </div>
        </div>
        </RemoveScroll>
        )
    }
    return ( 
        null
    );
}