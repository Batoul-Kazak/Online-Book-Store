// "use client";
// import React, { useState, useEffect } from "react";
// import DarkPng from "@/app/assets/website/dark-mode-button.png";
// import LightPng from "@/app/assets/website/light-mode-button.png";
// import Image from "next/image";

// const DarkMode = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );
//   const element = document.documentElement;

//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);
//   return (
//     <>
//       <div className="relative ">
//         <Image
//           src={LightPng}
//           alt="dark"
//           onClick={() =>
//             setTheme((data) => (data === "dark" ? "light" : "dark"))
//           }
//           className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
//             theme === "dark" ? "opacity-0" : "opacity-100"
//           } `}
//         />
//         <Image
//           src={DarkPng}
//           alt="dark"
//           onClick={() =>
//             setTheme((data) => (data === "dark" ? "light" : "dark"))
//           }
//           className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
//         />
//       </div>
//     </>
//   );
// };

// export default DarkMode;

// components/DarkMode.jsx
"use client";
import { useState, useEffect } from "react";
import DarkPng from "@/app/assets/website/dark-mode-button.png";
import LightPng from "@/app/assets/website/light-mode-button.png";
import Image from "next/image";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Apply theme immediately
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative">
      <Image
        src={LightPng}
        alt="Switch to dark mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <Image
        src={DarkPng}
        alt="Switch to light mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          theme === "light" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
