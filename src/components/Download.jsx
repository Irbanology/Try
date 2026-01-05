import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";

const Download = () => {
  return (
    <section className="w-full bg-[#061822] flex items-center justify-center">
      {/* Height responsive instead of fixed */}
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[120px] py-20 md:py-32 flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32">

        {/* LEFT : Phone Outline */}
        <div className="relative w-[260px] h-[520px] sm:w-[300px] sm:h-[600px] lg:w-[320px] lg:h-[650px] border border-white/20 rounded-[50px] flex-shrink-0">
          {/* Inner screen */}
          <div className="absolute inset-2 border border-white/5 rounded-[42px] bg-black/10" />
          {/* Speaker */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/10 rounded-full" />
        </div>

        {/* RIGHT : Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
          <h2 className="text-white text-[28px] sm:text-[32px] font-bold leading-tight mb-10">
            Get the Wibeex Exchange Mobile <br />
            App Now!
          </h2>

          {/* QR Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
            <div className="relative p-3 bg-white rounded-3xl w-44 h-44 flex items-center justify-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.wibeex.com"
                alt="Wibeex QR Code"
                className="w-full h-full object-contain"
              />

              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-[#03f8c5] rounded flex items-center justify-center text-[#061822] text-[10px] font-bold">
                  w
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm font-medium">
                Scan to Download App
              </p>
              <p className="text-white text-lg font-bold mt-1">
                iOS and Android
              </p>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="flex gap-12 sm:gap-20">
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <FaApple size={40} className="text-white hover:text-[#03f8c5] transition-colors" />
              <span className="text-gray-400 text-sm font-medium">
                iPhone
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 cursor-pointer">
              <FaAndroid size={38} className="text-white hover:text-[#03f8c5] transition-colors" />
              <span className="text-gray-400 text-sm font-medium">
                Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
