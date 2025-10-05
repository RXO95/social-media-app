// client/components/WeatherWidget.tsx

import React from 'react';

const WeatherWidget = () => {
  return (
    // Card container: Changed to w-full, added overflow-hidden
    <div className="relative h-[235px] w-full cursor-pointer rounded-[23px] p-[25px] shadow-lg transition-all duration-500 hover:scale-105 border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden">
      
      {/* Animated sun and clouds icon: Adjusted positioning */}
      <div className="absolute right-0 top-0 flex h-[200px] w-[200px] scale-90 items-center justify-center">
        {/* Cloud 1 (front) */}
        <div className="absolute z-[11] inline animate-clouds pt-[45px] pl-[25px]">
          <span className="inline-block h-[65px] w-[65px] rounded-bl-full rounded-tl-full rounded-tr-full bg-[#4c9beb]" />
          <span className="-ml-[25px] inline-block h-[45px] w-[45px] rounded-br-full rounded-tl-full rounded-tr-full bg-[#4c9beb]" />
        </div>
        {/* Sun */}
        <span className="absolute inline h-[120px] w-[120px] rounded-full bg-gradient-to-r from-[#fcbb04] to-[#fffc00] animate-sunshines" />
        <span className="absolute inline h-[120px] w-[120px] rounded-full bg-gradient-to-r from-[#fcbb04] to-[#fffc00]" />
        {/* Cloud 2 (back) */}
        <div className="absolute z-[12] -mt-[30px] ml-[150px] animate-clouds-slow">
          <span className="inline-block h-[50px] w-[60px] rounded-bl-full rounded-tl-full rounded-tr-full bg-[#4c9beb]" />
          <span className="-ml-[25px] inline-block h-[50px] w-[40px] rounded-br-full rounded-tl-full rounded-tr-full bg-[#4c9beb]" />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col gap-[10px]">
        <span className="text-[15px] font-extrabold text-white/70">
          Bangalore, Karnataka
        </span>
        <span className="text-[15px] font-bold text-white/50">
          October 5th
        </span>
      </div>
      <span className="absolute bottom-[12px] left-[25px] z-20 text-6xl font-bold text-white">
        23°
      </span>
      <div className="absolute bottom-[25px] right-[25px] z-20 flex h-[36px] w-[80px] items-center justify-center rounded-[9px] bg-black/10">
        <span className="text-[13px] font-bold text-white/70">Celsius</span>
      </div>
    </div>
  );
};

export default WeatherWidget;