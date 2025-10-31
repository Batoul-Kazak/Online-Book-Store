import React, { useContext } from "react";
import { allBooks } from "@/lib";
import BookDetailsPage from "@/components/books/BookDetailsPage/BookDetailsPage";

export default async function PaidBookDetailsPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  // const bookId_ = (await params).bookId;
  const bookId_ = (await params).bookId;
  const bookInfo = allBooks.find((book) => book.id === bookId_);

  return <BookDetailsPage bookInfo={bookInfo} />;
}
