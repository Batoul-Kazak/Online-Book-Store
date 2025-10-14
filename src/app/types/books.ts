export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string;
  image?: string;
  url?: string;
  isbn?: string;
  publisher?: string;
  year?: string;
  pages?: string;
  description?: string;
}

export interface SearchResponse {
  success: boolean;
  books: Book[];
}
