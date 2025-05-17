import React from "react";
import { workData, assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = (isDarkMode) => {
  return (
    <motion.div
    initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1}}
      id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">My Portfolio</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">My latest work</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here are some of the projects I have worked on:
      </motion.p>

      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-10 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-9/12 rounded-md absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 py-1.5 sm:py-2 px-2 sm:px-3 flex items-center justify-between text-xs sm:text-sm md:text-base duration-300 group-hover:bottom-5 sm:group-hover:bottom-7 shadow-sm">
              <div className="overflow-hidden max-w-[80%]">
                <h2 className="font-semibold text-xs sm:text-sm truncate">{project.title}</h2>
                <p className="text-gray-700 text-xs truncate">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  width={16}
                  height={16}
                  className="w-4 sm:w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.5, delay: 1.1 }}
        href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]">
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
      </motion.a>

    </motion.div>
  );
};

export default Work;
