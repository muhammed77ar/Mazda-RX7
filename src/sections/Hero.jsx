"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";
import Navbar from "./Navbar";
import { useRef } from "react";

export default function Hero() {
  const images = [
    "../images/f30ee03d6ab77e0dc1b27eb6ee284fb0.jpg",
    "../images/294530.jpg",
    "../images/yellow-mazda-rx-7-long-exposure-uanzsi6t50esf4k4.jpg",
  ];
  // Create a reference to the audio element
  const audioRef = useRef(null);

  // Function to play the car sound
  const playCarSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <>
      <Navbar />
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="flex flex-col font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            <h1 className="mb-3 text-4xl sm:text-5xl md:text-6xl">
              Feel the Legend. Drive the{" "}
              <span className="bg-gradient-to-b from-orange-500 to-amber-300 bg-clip-text text-transparent font-extrabold">
                RX-7
              </span>
            </h1>
            <span className="text-xl sm:text-2xl md:text-3xl">
              A timeless masterpiece of performance and design,
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl">
              powered by the legendary rotary engine.
            </span>
          </motion.p>
          <button onClick={playCarSound} className="relative font-semibold cursor-pointer z-0 h-12 mt-4 rounded-full backdrop-blur-sm border bg-orange-500/10 border-orange-500/20 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-gradient-to-r after:from-orange-500 after:to-amber-300 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
          Explore Now
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <audio ref={audioRef} src="../sounds/250942__pmartinez13__car-engine.wav" preload="auto" />
      <div className=" absolute xs:bottom-3 bottom-10 w-full flex justify-center items-center">
            <a href="#about">
              <div className=" w-[35px] h-[64px] text-white rounded-full border-2 flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [3, 22, 3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className=" border-[8px] rounded-full"
                />
              </div>
            </a>
          </div>
    </>
  );
}