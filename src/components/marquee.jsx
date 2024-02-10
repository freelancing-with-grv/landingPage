import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full mt-32 relative z-10 py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]">
      <div className="flex whitespace-nowrap overflow-hidden text border-t-2 border-b-2 border-zinc-300">
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }} 
          className="text-[22vw] font-extrabold uppercase mb-6 leading-none mx-2"
        >
          We are freelancers
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }} 
          className="text-[22vw] font-extrabold uppercase mb-6 leading-none mx-2"
        >
          We are freelancers
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
