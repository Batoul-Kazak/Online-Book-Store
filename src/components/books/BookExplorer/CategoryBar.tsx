"use client";

import { useEffect, useRef, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";

interface CategoryBarProps {
  onCategorySelect: (category: string) => void;
}

const CATEGORIES = [
  "python",
  "javascript",
  "java",
  "math",
  "physics",
  "biology",
  "chemistry",
  "computer science",
  "programming",
  "data science",
  "machine learning",
  "artificial intelligence",
  "algorithms",
  "web development",
  "linux",
  "philosophy",
  "history",
  "economy",
  "medicine",
  "engineering",
  "stories",
];

const CategoryBar = ({ onCategorySelect }: CategoryBarProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function scroll(direction: "left" | "right") {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
      });
    }
  }

  function updateScrollButtons() {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }

  useEffect(function () {
    const scrollContainerRef_ = scrollContainerRef.current;
    if (scrollContainerRef_) {
      scrollContainerRef_.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => {
        scrollContainerRef_.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <div className="relative flex items-center mb-8 w-[100rem] pt-10 place-self-center bg-light-">
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-40 cursor-not-allowed"
          }`}
      >
        <span className="text-white">‹</span>
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar mx-4 py-2 space-x-3 "
      >
        {CATEGORIES.map((item) => (
          <button
            key={item}
            onClick={() => onCategorySelect(item)}
            className="flex-shrink-0 font-bold px-5 py-2 hover:opacity-60 hover:scale-95 text-white bg-secondary rounded-full whitespace-nowrap duration-300 transition-colors shadow-md"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`w-10 h-10 rounded-full  flex items-center justify-center shadow-md transition-opacity ${canScrollRight ? "opacity-100" : "opacity-40 cursor-not-allowed"
          }`}
      >
        <span className="text-white">›</span>
      </button>
    </div>
  );
};

export default CategoryBar;
