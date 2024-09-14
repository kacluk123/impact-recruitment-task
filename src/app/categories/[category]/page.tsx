import Image from "next/image";
// import styles from "./page.module.css";
import { categoriesService } from "@/services/CategoriesService/categories-service.impl";
import { GenericError } from "@/components/generic-error/generic-error";
import { Products } from "./components/products/products";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const products = await categoriesService.getProductForCategory(
    params.category
  );

  if ("error" in products) {
    return <GenericError errorMessage={products.error} />;
  }

  return <Products products={products.data} />;
}
