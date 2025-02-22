import React from 'react';
import { Card } from './Card';
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DynoChart from './DynoChart';
import { MdOutlineRadioButtonChecked } from "react-icons/md";


const PerformanceSection = () => {
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
        <section className="bg-black text-white overflow-hidden">
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
                        Performance & Engine Specs
                        <span
                            className=" hidden md:block absolute top-0 left-1 w-full h-full bg-gradient-to-b from-orange-500 to-amber-200 bg-clip-text text-transparent"
                            style={{
                                WebkitTextFillColor: "transparent",
                                transformOrigin: "center",
                            }}
                        >
                            Performance & Engine Specs
                        </span>
                    </motion.h1>
                    <div className="bg-amber-400 w-[15px] h-[15px] rounded-full mt-5 md:mt-2"></div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-center md:text-start text-sm md:text-base max-w-full md:max-w-[50%]">
                    Unleashing Precision and Power: A Deep Dive into Performance & Engine Specs.
                </p>
            </motion.div>
            <div className="container mx-auto mt-20 px-10">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-8 gap-4">
                    {/* Left Column: Key Specs */}
                    <div className="col-span-1 sm:col-span-2 sm:row-span-4 bg-gray-900 p-6 rounded-xl shadow-[0_8px_24px_rgb(0_0_0/0.5)] relative overflow-hidden">
                        {/* Gradient Overlay for Rotary Flair */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-transparent pointer-events-none" />

                        {/* Content */}
                        <div className="relative">
                            <p className="text-lg text-gray-300 mb-4 flex items-center gap-2">
                                <span className="text-orange-400">📌</span>
                                <span className="font-semibold text-white">Pure Rotary Power.</span>
                                <span className="text-gray-400">Unmatched Performance.</span>
                            </p>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4">
                                    🛠️ Key Specifications (FD3S RX-7)
                                </h3>
                                <ul className="space-y-3">
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">Engine:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">1.3L Twin-Rotor 13B-REW</span>
                                    </li>
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">Turbo:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">Twin-Turbocharged</span>
                                    </li>
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">Power Output:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">276 HP <span className="text-sm opacity-75">(officially, likely ~290 HP)</span></span>
                                    </li>
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">Torque:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">231 lb-ft</span>
                                    </li>
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">0-100 km/h:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">~5.1 seconds</span>
                                    </li>
                                    <li className="group flex items-start gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:pl-2 rounded-md py-1">
                                        <span className="text-orange-500 group-hover:text-orange-400"><MdOutlineRadioButtonChecked className=' text-lg mt-1' /></span>
                                        <span className="font-medium text-white">Weight:</span>
                                        <span className="text-gray-300 group-hover:text-orange-400">~1,250 kg</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Animations (Card) */}
                    <div className="col-span-1 sm:col-span-2 sm:row-span-4 sm:col-start-3 mt-14">
                        <Card />
                    </div>

                    {/* Dyno Chart Section */}
                    <div className="col-span-1 sm:col-span-4 sm:row-span-13 sm:row-start-5">
                        {/* Dyno Chart Animation Placeholder */}
                        <DynoChart />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceSection;