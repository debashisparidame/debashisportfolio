import React from "react";
import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" 
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}
      >
        What I offer
      </motion.h4>
      
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        My Services
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}
      >
        Here are some of the services I provide:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, iconDark, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`border rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 flex flex-col items-center text-center cursor-pointer ${
              isDarkMode 
                ? 'border-white/30 hover:bg-[#2a004a] hover:shadow-[4px_4px_0] hover:shadow-white/50' 
                : 'border-gray-400 hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]'
            }`}
          >
            <Image 
              src={isDarkMode && iconDark ? iconDark : icon} 
              alt="" 
              className="w-10" 
            />
            <h3 className={`text-lg my-4 font-medium ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            }`}>
              {title}
            </h3>
            <p className={`text-sm leading-5 ${
              isDarkMode ? 'text-white/80' : 'text-gray-600'
            }`}>
              {description}
            </p>
            <a 
              href={link} 
              className={`flex items-center gap-2 text-sm mt-5 ${
                isDarkMode ? 'text-purple-300 hover:text-purple-200' : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Read more{" "}
              <Image 
                alt="" 
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
                className="w-4" 
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
