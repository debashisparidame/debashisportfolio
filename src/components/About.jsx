import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { assets, toolsData } from "../../assets/assets";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  const aboutRef = useRef(null);

  // Updated info cards to match your expertise
  const infoList = [
    {
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
      title: "Full Stack",
      description:
        "MERN stack & Spring Boot with expertise in scalable web applications",
    },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      title: "Education",
      description:
        "MCA graduate from KIIT University with focus on software engineering",
    },
    {
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
      title: "Projects",
      description: "Career Connect job portal, e-commerce platforms, and more",
    },
  ];

  // Handle URL hash change to properly scroll to this section
  useEffect(() => {
    if (window.location.hash === "#about") {
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  return (
    <motion.div
      id="about"
      ref={aboutRef}
      className={`w-full px-5 md:px-[8%] lg:px-[12%] py-16 scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center mb-0.5 text-lg font-Ovo ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-4xl md:text-5xl font-Ovo font-semibold mb-4 md:mb-6 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-12 my-4 md:my-6 lg:my-8"
      >
        {/* Image container - much larger on mobile, same size on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-60 sm:w-40 md:w-52 rounded-3xl max-w-none relative"
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-3xl shadow-lg"
            priority
          />
          <div
            className={`absolute -z-10 -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full rounded-3xl border-2 ${
              isDarkMode ? "border-purple-500/30" : "border-rose-200"
            }`}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1"
        >
          <p
            className={`mb-4 md:mb-6 max-w-2xl font-Ovo text-base leading-relaxed ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            MCA graduate from KIIT University with a passion for web development.
            I specialize in both MERN stack and Spring Boot development, creating
            responsive and secure applications with modern technologies like React.js,
            Node.js, and Java.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.03 }}
                className={`border-[0.5px] rounded-xl p-3 md:p-4 cursor-pointer duration-300 
                  ${
                    isDarkMode
                      ? "border-white/30 hover:bg-[#2a004a]/50 hover:shadow-[3px_3px_0] hover:shadow-white/50"
                      : "border-gray-400 hover:bg-[#fcf4ff] hover:shadow-[3px_3px_0_#000]"
                  } hover:-translate-y-1`}
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-5 md:w-6 mt-1 md:mt-1.5"
                />
                <h3
                  className={`my-2 md:my-2.5 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-xs md:text-sm ${
                    isDarkMode ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`my-3 md:my-4 font-Ovo ${
              isDarkMode ? "text-white/80" : "text-gray-700"
            }`}
          >
            Technologies I Work With
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 md:gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={`flex items-center justify-center w-10 sm:w-11 md:w-12 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 duration-300
                  ${
                    isDarkMode
                      ? "border-white/30 bg-[#1a0030]/30"
                      : "border-gray-400 bg-white/70"
                  }`}
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-5 md:w-6" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
