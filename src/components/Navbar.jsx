import { useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white px-3 lg:px-10">
      <nav
        className="h-28 mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/ico.png" alt="" />
          </a>
          <p className="mx-2 flex text-3xl font-bold font-plusjakarta tracking-tight">
            <Link to="/">careerpath.</Link>
          </p>
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
        <Popover.Group className="hidden lg:flex lg:gap-x-5 mr-5 font-plusjakarta font-medium">
          <Link
            to="/jobs"
            className="hover:underline hover:underline-offset-2 hover:decoration-blue-500 hover:decoration-2 text-base font-semibold font-plusjakarta leading-6 text-gray-900"
          >
            Find Job
          </Link>
          {/* <a href="#" className="text-base font-semibold font-plusjakarta leading-6 text-gray-900">
            Companies
          </a> */}
          <Link
            to="/maintenance"
            className="hover:underline hover:underline-offset-2 hover:decoration-blue-500 hover:decoration-2 text-base font-semibold font-plusjakarta leading-6 text-gray-900"
          >
            Scholarship
          </Link>
          <Link
            to="/coaching"
            className="hover:underline hover:underline-offset-2 hover:decoration-blue-500 hover:decoration-2 text-base font-semibold font-plusjakarta leading-6 text-gray-900"
          >
            Career Coaching
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:underline-offset-2 hover:decoration-blue-500 hover:decoration-2 text-base font-semibold font-plusjakarta leading-6 text-gray-900"
          >
            About
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="ico.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/jobs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Find Job
                </Link>
                <Link
                  to="/maintenance"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Scholarship
                </Link>
                <Link
                  to="/coaching"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Career Coaching
                </Link>
                <Link
                  to="/maintenance"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
