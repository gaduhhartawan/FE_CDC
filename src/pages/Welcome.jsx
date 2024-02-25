import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen max-h-screen flex flex-col items-center justify-center gap-y-8">
      <img src="/success.svg" alt="" />
      <div className="text-center flex flex-col gap-y-2">
        <h2 className="font-bold text-4xl">Welcome to Careerpath.</h2>
        <p className="max-w-sm">
          Excellent work! We're thrilled to inform you that your account has
          been successfully created.
        </p>
      </div>
      <Link
        to={"/"}
        className="bg-bluu text-white py-4 text-center w-full max-w-sm rounded-xl"
      >
        Continue
      </Link>
    </div>
  );
};

export default Welcome;
