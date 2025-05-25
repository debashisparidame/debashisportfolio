"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Force light mode as default to prevent flash
  useEffect(() => {
    // Set white background immediately to prevent black flash
    document.documentElement.style.backgroundColor = "#ffffff";
    document.documentElement.style.color = "#000000";

    setMounted(true);

    // Use try-catch to handle potential localStorage errors
    try {
      // Only set dark mode if explicitly saved
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    } catch (e) {
      setIsDarkMode(false); // Default to light mode if error
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Disable transitions temporarily
    document.documentElement.classList.add("disable-transitions");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      document.documentElement.style.backgroundColor = "#11001F";
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      document.documentElement.style.backgroundColor = "#ffffff";
      localStorage.theme = "light"; // Explicitly save as light
    }

    // Re-enable transitions after theme is applied
    setTimeout(() => {
      document.documentElement.classList.remove("disable-transitions");
    }, 100);
  }, [isDarkMode, mounted]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
