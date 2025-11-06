"use client";

import { useContext, useState } from 'react';
import { AppContext } from "@/context/AppContext";
import { Input } from "@mui/material";
import { redirect, useRouter } from "next/navigation";

const OrderBookPage = () => {
    const [showInputLanguage, setShowInputLanguage] = useState(false);
    const router = useRouter();
    const {
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

    const handleAddToCart = (e) => {
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

        if (isBookExistInCart && bookID) {
            alert(`${newBookOrder.title} already exists in your cart`);
            return;
        }

        setCurrentUserCurrentCart((currentUserCurrentCart) => [
            ...currentUserCurrentCart,
            newBookOrder,
        ]);
        // console.log("ccc: " + JSON.stringify(newBookOrder));
        setChosenBookIsPDF(true);
        setChosenBookLanguage("en");
        setIsWantTranslatedCopy(false);
        setNormalBookCopies(1);

        redirect("/cart")
    }

    const handleGoBack = () => {
        router.back();
    }

    return (
        <form
            action="post"
            onSubmit={handleAddToCart}
            className="flex flex-col gap-10 p-10 pt-20 text-white bg-gradient-to-br from-silver-very-dark to-my-black"
        >

            <section className="flex flex-col gap-4 place-items-center">
                {/* <div className="fixed"> */}
                <h1 className="text-3xl font-bold text-center text-primary">
                    Adding to Cart
                </h1>
                {/* </div> */}
                <h2 className="flex gap-3 text-xl text-secondary-dark">
                    {currentOrderedBookInfo.title}(
                    <span className="font-mono text-lime-300">
                        {currentOrderedBookInfo.price}$
                    </span>
                    )
                </h2>
            </section>

            <section className="flex flex-col gap-5">
                <p>Choose how you would like your book</p>
                <div className="flex w-full gap-4 place-content-center">
                    <button
                        type="button"
                        onClick={() => setChosenBookIsPDF(true)}
                        className={` rounded-2xl w-1/3 font-bold py-2 hover:bg-silver-very-light  bg-gradient-to-r ${chosenBookIsPDF
                            ? "from-primary-light to-primary text-secondary-dark"
                            : "from-silver-light to-silver text-silver-very-dark hover:text-lime-500"
                            }`}
                    >
                        PDF
                    </button>
                    <button
                        type="button"
                        onClick={() => setChosenBookIsPDF(false)}
                        className={`rounded-2xl w-1/3 py-2 font-bold hover:bg-silver-very-light bg-gradient-to-r  ${!chosenBookIsPDF
                            ? "from-primary-light to-primary text-secondary-dark"
                            : "from-silver-light to-silver text-silver-very-dark hover:text-lime-500"
                            }   `}
                    >
                        Papers
                    </button>
                </div>
            </section>

            <section className="flex flex-col gap-3">
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
                    className="p-4 border-b-2 outline-none text-secondary border-b-secondary"
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
                    className="p-4 border-b-2 outline-none text-secondary border-b-secondary"
                    id="edition"
                    onChange={(e) => setChosenEdition(e.target.value)}
                    value={chosenEdition}
                >
                    <option
                        value="third edition (last)"
                        className="text-secondary "
                    >
                        third edition (last)
                    </option>
                    <option
                        value="second edition"
                        className="text-secondary "
                    >
                        second edition
                    </option>
                    <option
                        value="first edition"
                        className="text-secondary"
                    >
                        first edition
                    </option>
                </select>
            </section>
            <hr />
            <section>
                <p className="text-secondary">
                    You have X items in your cart now, their price is X
                </p>
            </section>
            <div className='flex w-1/2 gap-10'>
                <button type='button' onClick={handleGoBack} className="w-2/3 p-2 text-xl font-bold duration-300 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-blue-700 hover:scale-105">Go back</button>
                <button
                    type="submit"
                    className="w-2/3 p-2 text-xl font-bold duration-300 place-self-center bg-primary rounded-xl bg-gradient-to-b from-primary to-blue-700 hover:scale-105"
                >
                    Add to Cart
                </button>
            </div>
        </form>
    );
};

export default OrderBookPage;
