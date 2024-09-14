"use client";

import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";
import styles from "./cart-list.module.css";
import { useCart } from "@/context/cart-context";
import { CartListItem } from "./cart-list-item";

export const CartItemList = () => {
  const { cartItems } = useCart();
  return (
    <div className={styles.cart_items}>
      {cartItems.map((carItem) => (
        <CartListItem key={carItem.product.id} cartItem={carItem} />
      ))}
    </div>
  );
};
