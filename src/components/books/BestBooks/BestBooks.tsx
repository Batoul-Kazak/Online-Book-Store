import PaidBookDetails from "@/components/ui/PaidBookDetails/PaidBookDetails";

const BestBooks = () => {
  return (
    <div className="relative flex flex-col pt-10 place-content-center place-items-center">
      {/* <Image
        src={OpenedBookImage}
        alt=""
        className="absolute z-8 brightness-20 h-[100rem]"
      ></Image> */}
      <div className="center text-[1rem] sm:text-[3rem]">
        <div className="enter mb-20 max-w-[400px] mx-auto flex flex-col gap-5">
          {/* <p className="text-sm bg-clip-text dark:text-white bg-gradient-to-r from-primary-normal to-secondary-normal">
                    Trending Books
                  </p> */}
          <h1 className="text-5xl font-bold text-center">Best Books</h1>
          <p className="text-xl text-center text-silver-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            dicta tempora doloremque et ea, sit nihil beatae, ex, iure enim
            vero. Recusandae tenetur aspernatur itaque corporis quaerat saepe
            nulla placeat!
          </p>
        </div>
      </div>
      <PaidBookDetails toDisplayIn="homePage" />
    </div>
  );
};

export default BestBooks;
