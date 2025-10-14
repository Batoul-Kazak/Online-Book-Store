// "use client";

// import { useState, ChangeEvent } from "react";
// import { Book } from "@/app/types/books";
// import Image from "next/image";
// import Link from "next/link";

// export default function BookSearch() {
//   const [query, setQuery] = useState("");
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === "") {
//       setBooks([]);
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         `https://www.dbooks.org/api/search/${encodeURIComponent(value)}`
//       );

//       if (!res.ok) {
//         throw new Error("Failed to fetch books");
//       }

//       const data: { books: Book[] } = await res.json();
//       setBooks(data.books || []);
//     } catch (err) {
//       setError("Failed to load books. Please try again.");
//       setBooks([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         Search Free Books
//       </h1>

//       <input
//         type="text"
//         placeholder="Search books..."
//         value={query}
//         onChange={handleSearch}
//         className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
//       />

//       {loading && <p className="text-blue-600 font-medium">Loading...</p>}
//       {error && <p className="text-red-600 font-medium">{error}</p>}

//       {books.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {books.map((book) => (
//             <div
//               key={book.id}
//               className="border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
//             >
//               {book.image ? (
//                 <Image
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-48 object-cover rounded mb-2"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400">
//                   No Image
//                 </div>
//               )}
//               <h3 className="font-semibold text-sm line-clamp-2 h-12">
//                 {book.title}
//               </h3>
//               {book.authors && (
//                 <p className="text-xs text-gray-600 mt-1 line-clamp-1">
//                   {book.authors}
//                 </p>
//               )}
//               {book.url && (
//                 <Link
//                   href={book.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
//                 >
//                   Read
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {!loading && books.length === 0 && query && !error && (
//         <p className="text-gray-500">No books found for "{query}".</p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, ChangeEvent, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  Alert,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Book } from "@/app/types/books";

export default function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (value: string) => {
    if (value.trim() === "") {
      setBooks([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://www.dbooks.org/api/search/${encodeURIComponent(value)}`
      );

      if (!res.ok) throw new Error("Failed to fetch books");

      const data: { books: Book[] } = await res.json();
      setBooks(data.books || []);
    } catch (err) {
      setError("Failed to load books. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        color="white"
      >
        Search Free Books
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search books (e.g., 'linux', 'shakespeare', 'python')..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
          sx: {
            color: "white", // text color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "white",
              opacity: 0.7,
            },
          },
        }}
        sx={{ mb: 4 }}
      />
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Grid container spacing={3}>
          {[...Array(10)].map((_, i) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={i}>
              <Card>
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton width="80%" height={24} />
                  <Skeleton width="60%" height={20} sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : books.length > 0 ? (
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={book.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: 3 },
                }}
              >
                {book.image ? (
                  <CardMedia
                    component="img"
                    image={book.image}
                    alt={book.title}
                    loading="lazy"
                    sx={{ height: 200, objectFit: "cover" }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography color="text.secondary">No Image</Typography>
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, pb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: 48,
                    }}
                  >
                    {book.title}
                  </Typography>
                  {book.authors && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ minHeight: 20 }}
                    >
                      {book.authors}
                    </Typography>
                  )}
                  {book.url && (
                    <Link
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      color="primary"
                      sx={{ mt: 1, display: "inline-block" }}
                    >
                      Read Online
                    </Link>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : query && !loading && !error ? (
        <Typography align="center" color="text.secondary">
          No books found for "{query}".
        </Typography>
      ) : null}
    </Box>
  );
}
