"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import BookSearch from "@/components/books/BookExplorer/BookSearch";
import BestBooks from "@/components/books/BestBooks/BestBooks";
import RecentBooks from "@/components/books/RecentBooks/RecentBooks";
import Banner from "@/components/ui/Banner/Banner";
import AppStoreBanner from "@/components/ui/AppStoreBanner/AppStoreBanner";
import Testimonial from "@/components/ui/Testimonial/Testimonial";

const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="duration-200 bg-light-black dark:text-white">
      <HeroSection />
      <BookSearch />
      <BestBooks />
      <RecentBooks />
      <Banner />
      <AppStoreBanner />
      <Testimonial />
    </div>
  );
};

export default Home;
