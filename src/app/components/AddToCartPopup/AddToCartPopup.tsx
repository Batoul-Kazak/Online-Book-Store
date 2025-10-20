"use client";

import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { AppContext } from "@/app/context/AppContext";
import { Input } from "@mui/material";

const AddToCartPopup = () => {
  const [showInputLanguage, setShowInputLanguage] = useState(false);
  const {
    setShowAddToCartPopup,
    chosenBookIsPDF,
    setChosenBookIsPDF,
    chosenBookLanguage,
    setChosenBookLanguage,
    isWantTranslatedCopy,
    setIsWantTranslatedCopy,
    chosenEdition,
    setChosenEdition,
    normalBookCopies,
    setNormalBookCopies,
    currentUserCurrentCart,
    setCurrentUserCurrentCart,
    currentOrderedBookInfo,
  } = useContext(AppContext);

  function handleAddToCart(e) {
    e.preventDefault();

    const bookID = currentOrderedBookInfo.id;
    const bookImg = currentOrderedBookInfo.img;
    const bookTitle = currentOrderedBookInfo.title;
    const bookPrice = currentOrderedBookInfo.price;

    const newBookOrder = {
      id: bookID,
      cover: bookImg,
      title: bookTitle,
      price: bookPrice,
      isPDF: chosenBookIsPDF,
      bookLanguage: chosenBookLanguage,
      translationOrder: isWantTranslatedCopy,
      edition: chosenEdition,
      copiesCount: Number(normalBookCopies),
      totalPrice: Number(normalBookCopies * bookPrice),
    };

    const isBookExistInCart = currentUserCurrentCart.find(
      (item) => item.id === newBookOrder.id
    );

    if (isBookExistInCart) {
      alert(`${newBookOrder.title} already exists in your cart`);
      setShowAddToCartPopup(false);
      return;
    }

    setCurrentUserCurrentCart((currentUserCurrentCart) => [
      ...currentUserCurrentCart,
      newBookOrder,
    ]);
    // console.log("ccc: " + JSON.stringify(newBookOrder));
    setShowAddToCartPopup(false);
    setChosenBookIsPDF(true);
    setChosenBookLanguage("en");
    setIsWantTranslatedCopy(false);
    setNormalBookCopies(1);
  }

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-black/60 backdrop-blur-sm">
      <form
        action="post"
        onSubmit={handleAddToCart}
        className="max-h-[40rem] overflow-y-scroll p-10 flex max-w-[40rem] gap-10 flex-col border-2 border-double pt-20 rounded-2xl bg-gradient-to-br from-silver-very-dark to-my-black text-white fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <FaWindowClose
          onClick={() => setShowAddToCartPopup(false)}
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer hover:scale-105"
        />

        <section className="flex flex-col place-items-center gap-4">
          {/* <div className="fixed"> */}
          <h1 className="text-primary text-4xl font-bold text-center">
            Adding to Cart
          </h1>
          {/* </div> */}
          <h2 className="text-secondary-dark text-2xl flex gap-3">
            {currentOrderedBookInfo.title}(
            <span className="text-lime-300 font-mono">
              {currentOrderedBookInfo.price}$
            </span>
            )
          </h2>
        </section>

        <section className="flex flex-col gap-5">
          <p>Choose how you would like your book</p>
          <div className="flex gap-4 w-full place-content-center">
            <button
              type="button"
              onClick={() => setChosenBookIsPDF(true)}
              className={` rounded-2xl w-1/3 font-bold py-2 hover:bg-silver-very-light  bg-gradient-to-r ${
                chosenBookIsPDF
                  ? "from-primary-light to-primary text-secondary-dark"
                  : "from-silver-light to-silver text-silver-very-dark hover:text-lime-500"
              }`}
            >
              PDF
            </button>
            <button
              type="button"
              onClick={() => setChosenBookIsPDF(false)}
              className={`rounded-2xl w-1/3 py-2 font-bold hover:bg-silver-very-light bg-gradient-to-r  ${
                !chosenBookIsPDF
                  ? "from-primary-light to-primary text-secondary-dark"
                  : "from-silver-light to-silver text-silver-very-dark hover:text-lime-500"
              }   `}
            >
              Papers
            </button>
          </div>
        </section>

        <section className="flex gap-3 flex-col">
          {chosenBookIsPDF && (
            <>
              <label>How many copies do you want from this book?</label>
              <Input
                type="number"
                onChange={(e) => setNormalBookCopies(Number(e.target.value))}
                value={normalBookCopies}
              />
            </>
          )}
        </section>

        <hr />
        <section>
          <label htmlFor="language">Choose Language</label>
          <select
            onChange={(e) => setChosenBookLanguage(e.target.value)}
            className="text-secondary border-b-2 border-b-secondary outline-none p-4"
            id="language"
          >
            <option value="en" className="text-secondary bg-silver-very-dark">
              English
            </option>
            <option value="du" className="text-secondary bg-silver-very-dark">
              German
            </option>
            <option value="ar" className="text-secondary bg-silver-very-dark">
              Arabic
            </option>
            <option
              value="ar"
              className="text-secondary bg-silver-very-dark"
              onClick={() => setShowInputLanguage(true)}
            >
              Other
            </option>
          </select>
          {showInputLanguage && (
            <>
              <p>
                Sorry this language is not available for this book, do you want
                to pay for a translated copy to selected language? (
                <span className="text-lime-500">This will cost 32$</span>) *this
                will needs more time to get your copy ready*
              </p>
              <Input
                type="text"
                value={chosenBookLanguage}
                onChange={(e) => setChosenBookLanguage(e.target.value)}
              />
            </>
          )}

          <div className="flex gap-4">
            <input
              type="checkbox"
              value={isWantTranslatedCopy}
              onChange={(e) => setIsWantTranslatedCopy(e.target.checked)}
            />
            <label id="translated-copy">Pay for translated copy</label>
          </div>

          <label htmlFor="edition">Choose edition</label>
          <select
            className="text-secondary p-4 border-b-2 border-b-secondary outline-none"
            id="edition"
            onChange={(e) => setChosenEdition(e.target.value)}
            value={chosenEdition}
          >
            <option
              value="third edition (last)"
              className="text-secondary bg-silver-very-dark"
            >
              third edition (last)
            </option>
            <option
              value="second edition"
              className="text-secondary bg-silver-very-dark"
            >
              second edition
            </option>
            <option
              value="first edition"
              className="text-secondary bg-silver-very-dark"
            >
              first edition
            </option>
          </select>
        </section>
        <hr />
        <section>
          {chosenBookIsPDF && (
            <>
              <label htmlFor="copies">
                How many copies you want from the book?
              </label>
              <Input
                type="number"
                value={chosenBookIsPDF}
                onChange={(e) => setChosenBookIsPDF(e.target.value)}
              />
            </>
          )}
        </section>
        <section>
          <p className="text-secondary">
            You have X items in your cart now, their price is X
          </p>
        </section>
        <button
          type="submit"
          className="p-2 w-2/3 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-blue-700 text-xl font-bold hover:scale-105 duration-300"
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCartPopup;
