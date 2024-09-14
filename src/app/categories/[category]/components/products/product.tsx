import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";
import styles from "./products.module.css";
import Image from "next/image";
import { Button } from "@/components/button/button";
import { ProductAddToCart } from "./product-add-to-cart";

interface ProductProps {
  product: ServerResponseProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__header}>
        <Image
          alt={product.description}
          src={product.image}
          width={125}
          height={125}
          style={{
            objectFit: "contain",
          }}
        />
        <h2>{product.price}$</h2>
      </div>
      <div className={styles.product__name}>
        <h3>{product.title}</h3>
      </div>
      <ProductAddToCart product={product} />
    </div>
  );
};
