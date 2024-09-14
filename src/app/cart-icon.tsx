"use client";

import Image from "next/image";
import styles from "./layout.module.css";
import { useCart } from "@/context/cart-context";

export const CartIcon = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  const calculateAllQuantity = (cartItems || []).reduce((cart, currentItem) => {
    return cart + currentItem.count;
  }, 0);

  return (
    <div className={styles.cart}>
      <Image src="/svg/cart.svg" alt="cart-icon" width={40} height={40} />
      {calculateAllQuantity > 0 ? (
        <div className={styles.cart__count}>
          {calculateAllQuantity > 9 ? "9+" : calculateAllQuantity}
        </div>
      ) : null}
    </div>
  );
};
