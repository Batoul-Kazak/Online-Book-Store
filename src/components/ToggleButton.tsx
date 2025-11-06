"use client";
import React from "react";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="bg-silver-very-dark dark:bg-gray-50 hover:bg-silver dark:hover:bg-silver-light transition-all duration-100 text-white dark:text-silver-very-dark px-8 py-2 text-xl md:text-3xl rounded-lg absolute bottom-32"
    >
      Toggle Mode
    </button>
  );
};

export default ToggleButton;
