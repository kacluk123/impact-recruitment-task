import Image from "next/image";
import styles from "./page.module.css";
import { categorieService } from "@/services/CategoriesService/categories-service.impl";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const categories = await categorieService.getAllCategories();
  console.log(categories);

  return <div className={styles.container}>{category}</div>;
}
