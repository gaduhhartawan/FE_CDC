import React from "react";

const JobCard = () => {
  return (
    <div className="rounded-lg w-60 h-64 bg-gray-200 flex flex-col items-center justify-center">
      <img
        src={`https://ui-avatars.com/api/?name=john+doe&background=fff`}
        alt=""
        className="w-20 h-20 rounded-full mb-2"
      />
      <h2 className="font-bold text-center">Senior Frontend Developer</h2>
      <h2 className="mb-5 font-semibold text-blue-400">Microsoft</h2>
      <span className="rounded-full bg-bluu text-white px-7">Full Time</span>
      <div className="flex gap-5 mt-2">
        <span className="text-gray-500">Semarang</span>
        <span className="text-gray-500">IDR 100000</span>
      </div>
    </div>
  );
};

export default JobCard;
