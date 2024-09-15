"use client";

import { ServerResponseProduct } from "@/services/CategoriesService/categories-service.types";
import { createContext, useContext, useReducer } from "react";

export type CartItem = {
  product: ServerResponseProduct;
  count: number;
};

type State = {
  cartItems: CartItem[];
};

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY",
  DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

type Action =
  | { type: ActionTypes.ADD_TO_CART; value: ServerResponseProduct }
  | { type: ActionTypes.INCREASE_ITEM_QUANTITY; value: { id: number } }
  | { type: ActionTypes.DECREASE_ITEM_QUANTITY; value: { id: number } }
  | { type: ActionTypes.REMOVE_FROM_CART; value: { id: number } };

type AppContextType = {
  cartItems: CartItem[];
  dispatch: React.Dispatch<Action>;
  fullItemsPrice: number;
  allItemsQuantity: number;
};

const searchCartItem = (cartItems: CartItem[], searchedId: number) =>
  cartItems.find((item) => item.product.id === searchedId);

const changeQuantityOfCartItem = (
  cartItems: CartItem[],
  searchedId: number,
  numberToIncrease: (currentNumber: number) => number
) =>
  cartItems.map((cartItem) =>
    cartItem.product.id === searchedId
      ? { ...cartItem, count: numberToIncrease(cartItem.count) }
      : cartItem
  );

const removeItemFromCart = (cartItems: CartItem[], idToRemove: number) =>
  cartItems.filter((cartItem) => cartItem.product.id !== idToRemove);

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const searchedCartItem = searchCartItem(state.cartItems, action.value.id);
      if (searchedCartItem) {
        return {
          cartItems: changeQuantityOfCartItem(
            state.cartItems,
            action.value.id,
            (currentCount) => currentCount + 1
          ),
        };
      }

      return {
        cartItems: [
          ...state.cartItems,
          {
            product: action.value,
            count: 1,
          },
        ],
      };
    }
    case ActionTypes.INCREASE_ITEM_QUANTITY: {
      const searchedCartItem = searchCartItem(state.cartItems, action.value.id);

      if (searchedCartItem) {
        return {
          cartItems: changeQuantityOfCartItem(
            state.cartItems,
            action.value.id,
            (currentCount) => currentCount + 1
          ),
        };
      }
    }

    case ActionTypes.DECREASE_ITEM_QUANTITY: {
      const searchedCartItem = searchCartItem(state.cartItems, action.value.id);

      if (searchedCartItem?.count === 1) {
        return {
          cartItems: removeItemFromCart(state.cartItems, action.value.id),
        };
      } else if (searchedCartItem) {
        return {
          cartItems: changeQuantityOfCartItem(
            state.cartItems,
            action.value.id,
            (currentCount) => currentCount - 1
          ),
        };
      }
    }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        cartItems: removeItemFromCart(state.cartItems, action.value.id),
      };
  }
}

const CartContext = createContext<AppContextType>({} as AppContextType);

function CartProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const allItemsQuantity = state.cartItems.reduce((cart, currentItem) => {
    return cart + currentItem.count;
  }, 0);

  const fullItemsPrice = state.cartItems.reduce((cart, currentItem) => {
    return cart + currentItem.product.price * currentItem.count;
  }, 0);

  const value = {
    cartItems: state.cartItems,
    dispatch,
    fullItemsPrice,
    allItemsQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a ContextProvider");
  }
  return context;
}

export { CartProvider, useCart };
