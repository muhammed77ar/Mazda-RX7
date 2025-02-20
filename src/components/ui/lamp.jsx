// src/components/ui/lamp.js
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const LampContainer = ({ children, className }) => {
  const [dynamicWidth, setDynamicWidth] = useState('20rem');

  useEffect(() => {
    // Example: Change width after some condition or interaction
    // This is just a placeholder; replace with your logic
    const changeWidth = () => {
      setDynamicWidth('20rem');
    };
    
    // You might want to trigger this on an event or condition
    // For demonstration, it's set to trigger after 3 seconds
    setTimeout(changeWidth, 3000);
  }, []);

  return (
    <div
      className={cn(
        "relative flex pt-[160px] md:pt-[150px] flex-col items-center justify-center overflow-hidden  bg-slate-950 w-full z-0",
        className
      )}>
      <div className="relative flex w-full flex-1 scale-y-75 items-center justify-center isolate z-0 ">
        {/* Left side of the glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 md:h-64 overflow-visible w-[30rem] md:w-[35rem] bg-gradient-conic from-orange-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 md:h-48 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 md:w-48 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        {/* Right side of the glow */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 md:h-64 w-[30rem] md:w-[35rem] bg-gradient-conic from-transparent via-transparent to-orange-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div className="absolute w-40 md:w-48 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 md:h-48 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/* Blur and glow effects */}
        <div className="absolute top-1/2 h-48 md:h-56 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 md:h-56 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 md:h-44 w-[28rem] md:w-[32rem] -translate-y-1/2 rounded-full bg-orange-500 opacity-50 blur-3xl"></div>
        {/* Horizontal bar */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 md:h-44 w-64 md:w-72 -translate-y-[4rem] rounded-full bg-amber-300 blur-2xl">
        </motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: dynamicWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={`absolute inset-auto z-50 h-0.5 w-[${dynamicWidth}] -translate-y-[9rem] bg-amber-300 `}>
        </motion.div>

        <div className="absolute inset-auto z-40 h-44 md:h-52 w-full -translate-y-[15.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex flex-col items-center -translate-y-[110px] md:-translate-y-[100px]">
        {children}
      </div>
    </div>
  );
};