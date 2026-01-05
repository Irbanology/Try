import React from 'react';
// Using the path shown in your file explorer
import FeaturesCoinImage from '../asset_svg/Features_coin_image.png';

/**
 * Features Component
 * Dimensions: 1920x851
 * Background: #010b11
 */
const Features = () => {
  const featureList = [
    {
      title: "Spot Trading",
      description: "Buy and sell crypto instantly at live market rates with secure, seamless execution and ownership."
    },
    {
      title: "Transaction",
      description: "Track every trade, deposit, withdrawal in real time with clear records."
    },
    {
      title: "Launchpad",
      description: "Discover and invest early in the next wave of crypto innovation."
    },
    {
      title: "Referral",
      description: "Invite friends to WibeeX and earn rewards every time they trade on the platform."
    },
    {
      title: "On/Off Ramp",
      description: "Seamlessly convert fiat to crypto and back fast, secure, and compliant."
    }
  ];

  return (
    <section className="relative w-full h-[851px] bg-[#010b11] overflow-hidden flex items-center">
      
      <div className="container mx-auto px-6 lg:px-[150px] z-10">
        {/* Max width set to 772px per Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[80px] gap-y-[60px] max-w-[772px]">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 ${index === 4 ? 'lg:col-span-2' : ''}`}
            >
              {/* Title: 26px, 600 weight, line-height 1.2 */}
              <h3 className="text-[#03f8c5] text-[26px] font-semibold tracking-tight leading-[1.2]">
                {feature.title}
              </h3>
              {/* Description: 16px, 600 weight, max-w 292px */}
              <p className="text-gray-400 text-[16px] font-semibold leading-[1.2] max-w-[292px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Coins - Positioned absolutely to the right */}
      <div className="absolute top-0 right-[-50px] w-1/2 h-full pointer-events-none flex items-center justify-end">
          <img 
            src={FeaturesCoinImage} 
            alt="Decorative Coins" 
            className="w-[110%] h-auto object-contain animate-subtle-float"
            style={{ filter: 'drop-shadow(0 0 40px rgba(3,248,197,0.15))' }}
          />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#03f8c5]/10 blur-[150px] rounded-full" />
      </div>
    </section>
  );
};

export default Features;