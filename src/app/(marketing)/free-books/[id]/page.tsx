import Link from "next/link";
import { notFound } from "next/navigation";

interface BookDetailsProps {
  params: {
    id: string;
  };
}

async function getBookById(id: string): Promise<Book | null> {
  // const [error, setError] = useState(false);
  // const [isloading, setIsLoading] = useState(false);
  try {
    // setError(false);
    // setIsLoading(true);
    const res = await fetch(`https://gutendex.com/books/${id}/`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const book = await res.json();

    return book;
  } catch (error) {
    console.error("Error fetching books:", error);
    // setError(true);
    return null;
  }
  //  finally {
  //   setIsLoading(false);
  // }
}

export default async function BookDetails({ params }: BookDetailsProps) {
  const book = await getBookById(params.id);

  if (!book) {
    notFound();
  }

  const authors =
    book.authors?.map((author) => author.name).join(", ") || "Unknown Author";

  const downloadFormats = [
    { name: "EPUB", url: book.formats?.["application/epub+zip"] },
    { name: "PDF", url: book.formats?.["application/pdf"] },
    { name: "HTML", url: book.formats?.["text/html"] },
  ].filter((format) => format.url);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-silver-very-dark to-silver-dark rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            {book.formats?.["image/jpeg"] ? (
              <img
                src={book.formats["image/jpeg"]}
                alt={`${book.title}-image`}
                className="w-full h-100 object-cover shadow-md rounded-lg"
              />
            ) : (
              <div className="w-full h-100 bg-silver-very-light flex items-center justify-center text-silver rounded-lg">
                No cover available
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold text-silver-very-light mb-4">
              {book.title}
            </h1>
            <div className="space-y-3 text-silver-very-light">
              <p>
                <span className="font-semibold text-primary">Author:</span>
                {authors}
              </p>
              {book.translators && book.translators.length > 0 && (
                <p>
                  <span className="font-semibold text-primary">
                    Translators:
                  </span>
                  {book.translators
                    .map((translator) => translator.name)
                    .join(", ")}
                </p>
              )}
              <p>
                <span className="font-semibold text-primary">Language: </span>
                {book.languages?.[0]?.toUpperCase() || "EN"}
                {/* here i want to add another languages according to filter user used */}
              </p>
              <p>
                <span className="font-semibold text-primary">Copyright:</span>
                {book.copyright ? "Yes" : "Public Domain"}
              </p>
              {book.subjects && book.subjects.length > 0 && (
                <div>
                  <span className="font-semibold text-primary">Subjects:</span>
                  <div className="flex flex-wrap mt-1 gap-2">
                    {book.subjects.slice(0, 5).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/20 text-primary text-sm rounded-xl"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {book.bookshelves && book.shelves.length > 0 && (
                <div>
                  <span className="font-semibold text-primary">
                    Bookshelves:
                  </span>
                  <div className="flex flex-wrap mt-1 gap-2">
                    {book.bookshelves.slice(0, 5).map((shelve, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary/20 text-secondary text-sm rounded-xl"
                      >
                        {shelve}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {downloadFormats.length > 0 && (
                <div className="mt-6 pt-6 border-t border-silver-light">
                  <h2 className="text-xl font-bold text-silver-very-light mb-4">
                    Download Options
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {downloadFormats.map((format) => (
                      <Link
                        href={format.url}
                        key={format.name}
                        download
                        className="px-4 py-2 bg-primary hover:bg-primary-dark text-silver-very-light rounded-lg duration-300 hover:scale-105"
                      >
                        Download {format.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <Link
                  href="/all-books"
                  className="text-primary hover:text-primary-light font-2xl"
                >
                  Pick another book?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
