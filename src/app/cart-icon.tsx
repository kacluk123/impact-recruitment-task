"use client";

import Image from "next/image";
import styles from "./layout.module.css";
import { useCart } from "@/context/cart-context";

export const CartIcon = () => {
  const { allItemsQuantity } = useCart();

  const quantity = allItemsQuantity > 9 ? "9+" : allItemsQuantity;

  return (
    <div className={styles.cart}>
      <Image src="/svg/cart.svg" alt="cart-icon" width={40} height={40} />
      {allItemsQuantity > 0 ? (
        <div className={styles.cart__count}>{quantity}</div>
      ) : null}
    </div>
  );
};
