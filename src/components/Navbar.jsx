import { Search, Globe, Download } from "lucide-react";
import LogoImg from '../asset_svg/Logo.png';

export default function Navbar() {
    return (
        <nav
            className="
        w-full
      "
            style={{ borderColor: "#03f8c5" }}
        >
            <div className="flex items-center justify-between px-8 h-16">

                {/* LEFT */}
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
                    <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

                    <button
  className="
    px-4 py-1.5
    text-sm font-medium
    text-gray-300
    rounded-md
    bg-[#061822]
    backdrop-blur-sm
    transition
  "
>
  Login
</button>

                    <button
                        className="
              px-4 py-1.5 rounded-md text-sm font-medium
              transition
            "
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

            </div>
        </nav>
    );
}
