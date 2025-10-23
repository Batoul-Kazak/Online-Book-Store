"use client";

import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaBook,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// Define review data structure
type ReviewCategory = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

// Review categories (no repetition!)
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

// Star rating component (reusable)
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
          className="text-2xl hover:scale-110 transition-transform focus:outline-none"
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
  // State for ratings and feedback
  const [ratings, setRatings] = useState<Record<string, number>>(
    REVIEW_CATEGORIES.reduce((acc, category) => {
      acc[category.id] = 0;
      return acc;
    }, {} as Record<string, number>)
  );
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted ratings:", ratings, "Feedback:", feedback);
    setIsSubmitted(true);
    // In a real app: send to your backend or email service
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-light-black">
        <div className="text-center max-w-md bg-my-black p-8 rounded-2xl border border-silver-dark shadow-xl">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaHeart className="text-green-400 text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Thank You!</h2>
          <p className="text-silver-very-light mb-6">
            Your feedback helps us build a better library for readers like you.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-primary-normal to-secondary-normal text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-16 w-full ">
      <NavBar />
      <div className="px-4 py-12 min-h-screen flex flex-col w-full place-content-center place-items-center">
        {/* Hero Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold uppercase font-serif text-primary mb-6">
            Rate Us
          </h1>
          <p className="text-xl text-silver-very-light leading-relaxed p-10">
            Your opinion shapes our library. Take a moment to share your
            experience.
          </p>
        </div>

        {/* Rating Form */}
        <div className="w-full max-w-3xl bg-my-black p-8 rounded-2xl border border-silver-dark shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Dynamic rating categories */}
            {REVIEW_CATEGORIES.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-primary-dark/20 rounded-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-silver-very-light mb-4">
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

            {/* Feedback Textarea */}
            <div className="space-y-4 pt-6 border-t border-silver-dark/30">
              <h3 className="text-2xl font-bold text-secondary">
                Additional Feedback
              </h3>
              <p className="text-silver-very-light mb-2">
                What can we improve? (Optional)
              </p>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full border border-silver-dark rounded-xl p-4 text-white placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-primary-normal resize-none"
                placeholder="Tell us what you loved or what we can do better..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={Object.values(ratings).every((r) => r === 0)}
                className="w-full bg-gradient-to-r from-primary-normal to-secondary-normal text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Submit Your Review
              </button>
              <p className="text-center text-silver-dark text-sm mt-3">
                All ratings are anonymous and used only for improvement
              </p>
            </div>
          </form>
        </div>

        {/* Trust Note */}
        <div className="text-center max-w-xl text-silver-very-light/80 text-sm p-10">
          <p>
            We read every review. Your feedback directly influences new features
            like better translations, more free books, and improved note-taking.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RateUs;
