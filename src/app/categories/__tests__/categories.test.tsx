import { render, screen } from "@testing-library/react";
import { CategoriesList } from "../components/categories-list/categories-list";

it("should display categories", async () => {
  render(
    <CategoriesList categories={["Category 1", "Category 2", "Category 3"]} />
  );

  screen.getByText("Category 1");
  screen.getByText("Category 2");
  screen.getByText("Category 3");
});
