/** @format */

import React from "react";
import leftside from "../../assets/auth/Group 137.svg";
import rightside from "../../assets/auth/Ellipse 4.png";
import TopsideImage from "../../assets/auth/Group 173.svg";

export default function AuthLayout({ title, subtitle, children, titleSize = "4xl" }) {
  return (
    <div className="min-h-screen xl:h-screen w-full bg-white font-tajawal overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* LEFT SIDE */}
          <div
            className="hidden xl:block lg:w-1/2 relative overflow-hidden"
            style={{ minHeight: "100vh" }}
          >
            <img
              src={leftside}
              alt="left illustration"
              className="absolute right-[80px] bottom-[100px] w-full h-full object-cover"
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full xl:w-1/2 py-24 px-10 md:px-16 lg:px-24 bg-white flex items-start">
            <div className="w-full max-w-[500px] mx-auto xl:w-[80%] xl:-ml-14" style={{ minHeight: "100vh" }}>
              <div className="w-full flex justify-center mb-6 hidden xl:block">
                {/* Hidden on xl screens */}
              </div>
              <div className="w-full flex justify-center -mt-14 mb-12 xl:hidden">
                <img
                  src={TopsideImage}
                  alt="top illustration"
                  className="w-full max-w-[460px] object-contain"
                />
              </div>
              <h1
                dir="rtl"
                className={`text-3xl md:text-${titleSize} font-bold text-[#28293D] -mt-3 mb-6 text-center`}
              >
                {title}
              </h1>
              {subtitle && (
                <p dir="rtl" className="text-sm text-text-2 mb-10 leading-relaxed ">
                  {subtitle}
                </p>
              )}

              {children}

              <div className="relative hidden xl:block">
                <img
                  src={rightside}
                  alt="right illustration"
                  className="absolute left-[420px] -top-12 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}