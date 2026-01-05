import React from 'react';
import { FiArrowUpRight, FiShield, FiDollarSign } from 'react-icons/fi';

/**
 * Reusable Feature Item with specific icon support
 */
function FeatureItem({ Icon, title, desc }) {
  return (
    <div className="flex flex-col gap-5">
      {/* ICON + TITLE */}
      <div className="flex items-center gap-3 text-[#03f8c5]">
        <div className="w-5 h-5 flex items-center justify-center">
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <span className="text-xl font-bold tracking-tight">{title}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-[15px] text-gray-400 leading-relaxed max-w-[340px]">
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseWibeex() {
  return (
    <section 
      className="w-full bg-[#010b11] flex items-center overflow-hidden"
      style={{ minHeight: "691px" }}
    >
      <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-12 lg:px-[150px]">
        
        {/* HEADER SECTION */}
        <div className="max-w-[750px]">
          <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-tight">
            Why choose Wibeex Exchange?
          </h2>

          <p className="mt-6 text-[16px] md:text-[18px] text-gray-400 leading-relaxed font-medium">
            In addition to delivering a seamless, secure, and user-friendly 
            trading experience, here are three compelling reasons to choose 
            Wibeex Exchange
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <FeatureItem
            Icon={FiArrowUpRight}
            title="Instant Transactions"
            desc="Experience lightning-fast deposits and withdrawals, ensuring your crypto trades are always timely and smooth."
          />

          <FeatureItem
            Icon={FiShield}
            title="Secure Platform"
            desc="Your assets are protected with military-grade encryption, two-factor authentication, and advanced blockchain security protocols."
          />

          <FeatureItem
            Icon={FiDollarSign}
            title="Low Fees"
            desc="Enjoy competitive trading rates with zero hidden charges, maximizing your returns on every transaction made."
          />
        </div>

      </div>
    </section>
  );
}