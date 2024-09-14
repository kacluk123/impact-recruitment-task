import Image from "next/image";
import styles from "./page.module.css";
import { categorieService } from "@/services/CategoriesService/categories-service.impl";
import { CategoriesList } from "./components/categories-list/categories-list";

export default async function Home() {
  const categories = await categorieService.getAllCategories();
  console.log(categories);

  return (
    <div className={styles.container}>
      <CategoriesList categories={categories} />
    </div>
  );
}
