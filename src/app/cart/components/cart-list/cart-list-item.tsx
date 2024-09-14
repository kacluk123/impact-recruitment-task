import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";
import styles from "./cart-list.module.css";
import Image from "next/image";
import { CartItem as CartItemType } from "@/context/cart-context";

interface CartItemProps {
  cartItem: CartItemType;
}

export const CartListItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item__header}>
        <Image
          alt={cartItem.product.title}
          src={cartItem.product.image}
          width={125}
          height={125}
          style={{
            objectFit: "contain",
          }}
        />
        <h2>{cartItem.product.price}$</h2>
      </div>
      <div className={styles.product__name}>
        <h3>{cartItem.product.title}</h3>
      </div>
    </div>
  );
};
