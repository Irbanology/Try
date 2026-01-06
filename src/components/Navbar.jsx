import { useState } from "react";
import { Search, Globe, Download, Menu, X } from "lucide-react";
import LogoImg from "../asset_svg/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent sticky top-0 z-50  ">
      <div className="flex items-center justify-between px-6 lg:px-8 h-16">

        {/* LEFT */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src={LogoImg}
              alt="WIBEEX Logo"
              className="h-6 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-wide text-[#03f8c5]">
              WIBEEX
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Buy Crypto</li>
            <li className="hover:text-white cursor-pointer">Markets</li>
            <li className="hover:text-white cursor-pointer">LaunchPad</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-1">
              Trade <span className="text-xs">▾</span>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

            <button className="text-sm font-medium text-gray-300 hover:text-white transition">
              Login
            </button>

            <button
              className="px-4 py-1.5 rounded-md text-sm font-medium transition hover:brightness-110 active:scale-95"
              style={{
                backgroundColor: "#03f8c5",
                color: "#010b11",
                boxShadow: "0 0 20px rgba(3,248,197,0.25)",
              }}
            >
              Sign Up
            </button>

            <Globe className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            <Download className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 space-y-4 text-sm text-gray-300 bg-transparent">
          <div className="flex flex-col gap-4">
            <span className="hover:text-white cursor-pointer">Buy Crypto</span>
            <span className="hover:text-white cursor-pointer">Markets</span>
            <span className="hover:text-white cursor-pointer">LaunchPad</span>
            <span className="hover:text-white cursor-pointer">Trade</span>

            <div className="flex items-center gap-4 pt-4">
              <Search className="w-5 h-5 hover:text-white cursor-pointer" />
              <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
              <Download className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>

            <div className="flex gap-3 pt-4">
              <button className="text-sm font-medium hover:text-white">
                Login
              </button>
              <button
                className="px-4 py-1.5 rounded-md text-sm font-medium"
                style={{
                  backgroundColor: "#03f8c5",
                  color: "#010b11",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
