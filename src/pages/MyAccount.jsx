import React, { useEffect, useState } from "react";
import {
  useGetUser,
  useUpdateUserMutation,
} from "../hooks/api/users/useUsersQuery";
import { toast } from "react-toastify";
import upload from "../utils/upload";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyAccount = () => {
  const queryClient = useQueryClient();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    imgUrl: "",
    phone: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetUser(id);
  const { mutate } = useUpdateUserMutation(id, {
    onSuccess: () => {
      toast.success("Your account has been updated!", {
        pauseOnHover: false,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: [id] });
      localStorage.setItem("currentUser", JSON.stringify(data));
      refetch();
    },
  });

  const fullname = data?.fullname.split(" ").join("+");

  useEffect(() => {
    setUser({
      fullname: data?.fullname,
      email: data?.email,
      phone: data?.phone,
    });
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleImgChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url;
    if (file) {
      url = await upload(file);
    }
    mutate({
      userId: data?._id,
      user: {
        ...user,
        password: user.password,
        imgUrl: url ? url : data.imgUrl,
      },
    });
  };

  const onCancelClick = () => {
    Swal.fire({
      icon: "question",
      title: "Cancel Edit Account?",
      text: "Not ready to share just yet? No worries! Save your post and come back to it later",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#E54335",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="py-5 px-10 font-plusjakarta">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-1">My Account</h2>
          <span className="text-sm font-light">
            You have the flexibility to adapt the description diction to meet
            your unique needs
          </span>
        </div>
        {/* Foto Profil */}
        <div className="flex lg:flex-row flex-col items-center justify-center gap-4 my-5">
          <div className="relative">
            <img
              src={
                preview
                  ? preview
                  : data?.imgUrl === "None"
                  ? `https://ui-avatars.com/api/?name=${fullname}`
                  : data?.imgUrl
              }
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />
            {preview && (
              <span
                onClick={() => setPreview(null)}
                className="cursor-pointer absolute top-0 right-3 bg-red-500 text-white rounded-full w-7 h-7 flex justify-center items-center"
              >
                X
              </span>
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <label
              className="bg-bluu text-white py-3 rounded-full w-48 text-center cursor-pointer"
              htmlFor="file-input"
            >
              Upload Photo
            </label>
            <span className="text-gray-400 text-sm">
              At least 256x256px PNG or JPG file
            </span>
          </div>
        </div>
        {/* form */}
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            onChange={handleImgChange}
            type="file"
            id="file-input"
            className="hidden"
          />
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
              value={user.fullname}
              onChange={handleChange}
            />
          </div>
          {/* email */}
          <div className="flex flex-col gap-1 mb-3 w-80">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              className="outline-none p-3 rounded-xl bg-gray-400 placeholder:text-black disabled:cursor-not-allowed"
              type="email"
              placeholder="Your Email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1 mb-3 w-80">
            <label htmlFor="password" className="font-semibold">
              Password
              <span className="text-sm text-gray-400 ml-2">(*If needed)</span>
            </label>
            <input
              className="outline-none p-3 rounded-xl bg-gray-200 placeholder:text-black"
              type="password"
              placeholder="*******"
              id="password"
              name="password"
              onChange={handleChange}
              value={user.password}
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
              placeholder="*******"
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
              placeholder="e.g. 087812234556"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
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
            <button
              className="bg-gray-200 text-gray-500 py-3 rounded-xl"
              type="button"
              onClick={onCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccount;
