import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  // Updated workData with direct image URLs instead of asset references
  const workData = [
    {
      title: "Career Connect",
      description: "Job portal with MERN stack",
      bgImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/yourusername/career-connect"
    },
    {
      title: "E-Commerce Platform",
      description: "Shopping platform with Spring Boot",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Portfolio Website",
      description: "React.js & Tailwind CSS",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/yourusername/portfolio-website"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast with React.js",
      bgImage: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
      link: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1}}
      id="work" 
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
    >
      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}
      >
        My Portfolio
      </motion.h4>
      
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${
          isDarkMode ? 'text-gray-200' : 'text-gray-600'
        }`}
      >
        Here are some of the projects I have worked on:
      </motion.p>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ 
              backgroundImage: `url(${project.bgImage})`,
              backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5'  
            }}
          >
            <div className={`${
              isDarkMode 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-900'
              } w-9/12 rounded-md absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 py-1.5 sm:py-2 px-2 sm:px-3 flex items-center justify-between text-xs sm:text-sm md:text-base duration-300 group-hover:bottom-5 sm:group-hover:bottom-7 shadow-sm`}>
              <div className="overflow-hidden max-w-[80%]">
                <h2 className="font-semibold text-xs sm:text-sm truncate">{project.title}</h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs truncate`}>
                  {project.description}
                </p>
              </div>
              <div className={`border rounded-full w-9 aspect-square flex items-center justify-center transition ${
                isDarkMode
                  ? 'border-white shadow-[2px_2px_0_rgba(255,255,255,0.5)] group-hover:bg-purple-700'
                  : 'border-black shadow-[2px_2px_0_#000] group-hover:bg-lime-300'
              }`}>
                <Image
                  src={isDarkMode ? assets.send_icon_white || assets.send_icon : assets.send_icon}
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
      
      <div className="text-center mt-8">
        <motion.a
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 1 }}
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border ${
            isDarkMode
              ? 'border-white/50 hover:bg-white/10 text-white'
              : 'border-gray-400 hover:bg-gray-100 text-gray-800'
          }`}
        >
          View More On GitHub
          <Image
            src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
            alt="right arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Work;
