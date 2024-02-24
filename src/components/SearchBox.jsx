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
    <div className="rounded-sr h-40 lg:h-fit lg:flex flex-col items-center justify-center bg-bluu">
      <img src="bar.svg" className="size-full" />
      <div className="lg:flex flex-col gap-8 absolute items-center">
        <div className="text-white text-st font-plusjakarta font-semibold">
          Looking for new opportunities?
        </div>
        <div className="text-white text-lg font-plusjakarta font-semibold">
          Browse our latest job openings that you want
        </div>
        <div className="lg:flex flex-row w-full rounded-full bg-search-bar items-center">
          <div className="lg:flex flex-row px-3 self-start justify-start h-14 w-1/2 items-center mx-3 gap-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <div className="text-base font-plusjakarta text-black w-full">
              <input
                type="text"
                placeholder="Find Job"
                className="bg-transparent p-2 outline-none w-full"
                ref={searchRef}
              />
            </div>
          </div>
          <MinusIcon className="h-12 w-12 rotate-90" />
          <div className="lg:flex flex-row h-14 w-1/2 items-center mx-3 gap-2 justify-between">
            <div className="lg:flex flex-row h-14 items-center gap-2 w-full">
              <MapPinIcon className="h-5 w-5" />
              <div className="text-base font-plusjakarta text-black w-full">
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent p-2 outline-none w-full"
                  ref={locationRef}
                />
              </div>
            </div>
            <button
              className="justify-end rounded-full text-white bg-bluu h-10 w-32 text-base font-plusjakarta mx-4"
              onClick={searchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
