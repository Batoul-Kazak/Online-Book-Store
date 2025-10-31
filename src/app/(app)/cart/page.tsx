"use client";
import { useContext } from "react";
import CartPage from "@/components/ui/CartPage/CartPage";
import { AppContext } from "@/context/AppContext";
import { notFound } from "next/navigation";

const Cart = () => {
  const { currentLoggedinUser } = useContext(AppContext);

  if (!currentLoggedinUser)
    return notFound();
  return <CartPage />;
};

export default Cart;
