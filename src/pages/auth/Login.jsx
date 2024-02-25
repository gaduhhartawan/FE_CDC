// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useLoginMutation } from "../../hooks/api/auth/useAuthQuery";
import axiosInstance from "../../utils/axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { mutate } = useLoginMutation({
    onSuccess: (data) => {
      localStorage.setItem("currentUser", JSON.stringify(data.data));
      toast.success("Login Berhasil!", {
        pauseOnHover: false,
        position: "bottom-right",
      });
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/", {replace:true});
      }, 1500);
    },
    onMutate: () => setIsLoading(true),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onError: () => {
          toast.error("Invalid Credentials", {
            position: "bottom-right",
            pauseOnHover: false,
          });
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="px-10 py-20 rounded-3xl  border-1 border-gray-200 font-plusjakarta ">
          <h1 className="text-5xl font-semibold font-plusjakarta">
            Welcome Back!
          </h1>
          <p className=" font-plusjakarta font-italic text-lg text-gray-500 mt-3">
            Connect with professionals who share your mindset <br></br>and open
            doors to a satisfying career!
          </p>
          <div className="mt-8"></div>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2  font-medium text-base font-plusjakarta ">
                  Remember me{" "}
                </label>
              </div>
              <button className=" font-plusjakarta font-medium text-base text-blue-400">
                <Link to="/forgotpassword">Forgot password</Link>
              </button>
            </div>
            <div>
              <div className="mt-8  flex flex-col gap-y-4 text-white font-plusjakarta ">
                <button
                  type="submit"
                  className="active:scale-[.98] active-duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-blue-500 text-white font-bold"
                >
                  Sign In {isLoading && "..."}
                </button>
              </div>
            </div>
          </form>
          <div className="font-plusjakarta mt-6 justify-center text-center">
            <div className="font-italic text-base">
              Dont have an account yet?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline hover:text-blue-600"
              >
                Sign up{" "}
              </Link>{" "}
              now, it {"'"}s free!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
