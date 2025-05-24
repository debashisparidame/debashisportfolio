import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  // Role typing animation state
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Developer roles with emojis - updated to match your specific expertise
  const roles = [
    "Full Stack Developer 🚀",
    "MERN Stack Developer 💻",
    "Spring Boot Developer 🍃",
    "Frontend Specialist 🎨",
    "Backend Engineer 🛠️",
    "API Developer🔌",
    "React.js Developer ⚛️"
  ];
  
  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    // Set typing speed based on action (typing or deleting)
    const typingSpeed = isDeleting ? 50 : 100;
    
    // If we're typing
    if (!isDeleting && displayedText.length < currentRole.length) {
      // Add next character
      const timeoutId = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } 
    
    // If we're deleting
    else if (isDeleting && displayedText.length > 0) {
      // Remove last character
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } 
    
    // Pause after typing full text
    else if (!isDeleting && displayedText === currentRole) {
      // Wait before starting to delete
      const timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
    
    // Move to next role after deleting
    else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % roles.length);
      
      // Brief pause before starting the next word
      const timeoutId = setTimeout(() => {
        setIsTyping(true);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, isDeleting, currentIndex, roles]);
  
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Debashis Parida{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      {/* Animated role text with cursor */}
      <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`text-3xl sm:text-5xl lg:text-[60px] font-Ovo relative ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <span>{displayedText}</span>
        <span className={`inline-block w-[2px] h-[1em] ml-1 align-middle ${
          isDarkMode ? "bg-white" : "bg-black"
        } animate-pulse`}></span>
      </motion.h1>
      
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`max-w-2xl mx-auto font-Ovo text-base md:text-lg ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        MCA graduate from KIIT University specializing in MERN stack and Spring Boot development. 
        I build responsive, scalable web applications with modern technologies and 
        best practices.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className={`px-10 py-3 border rounded-full flex items-center gap-2 ${
            isDarkMode ? "border-white text-white hover:bg-white/10" : "border-white bg-black text-white hover:bg-gray-900"
          }`}
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="../sample-resume.pdf"
          download
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors ${
            isDarkMode ? "border-white text-black bg-white hover:bg-gray-100" : "border-gray-500 bg-white hover:bg-gray-50"
          }`}
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
