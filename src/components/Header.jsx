import { useState, useEffect, useRef } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { toast } from "react-toastify";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../hooks/api/auth/useAuthQuery";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const fullname = currentUser?.fullname.split(" ").join("+");

  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      localStorage.setItem("currentUser", null);
      setLogout(false);
      toast.success("Berhasil Logout!", {
        pauseOnHover: false,
        position: "bottom-right",
      });
      setMobileMenuOpen(false);
      navigate("/");
    },
  });

  const isAuthorized = currentUser?.isAdmin || currentUser?.isCompany;

  const newRef = useRef(null);
  const handleLogout = () => {
    setLogout(!logout);
  };

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setLogout(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <header className="bg-white sticky px-3 lg:px-10 top-0 z-40">
      <nav
        className="h-28 mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8 relative"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">careerpath.</span>
            <img className="h-8 w-auto" src="/ico.png" alt="careerpath" />
          </Link>
          <Link
            to="/"
            className="mx-2 flex text-3xl font-bold font-plusjakarta tracking-tight"
          >
            careerpath.
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-7 text-base font-semibold font-plusjakarta leading-6 text-gray-900">
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold underline underline-offset-2 decoration-bluu decoration-2"
                : "hover:underline hover:underline-offset-2 hover:decoration-bluu hover:decoration-2"
            }
          >
            Find Job
          </NavLink>
          <Link
            to="/maintenance"
            className="hover:underline hover:underline-offset-2 hover:decoration-bluu hover:decoration-2"
          >
            Scholarship
          </Link>
          <NavLink
            to="/coaching"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold underline underline-offset-2 decoration-bluu decoration-2"
                : "hover:underline hover:underline-offset-2 hover:decoration-bluu hover:decoration-2"
            }
          >
            Career Coaching
          </NavLink>
          <NavLink
            to="/about"
            id="about"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold underline underline-offset-2 decoration-bluu decoration-2"
                : "hover:underline hover:underline-offset-2 hover:decoration-bluu hover:decoration-2"
            }
          >
            About
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center lg:gap-x-4">
          {currentUser && <BellIcon className="h-7 w-7 lg:flex self-center" />}
          {(currentUser?.isAdmin || currentUser?.isCompany) && (
            <NavLink
              to="/postjob"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-extrabold underline underline-offset-2 decoration-bluu decoration-2 font-plusjakarta leading-6 text-gray-900 self-center"
                  : "text-base font-semibold font-plusjakarta leading-6 text-gray-900 self-center"
              }
            >
              Post a Job
            </NavLink>
          )}
          {currentUser && (
            <>
              <span className="capitalize font-plusjakarta font-medium">
                Hi, {currentUser?.fullname.split(" ")[0]}
              </span>
              <img
                src={
                  currentUser?.imgUrl === "None"
                    ? `https://ui-avatars.com/api/?name=${fullname}`
                    : currentUser?.imgUrl
                }
                alt=""
                className="w-10 h-10 cursor-pointer rounded-full"
                ref={newRef}
                onClick={handleLogout}
              />
            </>
          )}
          {!currentUser && (
            <Link
              to="/login"
              className="rounded-full lg:flex h-11 -ml-1 bg-blue-500 hover:bg-blue-400 text-white"
            >
              <div className="text-base font-semibold font-plusjakarta leading-6 mx-8 self-center">
                Sign In / Sign Up
              </div>
            </Link>
          )}
        </div>
        {/* logout */}
        {logout && (
            <div
            className= {isAuthorized
                  ? "absolute -bottom-16 right-12 border bg-white border-gray-400 p-2 rounded-xl w-36 text-center justify-center"
                  : "absolute -bottom-9 right-12 border bg-white border-gray-400 p-2 rounded-xl w-36 text-center justify-center"
                }
            ref={newRef}
            >
            <div className="flex flex-row items-center text-center justify-start mb-2">
              <UserIcon className="h-6 w-6 mr-2" />
              <Link to={`/myaccount/${currentUser?._id}`} onClick={handleLogout}>Account</Link>
            </div>
            {(currentUser?.isAdmin || currentUser?.isCompany) && (
              <div className="flex flex-row items-center justify-start mb-2">
                <BriefcaseIcon className="h-6 w-6 mr-2" />
                <Link to={`/myjobpost/`} onClick={handleLogout}>Jobs Post</Link>
              </div>
            )}
            <div
              className="cursor-pointer flex flex-row items-center justify-start"
              onClick={mutate}
            >
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6 mr-2" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="ico.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/jobs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find Job
                </Link>
                <Link
                  to="/maintenance"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Scholarship
                </Link>
                <Link
                  to="/coaching"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career Coaching
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              <div className="py-6">
                {currentUser ? (
                  <>
                    <div className="flex flex-row justify-between">
                      <Link
                        to={`/myaccount/${currentUser?._id}`}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        My Account
                      </Link>
                      <span className="mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50 capitalize">
                        {currentUser?.fullname}
                      </span>
                    </div>
                    {(currentUser?.isAdmin || currentUser?.isCompany) && (
                        <Link 
                        to={`/myjobpost/`}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}>
                          Jobs Post
                        </Link>
                    )}
                    <hr className="h-px my-5 bg-gray-100 border-0" />
                    <button
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={mutate}
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
