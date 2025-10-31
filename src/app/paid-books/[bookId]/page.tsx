import React, { useContext } from "react";
import { allBooks } from "@/lib";
import PaidBookDetails from "@/app/components/PaidBookDetails/PaidBookDetails";
import BookDetailsPage from "@/app/components/BookDetailsPage/BookDetailsPage";

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
