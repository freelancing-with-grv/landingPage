import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  
  return (
    <>
    
      <div  className="textstructure h-[50vh] mt-40 px-20">
        {["We Create", "Eye-Opening", "PRESENTATIONS"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-end">
              {index === 1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:3}} className="w-[9vw] rounded-md mr-[0.3vw] bg-red-500 h-[5.4vw]"></motion.div>}

              {/*font-['Founders_Grotesk_X_Condensed_Light']*/}
              <h1 className="text-[7.5vw] uppercase leading-[6vw]  tracking-tighter font-medium ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-2 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md rounded-full">
            <p>START THE PROJECT</p>
          </div>
          <div className="h-10 w-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
