"use client";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import BestBooks from "./BestBooks/BestBooks";
import { ThemeProvider } from "next-themes";
import ToggleButton from "./components/ToggleButton";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // function handleOrderPopUp() {}

  return (
    <ThemeProvider attribute="class">
      <ToggleButton />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <NavBar />
        <HeroSection />
        <BestBooks />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
