import React from "react";

const Card = () => {
  return (
    <div className="group/card rounded-3xl flex flex-col items-center justify-center gap-2 hover:bg-palebluu hover:outline-none hover:text-white bg-white outline outline-blue-400 text-black font-plusjakarta px-8 py-3">
      <img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt="google"
        className="w-16 h-16"
      />
      <div className="text-center">
        <h2 className="font-semibold text-lg">UI UX Designer</h2>
        <span>Google Inc</span>
      </div>
      <div className="grid grid-cols-2 gap-y-3 mt-3">
        <span>Jakarta, ID</span>
        <span>IDR 10.000.000</span>
        <span>Full-time</span>
        <span>27 Feb 2024</span>
      </div>
      <button className="self-end rounded-full px-5 py-2 group-hover/card:bg-white group-hover/card:text-black bg-blue-500 text-white font-semibold mt-4">
        Details
      </button>
    </div>
  );
};

export default Card;
