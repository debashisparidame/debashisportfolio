import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = ["Debashis Parida🚀", "Code With Deb👨‍💻"];
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check and cleanup
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle between logos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev === 0 ? 1 : 0));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Header Background Color"
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white dark:bg-[#11001F] shadow-md dark:shadow-white/5"
            : "bg-transparent dark:bg-transparent"
        }`}
        style={{
          backgroundColor: isScroll && !isDarkMode ? "#FFFFFF" : "",
        }}
      >
        {/* Animated text logo */}
        <a
          href="#top"
          className="relative h-10 flex items-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentLogo}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`font-Ovo font-bold text-xl whitespace-nowrap ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {logos[currentLogo]}
            </motion.span>
          </AnimatePresence>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? "bg-white/90 shadow-sm text-black dark:bg-transparent dark:text-white"
              : "bg-white/70 shadow-sm text-gray-900 dark:border dark:border-white/50 dark:bg-[#11001F]/30 dark:text-white"
          }`}
        >
          <li>
            <a
              className={`font-Ovo transition-colors ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : isScroll
                  ? "text-black hover:text-gray-800"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : isScroll
                  ? "text-black hover:text-gray-800"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : isScroll
                  ? "text-black hover:text-gray-800"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : isScroll
                  ? "text-black hover:text-gray-800"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : isScroll
                  ? "text-black hover:text-gray-800"
                  : "text-gray-900 hover:text-gray-700"
              }`}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme toggle button with proper icon */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="transition-transform hover:scale-110 duration-300"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Light mode" : "Dark mode"}
              className="w-6 cursor-pointer"
            />
          </button>

          {/* Contact button with theme-specific styling */}
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo transition-all duration-300 ${
              isDarkMode
                ? "text-white border-white/50 hover:bg-white/10"
                : "text-gray-900 border-gray-500 hover:bg-gray-50"
            }`}
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow"
              className="w-3"
            />
          </a>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3 transition-transform hover:scale-110 duration-300"
            onClick={openMenu}
            aria-label="Open mobile menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
            isDarkMode ? "bg-[#2a004a] text-white" : "bg-rose-50 text-gray-900"
          }`}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer transition-transform hover:scale-110 duration-300"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
