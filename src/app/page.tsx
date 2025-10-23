"use client";
import React, { useContext, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import BestBooks from "./components/BestBooks/BestBooks";
import { ThemeProvider } from "next-themes";
import ToggleButton from "./components/ToggleButton";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import FreeBooks from "./components/FreeBooks/FreeBooks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentBooks from "./components/RecentBooks/RecentBooks";
import Link from "next/link";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import BookSearch from "./components/BookExplorer/BookSearch";
import AddToCartPopup from "./components/AddToCartPopup/AddToCartPopup";
import { allBooks, mockUsers } from "@/app/lib/index";
import { AppContext } from "@/app/context/AppContext";
import SignUpPopup from "./components/RegistrationPopup/SingUpPopup/SingUpPopup";
import LoginPopup from "./components/RegistrationPopup/LoginPopup/LoginPopup";

const Home = () => {
  const { showAddToCartPopup, showSignUpPopup, showLoginPopup } =
    useContext(AppContext);

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
    <div className="bg-light-black dark:text-white duration-200">
      {showAddToCartPopup && <AddToCartPopup />}
      {showSignUpPopup && <SignUpPopup />}
      {showLoginPopup && <LoginPopup />}
      {/* <SignUpPopup /> */}
      <NavBar />
      <HeroSection />

      <BookSearch />
      <BestBooks />
      <RecentBooks />
      <Banner />
      <AppStoreBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
