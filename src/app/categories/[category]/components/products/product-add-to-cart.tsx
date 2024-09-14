"use client";

import { Button } from "@/components/button/button";
import { ActionTypes, useCart } from "@/context/cart-context";
import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";

interface ProductProps {
  product: ServerResponseProduct;
}

export const ProductAddToCart = ({ product }: ProductProps) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ value: product, type: ActionTypes.ADD_TO_CART });
  };

  return <Button onClick={addToCart}>Add to cart</Button>;
};
