import { ServerResponseCategories } from "@/services/CategoriesService/categories-service.types";
import styles from "./categories-list.module.css";
import Link from "next/link";

interface CategoriesListProps {
  categories: ServerResponseCategories;
}
export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className={styles.list}>
      {categories.map((category) => {
        return (
          <Link href={`/categories/${category}`} key={category}>
            <div className={styles.list__element}>{category}</div>
          </Link>
        );
      })}
    </div>
  );
};
