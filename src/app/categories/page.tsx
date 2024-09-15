import styles from "./page.module.css";
import { categoriesService } from "@/services/CategoriesService/categories-service.impl";
import { CategoriesList } from "./components/categories-list/categories-list";
import { GenericError } from "@/components/generic-error/generic-error";

export default async function Categories() {
  const categories = await categoriesService.getAllCategories();

  if ("error" in categories) {
    return <GenericError errorMessage={categories.error} />;
  }

  return (
    <div className={styles.container}>
      <CategoriesList categories={categories.data} />
    </div>
  );
}
