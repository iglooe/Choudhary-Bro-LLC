import React from "react";

export default function Cta() {
  return (
    <section className="bg-gray-100">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex w-full mx-auto">
          <div className="relative inline-flex items-center m-auto align-middle">
            <div className="relative max-w-6xl p-10 overflow-hidden bg-white rounded-3xl lg:p-20">
              <div className="relative max-w-lg">
                <div>
                  <p className="text-3xl font-medium md:text-6xl text-slate-900">
                    <span className="text-sky-600">Recruiting</span> Excellence
                    For Careers
                  </p>

                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Connecting Talented Professionals with Leading IT Companies
                    for Rewarding Careers
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
