"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // UseInView for the title section
  const { ref: ref2, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Changed to slide from right only
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1, delay: 0.3 }, // Reduced delay for smoother entry
    },
  };

  return (
    <div
      className="w-full overflow-hidden bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Title Section */}
      <motion.div
        ref={ref2}
        variants={cardVariants}
        initial="hidden"
        animate={titleInView ? "show" : "hidden"}
        className="max-w-7xl pt-20 px-4 md:px-8 lg:px-10"
      >
        <div className="flex justify-center md:justify-start md:items-center gap-2 max-w-4xl">
          <motion.h1
            className=" text-3xl md:text-5xl tracking-wider font-bold mb-4 text-white pb-3 relative inline-block"
            variants={cardVariants}
            initial="hidden"
            animate={titleInView ? "show" : "hidden"}
          >
            History & Legacy
            <span
              className=" hidden md:block absolute top-0 left-1 w-full h-full bg-gradient-to-b from-orange-500 to-amber-200 bg-clip-text text-transparent"
              style={{
                WebkitTextFillColor: "transparent",
                transformOrigin: "center",
              }}
            >
              History & Legacy
            </span>
          </motion.h1>
          <div className="bg-amber-400 w-[15px] h-[15px] rounded-full mt-5 md:mt-2"></div>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 text-center md:text-start text-sm md:text-base max-w-full md:max-w-[50%]">
          Since 1978, the Mazda RX-7 has thrilled enthusiasts as a pioneering rotary-powered sports car, leaving a lasting mark on streets and tracks.
        </p>
      </motion.div>

      {/* Timeline Items */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const { ref: itemRef, inView: itemInView } = useInView({
            triggerOnce: true, // Trigger once
            threshold: 0.3, // Trigger when 30% of the item is visible
          });

          return (
            <motion.div
              ref={itemRef} // Attach ref to each item
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={itemInView ? "show" : "hidden"}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 shadow-[0_0_10px_#ffffff,0_0_5px_#ff8c00,0_0_5px_#ff4500]" />
                </div>
                <h3 className="hidden py-2 md:block text-xl md:pl-20 md:text-5xl font-bold bg-gradient-to-b from-orange-400 to-amber-200 bg-clip-text text-transparent">
                  {item.title}
                </h3>
              </div>
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content} {/* This will animate with the parent motion.div */}
              </div>
            </motion.div>
          );
        })}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-amber-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};