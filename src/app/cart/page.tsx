import styles from "./page.module.css";
import { CartItemList } from "./components/cart-list/cart-list";

export default function Cart() {
  return (
    <div className={styles.container}>
      <CartItemList />
    </div>
  );
}
