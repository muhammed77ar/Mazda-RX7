import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    (<WavyBackground className="w-full h-full flex items-center justify-center flex-col pb-11">
      <div className=" w-full bg-white h-[70px] z-20">hello</div>
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p
        className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>)
  );
}
