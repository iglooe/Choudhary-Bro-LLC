import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="relative overflow-hidden bg-white/5">
      <div className="relative w-full mx-auto max-w-7xl">
        <div
          className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6"
          x-data="{ open: false }"
        >
          <div className="flex flex-row items-center justify-between text-sm text-black lg:justify-start">
            <a href="/">
              <div>
                <p className="text-white text-2xl">Choudhary Brothers</p>
              </div>
            </a>
            <button className="items-center justify-center focus:outline-none inline-flex focus:text-black hover:text-[#0000ff] md:hidden p-2 text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  className="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M6 18L18 6M6 6l12 12"
                  className="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0 md:space-x-6">
            <a className="font-medium text-sm active:bg-fuchsia-50 active:text-black bg-indigo-50 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none group hover:bg-zinc-50 cursor-pointer justify-center px-6 py-2.5 rounded-xl text-sky-600">
              Home
            </a>

            <Link
              className="py-2 text-sm font-medium text-white hover:text-zinc-50/50"
              href="/about"
            >
              About
            </Link>

            <Link
              className="py-2 text-sm font-medium text-white hover:text-zinc-50/50"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
