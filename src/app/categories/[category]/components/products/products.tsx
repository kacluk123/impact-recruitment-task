import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";
import styles from "./products.module.css";
import { Product } from "./product";

interface ProductsProps {
  products: ServerResponseProduct[];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
