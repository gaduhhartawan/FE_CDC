import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  // location
  const parts = data?.jobLocation.split(",");
  let location;
  if (parts?.length > 1) {
    location = parts ? parts[1].trim() : "";
  } else {
    location = parts ? parts[0].trim() : "";
  }

  // name
  const fullname = data.companyName.split(" ").join("+");
  return (
    <Link
      to={`/jobs/${data._id}`}
      className="rounded-lg w-60 h-72 bg-gray-200 flex flex-col items-center justify-center"
    >
      <img
        src={`https://ui-avatars.com/api/?name=${fullname}&background=random`}
        alt=""
        className="w-20 h-20 rounded-full mb-2"
      />
      <h2 className="font-bold text-center">{data.jobTitle}</h2>
      <h2 className="mb-5 font-semibold text-blue-400 text-center">
        {data.companyName}
      </h2>
      {data.jobType.map((item) => (
        <p key={item} className="rounded-full bg-bluu text-white px-7 mb-1">
          {item}
        </p>
      ))}
      <div className="flex justify-between w-full gap-5 mt-2 px-4">
        <span className="text-gray-500">{location}</span>
        <span className="text-gray-500">
          IDR {data.salaryNum ? data.salaryNum : "-"}
        </span>
      </div>
    </Link>
  );
};

export default JobCard;
