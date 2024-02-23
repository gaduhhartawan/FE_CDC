import React from "react";

const MyAccount = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-1">My Account</h2>
        <span className="text-sm font-light">
          You have the flexibility to adapt the description diction to meet your
          unique needs
        </span>
      </div>
      {/* Foto Profil */}
      <div className="flex items-center justify-center gap-4 my-5">
        <img
          src={`https://ui-avatars.com/api/?name=john+doe&rounded=true`}
          alt=""
          className="w-32 h-32"
        />
        <div className="flex flex-col gap-1">
          <button className="bg-bluu text-white py-3 rounded-full w-48">
            Upload Photo
          </button>
          <span className="text-gray-400 text-sm">
            At least 256x256px PNG or JPG file
          </span>
        </div>
      </div>
      {/* form */}
      <form className="flex flex-col items-center">
        {/* Fullname */}
        <div className="flex flex-col gap-1 mb-3 w-80">
          <label htmlFor="fullname" className="font-semibold">
            Full Name
          </label>
          <input
            className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
            type="text"
            placeholder="Your Name"
            id="fullname"
            name="fullname"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-1 mb-3 w-80">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1 mb-3 w-80">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
            type="password"
            placeholder="Your Password"
            id="password"
            name="password"
          />
        </div>
        {/* Conf Password */}
        <div className="flex flex-col gap-1 mb-3 w-80">
          <label htmlFor="confpassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
            type="password"
            placeholder="Your Conf Password"
            id="confpassword"
            name="confpassword"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1 mb-3 w-80">
          <label htmlFor="phone" className="font-semibold">
            Mobile Phone
          </label>
          <input
            className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
            type="text"
            placeholder="Your Phone Number"
            id="phone"
            name="phone"
          />
        </div>
        {/* Button */}
        <div className="flex flex-col mt-3 gap-2">
          <button
            className="bg-bluu text-white py-3 w-80 rounded-xl"
            type="submit"
          >
            Save Changes
          </button>
          <button className="bg-gray-200 text-gray-500 py-3 rounded-xl">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default MyAccount;
