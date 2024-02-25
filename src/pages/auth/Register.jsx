// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../hooks/api/auth/useAuthQuery";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    isCompany: false,
  });
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, error } = useRegisterMutation({
    onSuccess: (data) => {
      localStorage.setItem("currentUser", JSON.stringify(data.data.user));
      setUser({
        fullname: "",
        email: "",
        password: "",
        isCompany: false,
      });

      setConfPassword("");

      toast.success("Register Successfully!", {
        pauseOnHover: false,
        position: "bottom-right",
      });

      navigate("/welcome");
    },
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCompany = (e) => {
    setUser((prev) => {
      return { ...prev, isCompany: e.target.checked };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(user);
    console.log(error);
  };
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="font-plusjakarta px-10 py-20 rounded-3xl  border-1 border-gray-200 ">
          <h1 className="text-5xl font-semibold">Get Started Now!</h1>
          <p className="font-italic text-lg text-gray-500 mt-3">
            Be part of our growing professional community and <br />
            unlock your career potential!
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <div>
                <label className="font-plusjakarta text-lg font-medium">
                  Full Name
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 mb-3 bg-gray-200"
                  type="text"
                  id="name"
                  placeholder="tryfix"
                  name="fullname"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="font-plusjakarta text-lg font-medium">
                  Email
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 mb-3 bg-gray-200"
                  type="email"
                  id="email"
                  placeholder="tryfix@gmail.com"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="font-plusjakarta text-lg font-medium mt-5">
                  {" "}
                  Password
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                  type="password"
                  id="password"
                  placeholder="••••••••••••••••••••••"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-plusjakarta text-lg font-medium mt-5">
                  Confirm Password
                </label>
                <input
                  className="w-full  rounded-xl p-4 mt-2 bg-gray-200 text-black"
                  type="password"
                  id="confirmpassword"
                  placeholder="••••••••••••••••••••••"
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
              {confPassword !== user.password && confPassword && (
                <p className="mt-1 text-red-500">Password doesn{"'"}t match</p>
              )}
              <div className=" font-plusjakarta my-5 flex items-center gap-2">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="isCompany"
                  name="isCompany"
                  onChange={handleCompany}
                />
                <label
                  htmlFor="isCompany"
                  className="font-plusjakarta cursor-pointer"
                >
                  Create a Company Account.
                </label>
              </div>

              <div>
                <div className=" font-plusjakarta mt-3 flex flex-col gap-y-4 text-white">
                  <button
                    type="submit"
                    className=" active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="font-plusjakarta mt-6 justify-center text-center">
            <div className="font-plusjakarta font-italic text-base">
              Already have an account?
              <Link
                to="/login"
                className="font-plusjakarta text-blue-500 hover:underline hover:text-blue-600 ml-1"
              >
                Log in here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
