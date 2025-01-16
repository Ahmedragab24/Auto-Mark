import React from "react";
import Image from "next/image";
import HeroFiltering from "../HeroFiltering";

export function HeroSection() {
  return (
    <div className="relative flex flex-col gap-8 px-8 md:pt-20 py-8 justify-between w-full mt-10 overflow-hidden h-auto md:h-[500px] rounded-2xl">
      {/* Background Image */}
      <Image
        src="/Images/hero-bg.jpg"
        alt="Jeep in desert"
        fill
        className="object-cover"
        priority
      />

      {/* Hero Text */}
      <div className="relative z-10 text-right text-white">
        <h1 className="max-w-2xl mb-4 text-2xl font-normal !leading-tight md:text-5xl">
          منصتك المجانيه لبيع وشراء السيارات بسهولة
        </h1>
        <p className="text-sm md:text-lg opacity-90">
          اكتشف سيارات مستعملة وموثوقة، قارن الأسعار،
          <br />
          وتواصل مباشرة مع البائعين بسهولة وأمان.
        </p>
      </div>

      {/* Filter Bar */}
      <HeroFiltering />
    </div>
  );
}
