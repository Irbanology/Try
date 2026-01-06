import { Search, Globe, Download, Menu } from "lucide-react";
import LogoImg from "../asset_svg/Logo.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 h-16">

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

          {/* SEARCH (always visible) */}
          <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* HAMBURGER (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-sm text-gray-300">
          <div className="space-y-2">
            <div className="hover:text-white cursor-pointer">Buy Crypto</div>
            <div className="hover:text-white cursor-pointer">Markets</div>
            <div className="hover:text-white cursor-pointer">LaunchPad</div>
            <div className="hover:text-white cursor-pointer">Trade</div>
          </div>

          <div className="flex items-center gap-4 pt-2">
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

            <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
            <Download className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
