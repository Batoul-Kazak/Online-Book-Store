"use client";

import { AppContext } from "@/app/context/AppContext";
import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import { allBooks } from "@/app/lib";
import Link from "next/link";
import { Select } from "@mui/material";
import NotFound from "@/app/not-found";

const UserProfile = () => {
  const { currentLoggedinUser, setCurrentLoggedinUser } =
    useContext(AppContext);
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

  function handleBookTitle(bookId) {
    const bookTitle = allBooks.find((book) => book.id === bookId)?.title;
    console.log(bookTitle);
    return bookTitle;
  }

  // function handleGetNote_AboutBooks(noteId) {
  //   const requiredNote = currentLoggedinUser.notes.find(
  //     (note) => note.id == noteId
  //   );
  //   console.log(noteId + " " + requiredNote);

  //   return 1;
  // }

  function handleNote(noteId) {
    const note = currentLoggedinUser.notes.find((note) => note.id == noteId);
    const booksArr = note.aboutBooks;
    // const booksNames
    return booksArr;
  }

  function handleCombineAboutBooks() {
    const allBookIds = currentLoggedinUser.notes.flatMap(
      (note) => note.aboutBooks
    );
    const allBookNames = allBookIds.map((bookId) => {
      const book = allBooks.find((b) => b.id === bookId);
      return book ? book.title : `[Unknown Book: ${bookId}]`;
    });

    return [...new Set(allBookNames)];
  }

  function handleCombineTags() {
    const allBookTags = currentLoggedinUser.notes.flatMap((note) => note.tags);
    const allBookNames = allBookTags.map((bookId) => {
      return bookId;
    });

    return [...new Set(allBookNames)];
  }

  if (!currentLoggedinUser) return <NotFound />;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-10 py-10 px-20 ">
        <section className="flex place-content-center place-items-center gap-10">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-6xl text-primary">
              {currentLoggedinUser.name}
            </h1>
            <h2 className="text-2xl">{currentLoggedinUser.email}</h2>
            <p className="text-secondary font-bold">
              Role: {currentLoggedinUser.role}
            </p>
            <div className="flex gap-3 place-items-center">
              <h2 className="text-xl">
                Book Marked Books:
                {currentLoggedinUser.savedBooks.length}
              </h2>
              <h2 className="text-xl">
                Read Books:
                {currentLoggedinUser.readingHistory.length}
              </h2>
              <h2 className="text-xl"></h2>
            </div>
            <div className="">Notes: {currentLoggedinUser.notes.length}</div>
          </div>

          <div>
            <Image
              src={currentLoggedinUser.profileImage}
              className="w-[30rem] h-[30rem] rounded-full"
              alt={`${currentLoggedinUser.name}-profile-image`}
            />
          </div>
        </section>
        <div className="flex flex-col gap-20">
          <section className="">
            <div className="flex flex-col gap-5">
              <div className="">
                <h2 className="text-3xl bg-silver-very-dark/50 p-5 pl-10">
                  My Notes
                </h2>
                {currentLoggedinUser.notes.length > 0 && (
                  <div className="bg-silver/50 p-3 pl-10 flex justify-between ">
                    <p>filters:</p>
                    <div className="flex gap-5">
                      <section className="flex flex-col">
                        <p className="place-self-center font-bold">About Tag</p>
                        <select className="bg-transparent">
                          {handleCombineTags().map((book) => (
                            <option
                              key={book}
                              value={book}
                              className="bg-silver-dark text-white"
                            >
                              {book}
                            </option>
                          ))}
                        </select>
                      </section>
                      <section className="flex flex-col">
                        <p className="place-self-center font-bold">
                          About Book
                        </p>
                        <select className="bg-transparent">
                          {handleCombineAboutBooks().map((book) => (
                            <option
                              key={book}
                              value={book}
                              className="bg-silver-dark text-white"
                            >
                              {book}
                            </option>
                          ))}
                        </select>
                      </section>
                      <section className="flex flex-col">
                        <p className="place-self-center font-bold">Title</p>
                        <select className="bg-transparent">
                          {currentLoggedinUser.notes.map((note) => (
                            <option
                              key={note.id}
                              value={note.title}
                              className="bg-silver-dark"
                            >
                              {note.title}
                            </option>
                          ))}
                        </select>
                      </section>
                      <section className="flex flex-col">
                        <p className="place-self-center font-bold">
                          Creation Date
                        </p>
                        <select className="bg-transparent">
                          {creationDatesSections.map((d) => (
                            <option
                              key={d}
                              value={d}
                              className="bg-silver-dark"
                            >
                              {d.toLocaleUpperCase()}
                            </option>
                          ))}
                        </select>
                      </section>
                    </div>
                    {/* <div>title</div>
                  <div>title</div>
                  <div>title</div> */}
                  </div>
                )}
              </div>
              {currentLoggedinUser.notes.length > 0 ? (
                <div className="flex flex-wrap gap-5 px-10">
                  {currentLoggedinUser.notes.map((note) => (
                    <Link
                      href={`/notes/${note.id}`}
                      className="hover:scale-105 duration-300 cursor-pointer bg-secondary-dark/50 py-3 px-5 hover:bg-secondary-dark/90 rounded-2xl text-light-silver text-xl"
                      key={note.id}
                    >
                      <h3>{note.title}</h3>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-secondary place-self-center">No Notes</p>
              )}
            </div>
          </section>
          <section className="">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl bg-silver-very-dark/50 p-5 pl-10">
                Current Reading Books
              </h2>
              {currentLoggedinUser.currentReadings.length > 0 ? (
                <div className="flex flex-wrap gap-5 px-10">
                  {currentLoggedinUser.currentReadings.map((bookID) => (
                    <Link
                      href={`/paid-books/${bookID}`}
                      className="hover:scale-105 duration-300 cursor-pointer bg-secondary-dark/50 py-3 px-5 hover:bg-secondary-dark/90 rounded-2xl text-light-silver text-xl"
                      key={bookID}
                    >
                      {handleBookTitle(bookID)}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-secondary place-self-center">No books</p>
              )}
            </div>
          </section>
          <section className="">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl bg-silver-very-dark/50 p-5 pl-10">
                Finished Reading Books
              </h2>
              {currentLoggedinUser.readingHistory.length > 0 ? (
                <div className="flex flex-wrap gap-5 px-10">
                  {currentLoggedinUser.readingHistory.map((bookID) => (
                    <Link
                      href={`/paid-books/${bookID}`}
                      className="hover:scale-105 duration-300 cursor-pointer bg-secondary-dark/50 py-3 px-5 hover:bg-secondary-dark/90 rounded-2xl text-light-silver text-xl"
                      key={bookID}
                    >
                      {handleBookTitle(bookID)}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-secondary place-self-center">
                  No books read
                </p>
              )}
            </div>
          </section>
          <section className="">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl bg-silver-very-dark/50 p-5 pl-10">
                Book Marked Books
              </h2>
              {currentLoggedinUser.savedBooks.length > 0 ? (
                <div className="flex flex-wrap gap-5 px-10">
                  {currentLoggedinUser.savedBooks.map((bookID) => (
                    <Link
                      href={`/paid-books/${bookID}`}
                      className="hover:scale-105 duration-300 cursor-pointer bg-secondary-dark/50 hover:bg-secondary-dark/90 py-3 px-5  rounded-2xl text-light-silver text-xl"
                      key={bookID}
                    >
                      {handleBookTitle(bookID)}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="place-self-center text-secondary">
                  No saved books
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
