import styles from "./page.module.css";
import { categoriesService } from "@/services/CategoriesService/categories-service.impl";
import { GenericError } from "@/components/generic-error/generic-error";
import { Products } from "./components/products/products";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const products = await categoriesService.getProductForCategory(
    params.category
  );

  if ("error" in products) {
    redirect(`/`);
  }

  return (
    <div>
      <div className={styles.header_container}>
        <h2 className={styles.header}>{decodeURIComponent(params.category)}</h2>
        <h2 className={styles.sub_header}>
          Total items: {products.data.length}
        </h2>
      </div>
      <Link href="/categories" className={styles.link}>
        {"<"} Back to categories
      </Link>
      <Products products={products.data} />;
    </div>
  );
}
