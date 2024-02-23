import React from "react";
import { format, formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const parts = data?.jobLocation.split(",");
  const location = parts[1].trim();
  // const date = format(new Date(data?.createdAt), "dd-MM-yyyy");

  // Img name
  const fullname = data.companyName.split(" ").join("+");
  // date
  const date = new Date(data?.createdAt);
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  return (
    <Link
      to={`/jobs/${data._id}`}
      className="flex justify-between items-center p-5 bg-[#EFEFEF] hover:bg-[#DDE2ED] rounded-2xl cursor-pointer"
    >
      {/* user */}
      <div className="flex items-center gap-4">
        <img
          src={`https://ui-avatars.com/api/?name=${fullname}&background=D9D9D9`}
          className="rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <span>{data.companyName}</span>
          <span className="font-bold">{data.jobTitle}</span>
          <span className="text-gray-500">{location} | Fulltime</span>
        </div>
      </div>
      {/* time */}
      <span>{formattedDate}</span>
    </Link>
  );
};

export default Card;
