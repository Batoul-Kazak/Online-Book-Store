import FreeBooks from "@/components/books/FreeBooks/FreeBooks";
import PaidBookDetails from "@/components/ui/PaidBookDetails/PaidBookDetails";
// import PaidBookDetails from "@/components/ui/PaidBookDetails/PaidBookDetails";

const AllBooksPage = () => {
  return (
    <div className="flex flex-col gap-20 place-content-center place-items-center">
      {/* <NavBar /> */}
      {/* <PaidBooks /> */}
      <div className="flex flex-col place-content-center place-items-center">
        <h1 className="p-20 font-serif text-6xl font-bold text-primary">
          Our Books
        </h1>
        <FreeBooks />
        <PaidBookDetails toDisplayIn="allBooksPage" />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AllBooksPage;
