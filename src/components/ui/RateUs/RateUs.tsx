"use client";

import { useEffect, useState } from "react";
import {
    FaStar,
    FaRegStar,
    FaHeart,
    FaBook,
    FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import { JSX } from "react";

type ReviewCategory = {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
};

const REVIEW_CATEGORIES: ReviewCategory[] = [
    {
        id: "overall",
        title: "Overall Experience",
        description: "How would you rate your experience with our library?",
        icon: <FaHeart className="text-primary-normal" />,
    },
    {
        id: "book_selection",
        title: "Book Selection",
        description: "Rate the variety and quality of books available.",
        icon: <FaBook className="text-secondary-normal" />,
    },
    {
        id: "ease_of_use",
        title: "Ease of Use",
        description: "How intuitive is our website and features?",
        icon: <FaGlobe className="text-primary-normal" />,
    },
];

const RateUsPage = ({
    rating,
    onRatingChange,
}: {
    rating: number;
    onRatingChange: (rating: number) => void;
}) => {
    const stars = [1, 2, 3, 4, 5];



    return (
        <div className="flex gap-1">
            {stars.map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => onRatingChange(star)}
                    className="text-xl transition-transform hover:scale-105 "
                    aria-label={`Rate ${star} stars`}
                >
                    {star <= rating ? (
                        <FaStar className="text-yellow-400" />
                    ) : (
                        <FaRegStar className="text-silver-dark" />
                    )}
                </button>
            ))}
        </div>
    );
};

const RateUs = () => {
    const [ratings, setRatings] = useState<Record<string, number>>(
        REVIEW_CATEGORIES.reduce((acc, category) => {
            acc[category.id] = 0;
            return acc;
        }, {} as Record<string, number>)
    );
    const [feedback, setFeedback] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isDisabled = Object.values(ratings).every(item => item === 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted ratings:", ratings, "Feedback:", feedback);
        setIsSubmitted(true);
    };

    useEffect(function () {
        console.log(ratings + " " + isDisabled)

    }, [ratings])

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 ">
                <div className="max-w-md p-8 text-center border shadow-xl bg-my-black rounded-2xl border-silver-dark">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary-dark/30">
                        <FaHeart className="text-2xl text-secondary" />
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-secondary">Thank You!</h2>
                    <p className="mb-6 text-silver-very-light">
                        Your feedback helps us build a better library for readers like you.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 font-medium text-white transition-opacity rounded-2xl bg-gradient-to-r from-primary to-primary-light hover:opacity-90"
                    >
                        Back to Home Page
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full gap-16 ">
            <div className="flex flex-col w-full min-h-screen px-4 py-30 place-content-center place-items-center">
                <div className="max-w-2xl text-center">
                    <h1 className="mb-6 font-serif text-4xl font-bold uppercase md:text-5xl text-primary">
                        Rate Us
                    </h1>
                    <p className="p-10 text-xl leading-relaxed text-silver-very-light">
                        Your opinion shapes our library. Take a moment to share your
                        experience.
                    </p>
                </div>

                <div className="w-full max-w-3xl p-8 border shadow-lg bg-my-black rounded-2xl border-silver-dark">
                    <form onSubmit={handleSubmit} className="space-y-10">
                        {REVIEW_CATEGORIES.map((category) => (
                            <div key={category.id} className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 mt-1 bg-primary-dark/20 rounded-xl">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-secondary">
                                            {category.title}
                                        </h3>
                                        <p className="mb-4 text-silver-very-light">
                                            {category.description}
                                        </p>
                                        <RateUsPage
                                            rating={ratings[category.id]}
                                            onRatingChange={(rating) =>
                                                setRatings((prev) => ({
                                                    ...prev,
                                                    [category.id]: rating,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 space-y-4 border-t border-silver-dark/30">
                            <h3 className="text-xl font-bold text-secondary">
                                Additional Feedback
                            </h3>
                            <p className="mb-2 text-silver-very-light">
                                What can we improve? (Optional)
                            </p>
                            <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                rows={4}
                                className="w-full p-4 text-white border resize-none border-silver-dark rounded-xl placeholder-silver-light focus:outline-none focus:ring-2 focus:ring-primary-normal"
                                placeholder="Tell us what you loved or what we can do better..."
                            />
                        </div>

                        <div className="flex flex-col pt-4">
                            <button
                                type="submit"
                                disabled={isDisabled}
                                className={`w-1/2 py-3 text-lg font-bold text-white px-7 place-self-center ${isDisabled ? "bg-gradient-to-r from-silver-very-dark to-silver-dark" : "bg-gradient-to-r from-primary to-primary-light"} rounded-xl`}
                            >
                                Submit Your Review
                            </button>
                            <p className="mt-3 text-sm text-center text-silver-light">
                                All ratings are anonymous and used only for improvement
                            </p>
                        </div>
                    </form>
                </div>

                <div className="max-w-xl p-10 text-sm text-center text-silver-very-light/80">
                    <p>
                        We read every review. Your feedback directly influences new features
                        like better translations, more free books, and improved note-taking.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RateUs;
