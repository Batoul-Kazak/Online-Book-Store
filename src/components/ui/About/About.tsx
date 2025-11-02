"use client"
import Link from "next/link";
import {
    FaBook,
    FaLanguage,
    FaStickyNote,
    FaShippingFast,
    FaUsers,
} from "react-icons/fa";
const About = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-light-black">
            {/* <NavBar /> */}

            <div className="flex flex-col items-center w-full px-4 py-40 max-w-7xl">
                <div className="max-w-3xl mb-20 text-center">
                    <h1 className="mb-6 font-serif text-5xl font-bold uppercase md:text-6xl text-primary">
                        About Our Library
                    </h1>
                    <p className="text-xl leading-relaxed text-silver-light">
                        A digital sanctuary for readers, authors, and curious minds built
                        with care, one book at a time.
                    </p>
                </div>

                <div className="w-full max-w-4xl p-8 mb-20 border bg-my-black rounded-xl border-silver-dark">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-secondary">
                        Our Mission
                    </h2>
                    <p className="text-lg leading-relaxed text-silver-very-light">
                        We believe knowledge should be accessible to everyone regardless of
                        language, location, or income. That’s why we offer hundreds of{" "}
                        <span className="font-medium text-primary-normal">free books</span>,
                        support for{" "}
                        <span className="font-medium text-secondary-normal">
                            4 languages
                        </span>{" "}
                        (English, German, Arabic, Russian), and both digital and physical
                        copies so every reader can find their perfect way to read.
                    </p>
                </div>

                <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        icon={<FaBook className="text-xl text-primary-normal" />}
                        title="Free & Paid Books"
                        description="Explore hundreds of free titles or purchase premium books digital (PDF/ePub) or physical copies delivered to your door."
                    />

                    <FeatureCard
                        icon={<FaLanguage className="text-xl text-secondary-normal" />}
                        title="Multilingual Library"
                        description="Read in your preferred language. Our platform supports English, German, Arabic, and Russian with AI-assisted translations."
                    />
                    <FeatureCard
                        icon={<FaStickyNote className="text-xl text-primary-normal" />}
                        title="Personal Notes"
                        description="Take private, searchable notes on any book. Your thoughts stay synced to your profile forever."
                    />
                    <FeatureCard
                        icon={<FaShippingFast className="text-xl text-secondary-normal" />}
                        title="Global Delivery"
                        description="Love physical books? We print and ship worldwide so you can hold your next favorite read in your hands."
                    />
                    <FeatureCard
                        icon={<FaUsers className="text-xl text-primary-normal" />}
                        title="For Authors Too"
                        description="Publish your lectures, stories, or research. Connect with readers and grow your audience on a platform built for creators."
                    />
                    <FeatureCard
                        icon={<FaBook className="text-xl text-secondary-normal" />}
                        title="Smart Discovery"
                        description="Find books faster with filters by category, language, price, and format no endless scrolling."
                    />
                </div>

                <div className="w-full max-w-4xl p-8 mb-20 border bg-my-black rounded-xl border-silver-dark">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-secondary">
                        Our Story
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed text-silver-very-light">
                        In 2025, we started with a simple idea:
                        <span className="font-medium text-primary-normal">
                            {" "}
                            “What if everyone could carry a world-class library in their
                            pocket?”
                        </span>
                    </p>
                    <p className="text-lg leading-relaxed text-silver-very-light">
                        Today, our library serves readers across continents but we’re still
                        guided by that same vision. Every feature you use (notes,
                        translations, free books) was built because a real reader asked for
                        it. This isn’t just a store it’s a community of lifelong learners.
                    </p>
                </div>

                <div className="max-w-2xl text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-secondary">
                        Join Our Reading Community
                    </h2>
                    <p className="mb-8 text-silver-very-light">
                        Whether you’re here to read, write, or simply explore you belong
                        here.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/free-books"
                            className="px-6 py-3 font-medium text-white transition-opacity rounded-full bg-gradient-to-r from-primary-normal to-secondary-normal hover:opacity-90"
                        >
                            Discover Free Books
                        </Link>
                        <Link
                            href="/all-books"
                            className="px-6 py-3 font-medium transition-colors border rounded-full border-silver-light text-silver-very-light hover:bg-my-black"
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
        <div className="p-6 transition-all duration-300 border bg-gradient-to-br from-silver-very-dark/30 to-light-black/30 rounded-xl border-silver-dark hover:border-primary-normal">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-dark/20">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-secondary">{title}</h3>
            <p className="text-sm text-silver-very-light">{description}</p>
        </div>
    );
};

export default About;
