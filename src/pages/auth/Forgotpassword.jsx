// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center">
          <div className="font-plusjakarta px-10 py-20 rounded-3xl  border-1 border-gray-200 ">
            <h1 className="font-plusjakarta text-5xl font-semibold">
              {" "}
              Forgot Password!
            </h1>
            <p className="font-plusjakarta font-italic text-lg text-gray-500 mt-4">
              Please enter the email you previously registered with, <br />
              and you will receive an email shortly.
            </p>
            <div className="mt-5"></div>
            <div>
              <div>
                <label className="font-plusjakarta text-lg font-medium">
                  {" "}
                  Email
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 mb-3 bg-gray-200"
                  type="text"
                  id="email"
                  placeholder="tryfix@gmail.com"
                />
              </div>
              <div>
                <div className="font-plusjakarta mt-3 flex flex-col gap-y-4 text-white">
                  <button className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold">
                    {" "}
                    Reset Password
                  </button>
                </div>
              </div>
              <div className="font-plusjakarta mt-6 justify-center text-center">
                <div className="font-plusjakarta font-italic text-base">
                  Oh, do you remember the password now? Let{"'"}s{" "}
                  <Link
                    to="/login"
                    className="font-plusjakarta text-blue-500 hover:underline hover:text-blue-600"
                  >
                    {" "}
                    Log in!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
