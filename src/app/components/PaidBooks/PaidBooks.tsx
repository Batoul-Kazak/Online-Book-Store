import PaidBookDetails from "@/app/components/PaidBookDetails/PaidBookDetails";

const PaidBooks = () => {
  return (
    <div>
      <h1>Paid Books</h1>
      <PaidBookDetails toDisplayIn="homePage" />
    </div>
  );
};

export default PaidBooks;
