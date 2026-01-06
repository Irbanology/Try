import { marketCoins, topGainers } from "../data/icons";

const BORDER = "rgba(3,248,197,0.35)";
// const BG = "bg-black/10 backdrop-blur-sm";
// const BG = "bg-[#010b11] backdrop-blur-sm";
const BG = `
  bg-[#010b11]/80
  backdrop-blur-md
  border border-white/20
  shadow-[0_0_20px_rgba(225,255,255,0.06)]
`;


export default function MarketPanel() {
    return (
        /* Changed to w-full with a max-width and added a container for better scaling */
        <div className="w-full max-w-[420px] font-sans mx-auto lg:mx-0">

            {/* ================= BOX 1 : POPULAR ================= */}
            <div
                className={`
          ${BG}
          border 
          rounded-[20px] sm:rounded-[32px] 
          overflow-hidden
        `}
                style={{ borderColor: BORDER }}
            >
                {/* Tabs */}
                <div className="flex items-center justify-between pr-3 sm:pr-4">
                    <div className="flex bg-[#061822] rounded-br-xl overflow-hidden">
                        <button
                            className="px-4 sm:px-6 py-2 sm:py-3 text-[12px] sm:text-sm font-bold rounded-tl-[24px] sm:rounded-tl-[32px]"
                            style={{ background: "#03f8c5", color: "#010b11" }}
                        >
                            Popular
                        </button>
                        <button className="px-4 sm:px-5 py-2 sm:py-3 text-[12px] sm:text-sm font-medium text-white/80">
                            New Listing
                        </button>
                    </div>

                    <span className="text-[10px] sm:text-[11px] text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                        View All 350+ <span className="hidden xs:inline">Coins</span> <span className="ml-1">›</span>
                    </span>
                </div>

                {/* Coin List */}
                <div className="mt-4 sm:mt-5 px-4 sm:px-5 pb-5 sm:pb-6 space-y-4 sm:space-y-5">
                    {marketCoins.map((c) => (
                        <div key={c.symbol} className="flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <img src={c.icon} alt={c.symbol} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" />
                                <div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <span className="text-white font-bold text-xs sm:text-sm">{c.symbol}</span>
                                        <span className="text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-tight">{c.name}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-white font-semibold text-xs sm:text-sm">
                                    ${c.price}
                                </div>
                                <div className={`text-[10px] sm:text-[11px] font-bold ${c.change.startsWith("+") ? "text-emerald-400" : "text-rose-500"}`}>
                                    {c.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= BOX 2 & 3 ================= */}
            {/* Keeps 2 columns, but reduces spacing on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">

                {/* -------- BOX 2 : TOP GAINERS -------- */}
                <div
                    className={`
            ${BG} 
            border
            rounded-[18px] sm:rounded-[20px]
            p-3 sm:p-5
          `}
                    style={{ borderColor: BORDER }}
                >
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <span className="text-white font-semibold text-[11px] sm:text-sm">Top Gainers</span>
                        <span className="text-gray-400 text-[9px] sm:text-[11px]">View</span>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        {topGainers.map((g) => (
                            <div key={g.symbol} className="flex items-center justify-between">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <img src={g.icon} alt={g.symbol} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
                                    <span className="text-white font-medium text-[10px] sm:text-xs">{g.symbol}</span>
                                </div>
                                <span className="text-[#03f8c5] font-bold text-[10px] sm:text-xs">
                                    ${g.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------- BOX 3 : ANNOUNCEMENT -------- */}
                <div
                    className={`
            ${BG} border
            rounded-[18px] sm:rounded-[20px]
            p-3 sm:p-5
          `}
                    style={{ borderColor: BORDER }}
                >
                    <div className="mb-3 sm:mb-4">
                        <span className="text-white font-semibold text-[11px] sm:text-sm">Announcement</span>
                    </div>

                    <div className="space-y-2 sm:space-y-4 text-[9px] sm:text-[11px] text-white/70 leading-[1.3] sm:leading-[1.4]">
                        <p className="border-b border-white/5 pb-1 sm:pb-2">We are upgrading core systems to enhance stability..</p>
                        <p className="border-b border-white/5 pb-1 sm:pb-2">Additional validation layers and monitoring tools are...</p>
                        <p className="border-b border-white/5 pb-1 sm:pb-2">Market Expansion Preparationare underway to..</p>
                        <p className="hidden xs:block">Pre-Launch Performance Testing Final performance....</p>
                    </div>
                </div>
            </div>
        </div>
    );
}