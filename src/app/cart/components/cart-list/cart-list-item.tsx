import styles from "./cart-list.module.css";
import Image from "next/image";
import {
  ActionTypes,
  CartItem as CartItemType,
  useCart,
} from "@/context/cart-context";
import { Button } from "@/components/button/button";

interface CartItemProps {
  cartItem: CartItemType;
}

export const CartListItem = ({ cartItem }: CartItemProps) => {
  const { dispatch } = useCart();

  const handleIncreaseItemQuantity = () => {
    dispatch({
      type: ActionTypes.INCREASE_ITEM_QUANTITY,
      value: {
        id: cartItem.product.id,
      },
    });
  };

  const handleDecreaseItemQuantity = () => {
    dispatch({
      type: ActionTypes.DECREASE_ITEM_QUANTITY,
      value: {
        id: cartItem.product.id,
      },
    });
  };

  const handleRemoveItemQuantity = () => {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      value: {
        id: cartItem.product.id,
      },
    });
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item__left}>
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
      <div className={styles.cart_item__right}>
        <div className={styles.cart_item__price_info}>
          <span>x{cartItem.count}</span>{" "}
          <span>{cartItem.count * cartItem.product.price}$</span>
        </div>
        <div className={styles.cart_item__butons}>
          <Button
            onClick={handleIncreaseItemQuantity}
            aria-label="Increase item quantity"
          >
            <Image src="/svg/add.svg" alt="add-icon" width={20} height={20} />
          </Button>
          <Button
            onClick={handleDecreaseItemQuantity}
            aria-label="Decrease item quantity"
          >
            <Image
              src="/svg/minus.svg"
              alt="minus-icon"
              width={20}
              height={20}
            />
          </Button>
          <Button
            onClick={handleRemoveItemQuantity}
            aria-label="Remove from cart"
          >
            <Image
              src="/svg/trash.svg"
              alt="remove-icon"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
