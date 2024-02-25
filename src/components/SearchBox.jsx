import {
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";

export default function SearchBox({ setlocation, setSearch }) {
  const searchRef = useRef(null);
  const locationRef = useRef(null);

  function searchClick() {
    setSearch(searchRef.current.value);
    setlocation(locationRef.current.value);
  }

  return (
    <div className="rounded-sr h-80 xl:h-fit flex flex-col items-center justify-center bg-bluu">
      <img src="bar.svg" className="size-full" />
      <div className="lg:flex flex-col gap-4 absolute items-center lg:mt-12">
        <div className="text-white text-2xl lg:text-5xl xl:text-st font-plusjakarta font-semibold text-center lg:w-full w-3/5 mx-auto">
          Looking for a new opportunities?
        </div>
        <div className="text-white lg:text-xl font-plusjakarta font-semibold text-center lg:mb-0 my-3 lg:w-full w-1/2 mx-auto">
          Browse out latest job openings that you want
        </div>
        <div className="flex w-3/4 lg:w-full rounded-full bg-search-bar items-center justify-center mx-auto lg:mt-0 mt-2">
          <div className="flex px-3 self-start justify-start h-14 w-1/2 items-center mx-3 gap-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <div className="lg:text-base text-xs font-plusjakarta text-black w-full">
              <input
                type="text"
                placeholder="Find Job"
                className="bg-transparent p-2 outline-none w-full"
                ref={searchRef}
              />
            </div>
          </div>
          <MinusIcon className="h-12 w-12 rotate-90" />
          <div className="flex h-14 w-1/2 items-center mx-3 gap-2 justify-between">
            <div className="flex h-14 items-center gap-2 w-full">
              <MapPinIcon className="h-5 w-5" />
              <div className="lg:text-base text-xs font-plusjakarta text-black w-full">
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent p-2 outline-none w-full"
                  ref={locationRef}
                />
              </div>
            </div>
            <button
              className="justify-end rounded-full text-white bg-bluu h-10 w-32 font-plusjakarta mx-4 hidden lg:block"
              onClick={searchClick}
            >
              Search
            </button>
          </div>
        </div>
        {/* button on mobile */}
        <div className="flex justify-center w-full mt-5">
          <button
            className="rounded-full text-bluu font-semibold bg-white h-10 w-3/4 font-plusjakarta lg:hidden"
            onClick={searchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
