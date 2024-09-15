"use client";

import styles from "./cart-list.module.css";
import { useCart } from "@/context/cart-context";
import { CartListItem } from "./cart-list-item";
import { Button } from "@/components/button/button";

export const CartItemList = () => {
  const { cartItems, fullItemsPrice } = useCart();
  return (
    <div className={styles.cart_items}>
      {cartItems.map((carItem) => (
        <CartListItem key={carItem.product.id} cartItem={carItem} />
      ))}
      <h2>Total price: {fullItemsPrice}$</h2>
      <Button>Checkout</Button>
    </div>
  );
};
