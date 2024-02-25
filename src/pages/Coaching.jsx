import React from "react";
import { Link } from "react-router-dom";

const Coaching = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="flex flex-col gap-7 w-1/2">
        <h1 className="text-5xl font-bold">Achieve Your Career Potential</h1>
        <p className="max-w-md">
          Find the support and strategies you need to advance your career
        </p>
        <Link
          to="/coaching/chat"
          className="text-white bg-blue-700 lg:w-48 py-4 rounded-full text-center"
        >
          Get Started
        </Link>
      </div>
      <img src="/career.png" alt="career" className="flex-1 max-w-lg" />
    </div>
  );
};

export default Coaching;
