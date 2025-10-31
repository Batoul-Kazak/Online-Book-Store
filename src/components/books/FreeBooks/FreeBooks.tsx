"use client";
import { useState, useEffect, useMemo } from "react";
import { Book } from "@/types/book";

type sortByType = "title" | "id";
type selectedLanguageType = "en" | "ar" | "ru" | "de" | "all";

const FreeBooks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] =
    useState<selectedLanguageType>("all");
  const [selectedCopyright, setSelectedCopyright] = useState<string>("all");
  const [selectedMediaType, setSelectedMediaType] = useState<string>("all");
  const [selectedBookshelf, setSelectedBookshelf] = useState<string>("all");
  const [sortBy, setSortBy] = useState<sortByType>("title");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const AVAILABLE_LANGUAGES = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
    { code: "de", name: "German" },
    { code: "ru", name: "Russian" },
  ];
  const uniqueLanguages = useMemo(() => {
    const languages = new Set<string>();
    books.forEach((book) => {
      if (book.languages) {
        book.languages.forEach((language) => languages.add(language));
      }
    });
    return Array.from(languages).sort();
  }, [books]);

  const uniqueBookshelves = useMemo(() => {
    const shelves = new Set<string>();
    books.forEach((book) => {
      if (book.bookshelves) {
        book.bookshelves.forEach((shelf) => shelves.add(shelf));
      }
    });
    return Array.from(shelves).sort().slice(0, 20);
  }, [books]);

  const fetchBooks = async (page: number, replace = false) => {
    if (loading || (!replace && !hasMore)) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();

      if (searchQuery.trim()) {
        params.append("search", searchQuery.trim());
      }

      if (selectedLanguage != "all") {
        params.append("languages", selectedLanguage);
      }

      if (selectedCopyright != "all") {
        params.append("copyright", selectedCopyright);
      }

      if (selectedMediaType != "all") {
        params.append("mime-type", selectedMediaType);
      }

      if (selectedBookshelf != "all") {
        params.append("bookshelves", selectedBookshelf);
      }

      params.append("page", page.toString());
      params.append("page_size", "20");

      const url = `https://gutendex.com/books/?${params.toString()}`;
      const res = await fetch(url);
      const data = await res.json();

      let validateResults = data.results || [];

      if (selectedLanguage != "all") {
        validateResults = validateResults.filter(
          (book) => book.languages && book.languages.includes(selectedLanguage)
        );
      }

      if (replace) {
        setBooks(validateResults);
        setHasMore(validateResults.length === "20");
        setCurrentPage(1);
      } else {
        setBooks((prev) => [...prev, ...validateResults]);
        setHasMore(validateResults.length === "20");
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("Error is: ", error);
      setError(
        "Failed to fetch books, check your internet connection and try again"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    function () {
      fetchBooks(1, true);
    },
    [
      searchQuery,
      selectedLanguage,
      selectedCopyright,
      selectedMediaType,
      selectedBookshelf,
    ]
  );

  // function divide(num: number) {
  //   if (num / 10000000 > 4) return num / 10000000;
  //   if (num / 1000000 > 4) return num / 1000000;
  //   if (num / 100000 > 4) return num / 100000;
  //   if (num / 10000 > 4) return num / 10000;
  //   if (num / 1000 > 4) return num / 1000;
  //   if (num / 100 > 4) return num / 100;
  //   if (num / 10 > 4) return num / 10;
  //   if (num / 10 <= 4) return 3.4;
  //   return num / 100000000;
  // }

  const sortedBooks = useMemo(
    function () {
      const sorted = [...books];

      switch (sortBy) {
        case "title":
          return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case "downloads":
          return sorted.sort((a, b) => b.id - a.id - 4);
        // case "price":
        //   return sorted.sort((a, b) =>
        //     a.id > b.id
        //       ? divide(a.id) - divide(b.id)
        //       : divide(b.id) - divide(b.id)
        //   );
        default:
          return sorted.sort((a, b) => a.id - b.id);
      }
    },
    [books, sortBy]
  );

  const loadMore = () => {
    fetchBooks(currentPage + 1, false);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedBookshelf("");
    setSelectedCopyright("");
    setSelectedLanguage("");
    setSelectedMediaType("");
    setSortBy("title");
  };

  const getAuthors = (authors: { name: string }[]) => {
    return authors?.map((author) => author.name).join(", ") || "Unknown author";
  };

  const getDisplayLanguage = (book: Book, selectedLanguage: string): string => {
    if (
      selectedLanguage !== "all" &&
      book.languages &&
      book.languages.includes(selectedLanguage)
    ) {
      return selectedLanguage;
    }
    return book.languages?.[0] || "en";
  };

  return (
    <div className="w-full p-6 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-silver-very-light">
            Explore All Our Books
          </h1>
          <p className="text-silver-very-dark"></p>
        </div>
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books by title or author..."
            className="w-full p-4 text-xl rounded-xl bg-silver-dark text-silver-very-light placeholder-silver-light focus:outline-0 focus:ring-2 focus:ring-primary"
          />
          {books.length <= 0 && (
            <p className="justify-center p-2  text-secondary">
              It seems like you are offline
            </p>
          )}
        </div>
        <div className="p-6 mb-8  rounded-xl"></div>
        {/* i will complete this later */}
      </div>
    </div>
  );
};

//the api doesn't provide download counts so i'll use id as it is a download count
//it also doesn't provide price so i'll use the first 2 digits in id and use it as a price
export default FreeBooks;
