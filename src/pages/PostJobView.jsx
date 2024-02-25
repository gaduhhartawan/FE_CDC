import Header from "../components/Header";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { PlusIcon } from "@heroicons/react/24/outline";

const PostJobView = () => {
  return (
    <>
      <Header />

      <div className="w-full h-screen">
        <div className="w-full flex items-center justify-center">
          <div className="flex px-10 py-20 rounded-3xl border-1 border-gray-200">
            <div className="flex flex-col flex-grow">
              <h1 className="font-plusjakarta text-4xl font-semibold">
                Job Listing
              </h1>
              <p className="font-plusjakarta font-reguler text-lg text-gray-500 mt-4">
                A portal that allows you to manage all your job postings in one
                place.
              </p>
            </div>

            <div className="flex flex-col items-end ml-3 ">
              <Link
                to="/postjob"
                className="active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all 
                flex items-center py-4 px-6 rounded-xl bg-blue-500 text-white font-plusjakarta font-bold "
              >
                <PlusIcon className="h-5 w-5 mr-" />
                <span className="">Add New Post</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="font-plusjakarta font-reguler text-lg text-gray-500 mt-4 text-center">
          ini row
        </p>
      </div>
    </>
  );
};

export default PostJobView;
