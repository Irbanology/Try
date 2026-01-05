import { useState } from "react";

function ExpandIcon({ open }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#03f8c5]"
        >
            {open ? (
                <path
                    d="M6 12h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            ) : (
                <>
                    <path
                        d="M12 6v12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 12h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </>
            )}
        </svg>
    );
}

const faqs = [
    {
        q: "What can I do on Wibeex?",
        a: "Wibeex allows you to buy, sell, and manage digital assets with ease. You can trade cryptocurrencies in real time, securely store your assets, track market movements, and access advanced financial tools—all from a single, intuitive platform.",
    },
    {
        q: "Which features are available on Wibeex?",
        a: "Wibeex offers spot trading, seamless fiat on- and off-ramp services, Launchpad access for early-stage projects, secure wallets, real-time market data, and fast crypto deposits and withdrawals designed for both beginners and professional traders.",
    },
    {
        q: "Where can I see live crypto prices?",
        a: "Live cryptocurrency prices are available directly on the Wibeex platform. Our real-time market data ensures you always have accurate pricing, charts, and market trends to make informed trading decisions.",
    },
    {
        q: "How do I place my first trade?",
        a: "To place your first trade, create a Wibeex account, complete verification, deposit funds, and navigate to the trading section. Select your preferred trading pair, enter the amount, and execute your trade instantly.",
    },
    {
        q: "How can Wibeex help grow my portfolio?",
        a: "Wibeex helps you grow your portfolio by providing low trading fees, access to emerging projects through Launchpad, real-time market insights, and secure tools that allow you to trade confidently and efficiently.",
    },
    {
        q: "What makes Wibeex a good choice?",
        a: "Wibeex stands out with its secure infrastructure, transparent pricing, fast execution, and user-focused design. Our platform combines advanced technology with simplicity, making crypto trading accessible, reliable, and rewarding.",
    },
];


export default function FaqSection() {
    const [active, setActive] = useState(1);

    return (
        <section className="w-full min-h-[1224px] bg-[#010b11] flex justify-center">
            <div className="w-full max-w-[1200px] px-6 md:px-12 pt-32">

                {/* TITLE */}
                <h2 className="text-center text-[32px] md:text-[40px] font-semibold text-white mb-24">
                    Frequently Asked Questions
                </h2>

                {/* FAQ LIST */}
                <div className="space-y-6">
                    {faqs.map((item, i) => {
                        const open = active === i;

                        return (
                            <div
                                key={i}
                                onClick={() => setActive(open ? null : i)}
                                className={`
                  w-full rounded-xl
                  px-8 py-6
                  cursor-pointer
                  transition-colors duration-300
                  ${open ? "bg-[#061822]" : "bg-transparent"}
                `}
                            >
                                {/* ROW */}
                                <div className="flex items-center justify-between">

                                    {/* LEFT */}
                                    <div className="flex items-center gap-6 ">
                                        {/* NUMBER */}
                                        <div
                                            className="
                        w-[52px] h-[52px]
                        rounded-xl
                        bg-[#061822]
                        text-white
                        flex items-center justify-center
                        text-sm
                        font-bold
                      "
                                        >
                                            {i + 1}
                                        </div>

                                        {/* QUESTION */}
                                        <p className="text-white text-[26px] font-bold leading-[1.2]">
                                            {item.q}
                                        </p>
                                    </div>

                                    {/* ICON */}
                                    <ExpandIcon open={open} />
                                </div>

                                {/* ANSWER */}
                                {open && item.a && (
                                      <div className="pl-[76px] pr-6">
    <p className="mt-3 max-w-[900px] text-[15px] leading-[1.5] text-gray-400">
      {item.a}
    </p>
  </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
