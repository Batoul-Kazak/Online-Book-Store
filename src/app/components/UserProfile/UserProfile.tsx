// "use client";

// import { AppContext } from "@/app/context/AppContext";
// import { useContext } from "react";
// import NavBar from "../NavBar/NavBar";
// import Image from "next/image";
// import { allBooks } from "@/app/lib";
// import Link from "next/link";
// import { Select } from "@mui/material";
// import NotFound from "@/app/not-found";

// const UserProfile = () => {
//   const { currentLoggedinUser, setcurrentLoggedinUser } =
//     useContext(AppContext);
//   const creationDatesSections = [
//     "all",
//     "today",
//     "yesterday",
//     "last week",
//     "this month",
//     "last month",
//     "this year",
//     "last year",
//   ];

//   function handleBookTitle(bookId) {
//     const bookTitle = allBooks.find((book) => book.id === bookId)?.title;
//     console.log(bookTitle);
//     return bookTitle;
//   }

//   // function handleGetNote_AboutBooks(noteId) {
//   //   const requiredNote = currentLoggedinUser.notes.find(
//   //     (note) => note.id == noteId
//   //   );
//   //   console.log(noteId + " " + requiredNote);

//   //   return 1;
//   // }

//   function handleNote(noteId) {
//     const note = currentLoggedinUser.notes.find((note) => note.id == noteId);
//     const booksArr = note.aboutBooks;
//     // const booksNames
//     return booksArr;
//   }

//   function handleCombineAboutBooks() {
//     const allBookIds = currentLoggedinUser.notes.flatMap(
//       (note) => note.aboutBooks
//     );
//     const allBookNames = allBookIds.map((bookId) => {
//       const book = allBooks.find((b) => b.id === bookId);
//       return book ? book.title : `[Unknown Book: ${bookId}]`;
//     });

//     return [...new Set(allBookNames)];
//   }

//   function handleCombineTags() {
//     const allBookTags = currentLoggedinUser.notes.flatMap((note) => note.tags);
//     const allBookNames = allBookTags.map((bookId) => {
//       return bookId;
//     });

//     return [...new Set(allBookNames)];
//   }

//   if (!currentLoggedinUser) return <NotFound />;

//   return (
//     <div>
//       {/* <NavBar /> */}
//       <div className="flex flex-col gap-10 px-20 py-10 ">
//         <section className="flex gap-10 place-content-center place-items-center">
//           <div className="flex flex-col gap-5 ">
//             <h1 className="text-6xl text-primary">
//               {currentLoggedinUser.name}
//             </h1>
//             <h2 className="text-2xl">{currentLoggedinUser.email}</h2>
//             <p className="font-bold text-secondary">
//               Role: {currentLoggedinUser.role}
//             </p>
//             <div className="flex gap-3 place-items-center">
//               <h2 className="text-xl">
//                 Book Marked Books:
//                 {currentLoggedinUser.savedBooks.length}
//               </h2>
//               <h2 className="text-xl">
//                 Read Books:
//                 {currentLoggedinUser.readingHistory.length}
//               </h2>
//               <h2 className="text-xl"></h2>
//             </div>
//             <div className="">Notes: {currentLoggedinUser.notes.length}</div>
//           </div>

//           <div>
//             <Image
//               src={currentLoggedinUser.profileImage}
//               className="w-[30rem] h-[30rem] rounded-full"
//               alt={`${currentLoggedinUser.name}-profile-image`}
//             />
//           </div>
//         </section>
//         <div className="flex flex-col gap-20">
//           <section className="">
//             <div className="flex flex-col gap-5">
//               <div className="">
//                 <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">
//                   My Notes
//                 </h2>
//                 {currentLoggedinUser.notes.length > 0 && (
//                   <div className="flex justify-between p-3 pl-10 bg-silver/50 ">
//                     <p>filters:</p>
//                     <div className="flex gap-5">
//                       <section className="flex flex-col">
//                         <p className="font-bold place-self-center">About Tag</p>
//                         <select className="bg-transparent">
//                           {handleCombineTags().map((book) => (
//                             <option
//                               key={book}
//                               value={book}
//                               className="text-white bg-silver-dark"
//                             >
//                               {book}
//                             </option>
//                           ))}
//                         </select>
//                       </section>
//                       <section className="flex flex-col">
//                         <p className="font-bold place-self-center">
//                           About Book
//                         </p>
//                         <select className="bg-transparent">
//                           {handleCombineAboutBooks().map((book) => (
//                             <option
//                               key={book}
//                               value={book}
//                               className="text-white bg-silver-dark"
//                             >
//                               {book}
//                             </option>
//                           ))}
//                         </select>
//                       </section>
//                       <section className="flex flex-col">
//                         <p className="font-bold place-self-center">Title</p>
//                         <select className="bg-transparent">
//                           {currentLoggedinUser.notes.map((note) => (
//                             <option
//                               key={note.id}
//                               value={note.title}
//                               className="bg-silver-dark"
//                             >
//                               {note.title}
//                             </option>
//                           ))}
//                         </select>
//                       </section>
//                       <section className="flex flex-col">
//                         <p className="font-bold place-self-center">
//                           Creation Date
//                         </p>
//                         <select className="bg-transparent">
//                           {creationDatesSections.map((d) => (
//                             <option
//                               key={d}
//                               value={d}
//                               className="bg-silver-dark"
//                             >
//                               {d.toLocaleUpperCase()}
//                             </option>
//                           ))}
//                         </select>
//                       </section>
//                     </div>
//                     {/* <div>title</div>
//                   <div>title</div>
//                   <div>title</div> */}
//                   </div>
//                 )}
//               </div>
//               {currentLoggedinUser.notes.length > 0 ? (
//                 <div className="flex flex-wrap gap-5 px-10">
//                   {currentLoggedinUser.notes.map((note) => (
//                     <Link
//                       href={`/notes/${note.id}`}
//                       className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
//                       key={note.id}
//                     >
//                       <h3>{note.title}</h3>
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-secondary place-self-center">No Notes</p>
//               )}
//             </div>
//           </section>
//           <section className="">
//             <div className="flex flex-col gap-5">
//               <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">
//                 Current Reading Books
//               </h2>
//               {currentLoggedinUser.currentReadings.length > 0 ? (
//                 <div className="flex flex-wrap gap-5 px-10">
//                   {currentLoggedinUser.currentReadings.map((bookID) => (
//                     <Link
//                       href={`/paid-books/${bookID}`}
//                       className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
//                       key={bookID}
//                     >
//                       {handleBookTitle(bookID)}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-secondary place-self-center">No books</p>
//               )}
//             </div>
//           </section>
//           <section className="">
//             <div className="flex flex-col gap-5">
//               <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">
//                 Finished Reading Books
//               </h2>
//               {currentLoggedinUser.readingHistory.length > 0 ? (
//                 <div className="flex flex-wrap gap-5 px-10">
//                   {currentLoggedinUser.readingHistory.map((bookID) => (
//                     <Link
//                       href={`/paid-books/${bookID}`}
//                       className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
//                       key={bookID}
//                     >
//                       {handleBookTitle(bookID)}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-secondary place-self-center">
//                   No books read
//                 </p>
//               )}
//             </div>
//           </section>
//           <section className="">
//             <div className="flex flex-col gap-5">
//               <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">
//                 Book Marked Books
//               </h2>
//               {currentLoggedinUser.savedBooks.length > 0 ? (
//                 <div className="flex flex-wrap gap-5 px-10">
//                   {currentLoggedinUser.savedBooks.map((bookID) => (
//                     <Link
//                       href={`/paid-books/${bookID}`}
//                       className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
//                       key={bookID}
//                     >
//                       {handleBookTitle(bookID)}
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="place-self-center text-secondary">
//                   No saved books
//                 </p>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

"use client";

import { AppContext } from "@/context/AppContext";
import { useContext, useState, useMemo } from "react";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import { allBooks } from "@/lib";
import Link from "next/link";

const UserProfile = () => {
  const { currentLoggedinUser } = useContext(AppContext);

  // Filter states
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("all");

  // Helper: Get book title by ID
  const getBookTitle = (bookId) => {
    return allBooks.find((book) => book.id === bookId)?.title || `[Unknown: ${bookId}]`;
  };

  // Helper: Get all unique tags
  const allTags = useMemo(() => {
    const tags = currentLoggedinUser.notes.flatMap(note => note.tags);
    return [...new Set(tags)];
  }, [currentLoggedinUser.notes]);

  // Helper: Get all unique book titles linked to notes
  const allBookTitles = useMemo(() => {
    const bookIds = currentLoggedinUser.notes.flatMap(note => note.aboutBooks);
    const titles = bookIds.map(id => getBookTitle(id));
    return [...new Set(titles)];
  }, [currentLoggedinUser.notes]);

  // Helper: Filter notes by all criteria
  const filteredNotes = useMemo(() => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    return currentLoggedinUser.notes.filter(note => {
      // Title filter
      if (selectedTitle && note.title !== selectedTitle) return false;

      // Tag filter
      if (selectedTag && !note.tags.includes(selectedTag)) return false;

      // Book filter (match any book in note's aboutBooks)
      if (selectedBook) {
        const noteBookTitles = note.aboutBooks.map(id => getBookTitle(id));
        if (!noteBookTitles.includes(selectedBook)) return false;
      }

      // Date range filter
      const noteDate = new Date(note.creationDate);
      if (selectedDateRange === "today") {
        if (noteDate.toDateString() !== now.toDateString()) return false;
      } else if (selectedDateRange === "yesterday") {
        const yesterday = new Date(now - oneDay);
        if (noteDate.toDateString() !== yesterday.toDateString()) return false;
      } else if (selectedDateRange === "last week") {
        const lastWeekStart = new Date(now - 7 * oneDay);
        if (noteDate < lastWeekStart) return false;
      } else if (selectedDateRange === "this month") {
        if (noteDate.getMonth() !== now.getMonth() || noteDate.getFullYear() !== now.getFullYear()) return false;
      } else if (selectedDateRange === "last month") {
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        if (noteDate < lastMonth || noteDate >= thisMonth) return false;
      } else if (selectedDateRange === "this year") {
        if (noteDate.getFullYear() !== now.getFullYear()) return false;
      } else if (selectedDateRange === "last year") {
        if (noteDate.getFullYear() !== now.getFullYear() - 1) return false;
      }

      return true;
    });
  }, [currentLoggedinUser.notes, selectedTag, selectedBook, selectedTitle, selectedDateRange, getBookTitle]);

  const creationDatesSections = [
    "all",
    "today",
    "yesterday",
    "last week",
    "this month",
    "last month",
    "this year",
    "last year",
  ];

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-10 px-20 py-10">
        {/* User Info */}
        <section className="flex gap-10 place-content-center place-items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl text-primary">{currentLoggedinUser.name}</h1>
            <h2 className="text-2xl">{currentLoggedinUser.email}</h2>
            <p className="font-bold text-secondary">Role: {currentLoggedinUser.role}</p>
            <div className="flex gap-3 place-items-center">
              <h2 className="text-xl">Bookmarked Books: {currentLoggedinUser.savedBooks.length}</h2>
              <h2 className="text-xl">Read Books: {currentLoggedinUser.readingHistory.length}</h2>
            </div>
            <div>Notes: {currentLoggedinUser.notes.length}</div>
          </div>

          <div>
            <Image
              src={currentLoggedinUser.profileImage}
              width={300}
              height={300}
              className="w-[30rem] h-[30rem] rounded-full object-cover"
              alt={`${currentLoggedinUser.name}-profile-image`}
            />
          </div>
        </section>

        {/* Notes Section with Filters */}
        <div className="flex flex-col gap-20">
          <section>
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">My Notes</h2>
                <div className="flex justify-between p-3 pl-10 bg-silver/50">
                  <p>Filters:</p>
                  <div className="flex gap-5">
                    {/* Tag Filter */}
                    <section className="flex flex-col">
                      <p className="font-bold place-self-center">About Tag</p>
                      <select
                        className="bg-transparent"
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                      >
                        <option value="">All Tags</option>
                        {allTags.map((tag) => (
                          <option key={tag} value={tag} className="text-white bg-silver-dark">
                            {tag}
                          </option>
                        ))}
                      </select>
                    </section>

                    {/* Book Filter */}
                    <section className="flex flex-col">
                      <p className="font-bold place-self-center">About Book</p>
                      <select
                        className="bg-transparent"
                        value={selectedBook}
                        onChange={(e) => setSelectedBook(e.target.value)}
                      >
                        <option value="">All Books</option>
                        {allBookTitles.map((title) => (
                          <option key={title} value={title} className="text-white bg-silver-dark">
                            {title}
                          </option>
                        ))}
                      </select>
                    </section>

                    {/* Title Filter */}
                    <section className="flex flex-col">
                      <p className="font-bold place-self-center">Title</p>
                      <select
                        className="bg-transparent"
                        value={selectedTitle}
                        onChange={(e) => setSelectedTitle(e.target.value)}
                      >
                        <option value="">All Titles</option>
                        {currentLoggedinUser.notes.map((note) => (
                          <option key={note.id} value={note.title} className="bg-silver-dark">
                            {note.title}
                          </option>
                        ))}
                      </select>
                    </section>

                    {/* Date Filter */}
                    <section className="flex flex-col">
                      <p className="font-bold place-self-center">Creation Date</p>
                      <select
                        className="bg-transparent"
                        value={selectedDateRange}
                        onChange={(e) => setSelectedDateRange(e.target.value)}
                      >
                        {creationDatesSections.map((d) => (
                          <option key={d} value={d} className="bg-silver-dark">
                            {d.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </section>
                  </div>
                </div>
              </div>

              {/* Filtered Notes */}
              <div className="flex flex-wrap gap-5 px-10">
                {filteredNotes.length > 0 ? (
                  filteredNotes.map((note) => (
                    <Link
                      href={`/notes/${note.id}`}
                      className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
                      key={note.id}
                    >
                      <h3>{note.title}</h3>
                    </Link>
                  ))
                ) : (
                  <p className="text-light-silver">No notes match the selected filters.</p>
                )}
              </div>
            </div>
          </section>

          {/* Other sections unchanged */}
          <section>
            <div className="flex flex-col gap-5">
              <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">Current Reading Books</h2>
              <div className="flex flex-wrap gap-5 px-10">
                {currentLoggedinUser.currentReadings.map((bookID) => (
                  <Link
                    href={`/paid-books/${bookID}`}
                    className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
                    key={bookID}
                  >
                    {getBookTitle(bookID)}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-5">
              <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">Finished Reading Books</h2>
              <div className="flex flex-wrap gap-5 px-10">
                {currentLoggedinUser.readingHistory.map((bookID) => (
                  <Link
                    href={`/paid-books/${bookID}`}
                    className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
                    key={bookID}
                  >
                    {getBookTitle(bookID)}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-5">
              <h2 className="p-5 pl-10 text-3xl bg-silver-very-dark/50">Bookmarked Books</h2>
              <div className="flex flex-wrap gap-5 px-10">
                {currentLoggedinUser.savedBooks.map((bookID) => (
                  <Link
                    href={`/paid-books/${bookID}`}
                    className="px-5 py-3 text-xl duration-300 cursor-pointer hover:scale-105 bg-secondary-dark/50 hover:bg-secondary-dark/90 rounded-2xl text-light-silver"
                    key={bookID}
                  >
                    {getBookTitle(bookID)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

