import MarketPanel from "./MarketPanel";
import { FaApple, FaAndroid } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[800px] flex items-center overflow-hidden">
            {/* STATIC SVG BACKGROUND */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <img
                    src="/src/asset_svg/Line.svg"
                    alt=""
                    className="w-full h-full object-cover hero-svg"
                />
            </div>

            {/* Container to constrain width like a standard dashboard */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 z-10">
                    {/* Heading - Adjusted font weight and tracking */}
                    <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.1] font-bold tracking-tight text-white">
                        <span className="text-[#03f8c5]">Wibeex Digital</span>
                        <br />
                        Asset Exchange
                    </h1>

                    {/* Subtitle - Slightly more spacing */}
                    <p className="mt-6 text-[16px] sm:text-[18px] text-gray-300 font-medium">
                        Secure, seamless crypto trading.
                    </p>

                    {/* Input + Button Group */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                        <div className="relative w-full sm:w-[320px]">
                            <input
                                placeholder="Email/Phone Number"
                                className="
                  w-full
                  bg-black/20
                  backdrop-blur-sm
                  border border-white/10
                  rounded-lg
                  px-5 py-4
                  text-sm text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-[#03f8c5]/50
                  transition-all
                "
                            />
                        </div>

                        <button
                            className="px-10 py-4  rounded-lg text-sm font-bold w-full sm:w-auto hover:brightness-110 transition-all active:scale-95"
                            style={{ background: "#03f8c5", color: "#010b11" }}
                        >
                            Start Now
                        </button>
                    </div>

                    {/* Download App Section */}
                    <div className="mt-12">
                        <span className="text-sm font-medium text-gray-400">Download the app</span>
                        <div className="flex gap-4 mt-4">
                            <IconBox><FaAndroid size={20} /></IconBox>
                            <IconBox><FaApple size={20} /></IconBox>
                            <IconBox><BsQrCode size={20} /></IconBox>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT - The Market Panel */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <div className="relative transform scale-90 sm:scale-100 transition-transform duration-500">
                        {/* Optional: Add a soft glow behind the panel to match the "high-end" exchange feel */}
                        <div className="absolute -inset-4 bg-[#03f8c5]/5 blur-3xl rounded-full" />
                        <MarketPanel />
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ---------- Small reusable icon wrapper ---------- */
function IconBox({ children }) {
    return (
        <div
            className="
        w-12 h-12
        bg-white/5
        border border-white/10
        rounded-xl
        flex items-center justify-center
        text-white/80
        hover:border-[#03f8c5]
        hover:text-[#03f8c5]
        hover:bg-[#03f8c5]/5
        transition-all
        cursor-pointer
      "
        >
            {children}
        </div>
    );
}