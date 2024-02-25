import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import CardEdit from "../components/CardEdit";
import { PlusIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useGetMyJob } from "../hooks/api/jobs/useJobsQuery";

const PostJobView = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser._id;
  const { data, isLoading } = useGetMyJob(userId);
  // console.log(myjob);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center">
          <div className="flex flex-col lg:flex-row lg:items-end mb-6 lg:w-1/2 w-full lg:justify-between items-center">
            <div className="flex flex-col md:gap-y-4 items-center lg:items-start mb-5 lg:mb-0 w-1/2">
              <span className="font-bold text-2xl">
                My Jobs Post
              </span>
              <span className="lg:block hidden text-base">
                A portal that allows you to manage all your job postings in one
                place.
              </span>
            </div>
            <Link 
              to="/postjob"
              className="flex flex-row items-center bg-bluu text-white rounded-lg gap-x-2 w-40 h-10 justify-center">
              <PlusIcon className="h-6 w-6"/>
              <span className="md:text-base text-s text-center">
                Add new Post
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center lg:w-1/2 w-full">
            <div className="flex flex-col gap-5 w-full">
              {data?.map((job) => (
                <>
                  <CardEdit key={job._id} data={job} />
                </>
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default PostJobView;
