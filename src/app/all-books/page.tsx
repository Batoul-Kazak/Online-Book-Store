import FreeBooks from "@/app/components/FreeBooks/FreeBooks";
import PaidBooks from "../paid-books/page";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import PaidBookDetails from "../components/PaidBookDetails/PaidBookDetails";

const AllBooksPage = () => {
  return (
    <div className="flex flex-col place-content-center place-items-center gap-20">
      {/* <NavBar /> */}
      {/* <PaidBooks /> */}
      <div className="flex flex-col place-content-center place-items-center">
        <h1 className="text-6xl font-bold text-primary font-serif p-20">
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
