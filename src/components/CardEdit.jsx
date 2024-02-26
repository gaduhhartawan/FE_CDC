import React from "react";
import { formatDistanceToNow } from "date-fns";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteJob } from "../hooks/api/jobs/useJobsQuery";
import Swal from "sweetalert2";

const CardEdit = ({ data, setShowModal, setCurrentJob }) => {
  const queryClient = useQueryClient();
  const parts = data?.jobLocation.split(",");
  const { mutate } = useDeleteJob({
    onSuccess: () => {
      toast.success("Job Deleted Succesfuly!", {
        pauseOnHover: false,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: [data.userId] });
    },
  });

  // Location if parts array more than 1 element take the 2nd element
  let location;
  if (parts.length > 1) {
    location = parts[1].trim();
  } else {
    location = parts[0].trim();
  }

  // Img name
  const fullname = data.companyName.split(" ").join("+");

  // date
  const date = new Date(data?.createdAt);
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  // Job Type Handle more than 1
  const jobType = data.jobType.join(", ");

  const onConfirmDeleteClick = () => {
    Swal.fire({
      icon: "question",
      title: "Are you sure want to delete this post?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#E54335",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(data._id);
      }
    });
  };
  return (
    <Link
      to={`/jobs/${data._id}`}
      className="flex md:flex-row flex-col md:gap-y-0 gap-y-4 justify-between items-center p-5 bg-[#EFEFEF] hover:bg-[#DDE2ED] rounded-2xl cursor-pointer"
    >
      {/* user */}
      <div className="flex md:flex-row flex-col items-center gap-4 text-center md:text-left">
        <img
          src={`https://ui-avatars.com/api/?name=${fullname}&background=D9D9D9`}
          className="rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <span>{data.companyName}</span>
          <span className="font-bold">{data.jobTitle}</span>
          <span className="text-gray-500 capitalize">
            {location} | {jobType}
          </span>
        </div>
      </div>
      {/* time */}
      <div className="flex flex-col items-center gap-y-2">
        <span className="capitalize">{formattedDate}</span>
        <div className="flex flex-row gap-4">
          <Link onClick={() => {setCurrentJob(data); setShowModal(true)}}>
            <button className="bg-bluu rounded-md w-20 h-8 text-white">
              Edit
            </button>
          </Link>
          <Link onClick={onConfirmDeleteClick}>
            <button className="text-red-500 font-medium rounded-md w-20 h-8">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CardEdit;
