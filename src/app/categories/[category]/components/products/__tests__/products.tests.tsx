import { render, screen } from "@testing-library/react";
import { Products } from "../products";
import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";

const data: ServerResponseProduct[] = [
  {
    id: 1,
    title: "Product 1",
    price: 30,
    category: "Category 1",
    description: "test test",
    image: "/test-img",
  },
  {
    id: 2,
    title: "Product 2",
    price: 40,
    category: "Category 1",
    description: "test 123",
    image: "/test-img",
  },
];

test("should display products", async () => {
  render(<Products products={data} />);

  screen.getByText("30$");
  screen.getByText("Product 1");
  screen.getByAltText("Product 1");

  screen.getByText("40$");
  screen.getByText("Product 2");
  screen.getByAltText("Product 2");
});
