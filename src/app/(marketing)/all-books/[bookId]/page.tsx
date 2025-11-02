
import React from "react";
import { allBooks } from "@/_lib";
import BookDetailsPage from "@/components/books/BookDetailsPage/BookDetailsPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ bookId: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).bookId;
  const bookInfo = allBooks.find((book) => book.id == id);
  // const { t, lang, setLang } = useTranslation();
  const {
    title, rating, author, language, price, depthDescription, edition
  } = bookInfo;

  return {
    title: `Book ${bookInfo?.title["en"]}`,
    description: `author: ${author["en"]}, rating: ${rating}, description: ${depthDescription["en"]}, edition: ${edition["en"]}, id:${id}`
  }
}

export default async function PaidBookDetailsPage({
  params,
}: Props) {
  // const bookId_ = (await params).bookId;
  const bookId_ = (await params).bookId;
  const bookInfo = allBooks.find((book) => book.id === bookId_);

  if (!bookInfo) return notFound();

  return <BookDetailsPage bookInfo={bookInfo} />;
}
