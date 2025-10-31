export type Book = {
  id: number;
  title: string;
  authors: { name: string }[];
  translators: { name: string }[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    "image/jpeg"?: string;
    "text/html"?: string;
    "application/epub+zip"?: string;
    "application/pdf"?: string;
    [key: string]: string | undefined;
  };
};
