import { motion } from "framer-motion";

export function History() {
  return (
    <div>
      <div className="flex justify-center h-screen bg-slate-950">
      <div className="text-center">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-10 bg-gradient-to-b from-orange-500 to-amber-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        History & Legacy
      </motion.h1>
      <div className=" text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia magni, laboriosam cum accusamus voluptatibus tempore aspernatur nemo harum distinctio dolor magnam officiis quasi incidunt! Earum recusandae deserunt repellat itaque?</div>
      </div>
    </div>
    </div>
  );
}
