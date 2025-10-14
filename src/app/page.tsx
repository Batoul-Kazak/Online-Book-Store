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
import BookSearch from "@/app/components/BookSearch/BookSearch";
import Link from "next/link";

const Home = () => {
  // function handleOrderPopUp() {}

  return (
    <ThemeProvider attribute="class">
      <ToggleButton />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <NavBar />
        <HeroSection />
        <Link
          href="/rich-text-editor"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Your Blog
        </Link>
        <BookSearch />
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
