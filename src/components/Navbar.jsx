import { Search, Globe, Download } from "lucide-react";
import LogoImg from "../asset_svg/Logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

        {/* LEFT */}
        <div className="flex items-center gap-6 lg:gap-10">
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

          {/* Desktop menu only */}
          <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Buy Crypto</li>
            <li className="hover:text-white cursor-pointer">Markets</li>
            <li className="hover:text-white cursor-pointer">LaunchPad</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-1">
              Trade <span className="text-xs">▾</span>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

          {/* Login (text only, hide on very small screens if needed) */}
          <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition">
            Login
          </button>

          {/* Sign Up */}
          <button
            className="px-3 sm:px-4 py-1.5 rounded-md text-sm font-medium transition hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#03f8c5",
              color: "#010b11",
              boxShadow: "0 0 20px rgba(3,248,197,0.25)",
            }}
          >
            Sign Up
          </button>

          <Globe className="hidden sm:block w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <Download className="hidden sm:block w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        </div>

      </div>
    </nav>
  );
}
