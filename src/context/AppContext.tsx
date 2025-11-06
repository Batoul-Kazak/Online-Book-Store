"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { mockUsers } from "@/_lib/index";

export const AppContext = createContext({});

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentLoggedinUser, setCurrentLoggedinUser] = useState("user_6");
  const [currentUserCurrentCart, setCurrentUserCurrentCart] = useState<any[]>(
    []
  );

  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [bookDetails, setBookDetails] = useState({});
  const [currentOrderedBookInfo, setCurrentOrderedBookInfo] = useState({});
  const [chosenBookIsPDF, setChosenBookIsPDF] = useState(true);
  const [chosenBookLanguage, setChosenBookLanguage] = useState("en");
  const [isWantTranslatedCopy, setIsWantTranslatedCopy] = useState(false);
  const [chosenEdition, setChosenEdition] = useState("third");
  const [normalBookCopies, setNormalBookCopies] = useState(1);

  useEffect(() => {
    const savedCart = localStorage.getItem("currentUserCurrentCart");
    if (savedCart) {
      setCurrentUserCurrentCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "currentUserCurrentCart",
      JSON.stringify(currentUserCurrentCart)
    );
  }, [currentUserCurrentCart]);

  function handleAddToCartPopup() {
    setShowAddToCartPopup(false);
  }

  return (
    <AppContext.Provider
      value={{
        currentLoggedinUser,
        setCurrentLoggedinUser,
        currentUserCurrentCart,
        setCurrentUserCurrentCart,
        showAddToCartPopup,
        setShowAddToCartPopup,
        bookDetails,
        setBookDetails,
        currentOrderedBookInfo,
        setCurrentOrderedBookInfo,
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
        handleAddToCartPopup,
        showSignUpPopup,
        setShowSignUpPopup,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
