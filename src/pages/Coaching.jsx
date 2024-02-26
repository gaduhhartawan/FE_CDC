import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Coaching = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Mohon login terlebih dahulu",
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1700);
    } else {
      navigate("/coaching/chat");
    }
  };
  
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-center px-10 gap-y-5 h-[73vh]">
      <div className="flex flex-col gap-7 lg:w-1/2">
        <h1 className="text-5xl font-bold">Achieve Your Career Potential</h1>
        <p className="max-w-md">
          Find the support and strategies you need to advance your career
        </p>
        <button
          onClick={handleNavigate}
          className="text-white bg-blue-700 lg:w-48 py-4 rounded-full text-center"
        >
          Get Started
        </button>
      </div>
      <img src="/career.png" alt="career" className="flex-1 w-80 max-w-lg" />
    </div>
  );
};

export default Coaching;
