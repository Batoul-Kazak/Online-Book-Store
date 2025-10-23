"use client";
import DarkPng from "@/app/assets/website/dark-mode-button.png";
import LightPng from "@/app/assets/website/light-mode-button.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <Image
        src={LightPng}
        alt="Switch to dark mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <Image
        src={DarkPng}
        alt="Switch to light mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          theme === "light" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
