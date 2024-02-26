import * as React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="px-10 py-20 rounded-3xl border-1 border-gray-200 text-center">
          <h1 className="font-plusjakarta font-italic text-3xl text-gray-500 mt-3">
            What are you doing here?!
          </h1>
          <div className="mt-10">
            <img src="/404.svg" alt="Error Page Not Found" />
          </div>
          <div className="mt-8">
            <div className="flex justify-center ">
              <Link to="/" className="text-white">
                <button className="active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 px-8 rounded-xl bg-bluu text-white font-bold mt-3">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
