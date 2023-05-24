import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-col items-baseline space-y-6">
          <div className="mx-auto">
            <a
              href="/"
              className="mx-auto text-lg text-center text-black transition duration-500 ease-in-out transform tracking-relaxed"
            >
              <Image
                width={80}
                height={80}
                src="/logo.jpg"
                alt="company-logo"
              />
            </a>
          </div>

          <a className="mx-auto text-sm text-gray-500">
            Telephone: +1 909-237-1814
          </a>

          <a className="mx-auto text-sm text-gray-500">
            Email: ????@choudharybrothersna.com
          </a>

          <div className="mx-auto">
            <span className="mx-auto mt-2 text-sm text-gray-500">
              Copyright © 2015 - {new Date().getFullYear()}
              <a
                href="https://unwrapped.design"
                className="mx-2 text-blue-500 hover:text-gray-500"
                rel="noopener noreferrer"
              >
                @unwrappedHQ
              </a>
              Since 2014
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
