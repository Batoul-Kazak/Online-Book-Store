"use client";

import Link from "next/link";
import {
  FaBook,
  FaLanguage,
  FaStickyNote,
  FaShippingFast,
  FaUsers,
} from "react-icons/fa";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-light-black">
      {/* <NavBar /> */}

      <div className="flex flex-col items-center py-40 px-4 w-full max-w-7xl">
        <div className="text-center max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold uppercase font-serif text-primary mb-6">
            About Our Library
          </h1>
          <p className="text-xl text-silver-light leading-relaxed">
            A digital sanctuary for readers, authors, and curious minds built
            with care, one book at a time.
          </p>
        </div>

        <div className="w-full max-w-4xl bg-my-black p-8 rounded-xl border border-silver-dark mb-20">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-silver-very-light text-lg leading-relaxed">
            We believe knowledge should be accessible to everyone regardless of
            language, location, or income. That’s why we offer hundreds of{" "}
            <span className="text-primary-normal font-medium">free books</span>,
            support for{" "}
            <span className="text-secondary-normal font-medium">
              4 languages
            </span>{" "}
            (English, German, Arabic, Russian), and both digital and physical
            copies so every reader can find their perfect way to read.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
          <FeatureCard
            icon={<FaBook className="text-primary-normal text-xl" />}
            title="Free & Paid Books"
            description="Explore hundreds of free titles or purchase premium books digital (PDF/ePub) or physical copies delivered to your door."
          />

          <FeatureCard
            icon={<FaLanguage className="text-secondary-normal text-xl" />}
            title="Multilingual Library"
            description="Read in your preferred language. Our platform supports English, German, Arabic, and Russian with AI-assisted translations."
          />
          <FeatureCard
            icon={<FaStickyNote className="text-primary-normal text-xl" />}
            title="Personal Notes"
            description="Take private, searchable notes on any book. Your thoughts stay synced to your profile forever."
          />
          <FeatureCard
            icon={<FaShippingFast className="text-secondary-normal text-xl" />}
            title="Global Delivery"
            description="Love physical books? We print and ship worldwide so you can hold your next favorite read in your hands."
          />
          <FeatureCard
            icon={<FaUsers className="text-primary-normal text-xl" />}
            title="For Authors Too"
            description="Publish your lectures, stories, or research. Connect with readers and grow your audience on a platform built for creators."
          />
          <FeatureCard
            icon={<FaBook className="text-secondary-normal text-xl" />}
            title="Smart Discovery"
            description="Find books faster with filters by category, language, price, and format no endless scrolling."
          />
        </div>

        <div className="w-full max-w-4xl bg-my-black p-8 rounded-xl border border-silver-dark mb-20">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
            Our Story
          </h2>
          <p className="text-silver-very-light text-lg leading-relaxed mb-4">
            In 2025, we started with a simple idea:
            <span className="text-primary-normal font-medium">
              {" "}
              “What if everyone could carry a world-class library in their
              pocket?”
            </span>
          </p>
          <p className="text-silver-very-light text-lg leading-relaxed">
            Today, our library serves readers across continents but we’re still
            guided by that same vision. Every feature you use (notes,
            translations, free books) was built because a real reader asked for
            it. This isn’t just a store it’s a community of lifelong learners.
          </p>
        </div>

        <div className="text-center max-w-2xl">
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
            Join Our Reading Community
          </h2>
          <p className="text-silver-very-light mb-8">
            Whether you’re here to read, write, or simply explore you belong
            here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-books"
              className="bg-gradient-to-r from-primary-normal to-secondary-normal text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Discover Free Books
            </Link>
            <Link
              href="/all-books"
              className="border border-silver-light text-silver-very-light px-6 py-3 rounded-full font-medium hover:bg-my-black transition-colors"
            >
              Browse All Books
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gradient-to-br from-silver-very-dark/30 to-light-black/30 p-6 rounded-xl border border-silver-dark hover:border-primary-normal transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary-dark/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-silver-very-light text-sm">{description}</p>
    </div>
  );
};

export default About;
