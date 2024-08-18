import { CartItemType } from "@/types/type";
import React, { createContext, useContext, useReducer } from "react";

interface CartContextType {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  clearAll: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearAll: () => {},
});

interface CartState {
  items: CartItemType[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItemType }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "CLEAR_ALL" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let newItems;
    let newAmount;

    if (existingItem) {
      newAmount =
        state.totalAmount -
        existingItem.price * existingItem.amount +
        action.item.price * action.item.amount;

      const newItem = {
        ...existingItem,
        amount: action.item.amount,
      };
      newItems = [...state.items];
      newItems[existingItemIndex] = newItem;
    } else {
      newItems = state.items.concat(action.item);
      newAmount = state.totalAmount + action.item.price * action.item.amount;
    }

    return {
      items: newItems,
      totalAmount: newAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const removeItem = state.items[removeItemIndex];
    const newItems = state.items.filter((item) => item.id !== action.id);
    const newAmount = state.totalAmount - removeItem.price * removeItem.amount;
    return {
      items: newItems,
      totalAmount: newAmount,
    };
  }

  if (action.type === "CLEAR_ALL") {
    return initialState;
  }
  return initialState;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, initialState);

  const clearAll = () => {
    dispatchAction({ type: "CLEAR_ALL" });
  };

  const addItemHandler = (item: CartItemType) => {
    dispatchAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id: number) => {
    dispatchAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearAll: clearAll,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => useContext<CartContextType>(CartContext);
