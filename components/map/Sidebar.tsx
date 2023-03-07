"use client";
import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lg:hidden">
        <button
          className="relative m-2 h-6 w-6 items-center rounded-lg p-5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="sr-only">Open sidebar</span>
          <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <aside
        id="sidebar"
        className={`absolute top-0 right-0 z-40 h-full w-80 overflow-y-auto  bg-white/30 backdrop-blur-sm transition-transform ${
          isOpen ? "" : "translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="mt-4 w-full max-w-md border border-gray-200 bg-white p-4 shadow">
          <div className="mb-4 flex">
            <h5 className="text-xl font-bold leading-none text-gray-900 ">
              📌 Pinned Zoos
            </h5>
          </div>
          <div className="flow-root">
            <p>No Pinned Items</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
