import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      id: " History&Legacy",
      title: "History & Legacy",
    },
    {
      id: "Performance&Engine Specs",
      title: "Performance & Engine Specs",
    },
    {
      id: "Design&Aerodynamics",
      title: "Design & Aerodynamics",
    },
    {
      id : "SoundExperience",
      title : "Sound Experience"
    },
    {
      id : "RX-7inPopCulture&Motorsport",
      title : "RX-7 in Pop Culture & Motorsport"
    },
    {
        id : "Pricing&Availability",
        title : "Pricing & Availability"
      },

  ];

  const hideNavItemsVariant = {
    opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
  };

  const mobileMenuVariant = {
    opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
    closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } },
  };

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
  };

  const liVariant = {
    opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
  };




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`overflow-hidden bg-transparent text-white`}>
      <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"}
        className={`fixed top-0 w-full z-50 px-6 py-3 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"
          } flex justify-between items-center`}>
        <div className="overflow-hidden">
          <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
            <Link to={"/"}
              className=" flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0)
              }}>
              {/* <img src={logo} alt="Logo" className="w-14 h-14 object-conatine" /> */}
              <p className="text-white text-[18px] font-bold cursor-pointer">MRX-7</p>
            </Link>
          </motion.h>
        </div>
        <div className="overflow-hidden flex justify-center items-center gap-4">
          <motion.div variants={hideNavItemsVariant} onClick={() => setMobileNavOpen(true)} className="uppercase text-xs cursor-pointer">
            <IoMenu className="text-4xl bg-gray-500 p-0 m-0 rounded-full focus:outline-none bg-gradient-to-r from-orange-600 to-amber-500" />
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="fixed top-0 left-0 h-screen w-full flex flex-col text-center items-center bg-black z-50">
          <motion.button variants={fadeInVariant} onClick={() => setMobileNavOpen(false)} className="self-end px-4 py-4 text-white uppercase text-xs">
            <IoClose className="text-4xl bg-gray-500 p-0 m-0 rounded-full focus:outline-none bg-gradient-to-r from-orange-600 to-amber-500" />
          </motion.button>
          <motion.ul variants={ulVariant} className="mt-10 list-none">
            {navLinks.map((link) => (
              <motion.li whileTap={{ scale: 0.95 }} key={link.id} variants={liVariant} className="my-5">
                <motion.a href={`#${link.id}`} onClick={() => setMobileNavOpen(false)} className="text-4xl capitalize text-center cursor-pointer hover:italic">{link.title}</motion.a>
              </motion.li>
            ))}
          </motion.ul>
          {/* <motion.div variants={fadeInVariant} className="mt-16 flex flex-col justify-center items-center gap-2">
          </motion.div> */}
        </motion.div>
      </motion.nav>
    </div>
  )
}


