import { CartItemType } from "@/types/type";
import React, { createContext, useContext, useReducer } from "react";

type DiscountType = "Fixed" | "Percentage" | "";

interface Discount {
  discountType: DiscountType;
  discountValue: number;
}

interface CartContextType {
  items: CartItemType[];
  totalAmount: number;
  discount: Discount;
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  addDiscount: (discount: Discount) => void;
  clearDiscount: () => void;
  clearAll: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  discount: {
    discountType: "",
    discountValue: 0,
  },
  addItem: () => {},
  removeItem: () => {},
  addDiscount: () => {},
  clearDiscount: () => {},
  clearAll: () => {},
});

interface CartState {
  items: CartItemType[];
  totalAmount: number;
  discount: Discount;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  discount: {
    discountType: "",
    discountValue: 0,
  },
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItemType }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "CLEAR_ALL" }
  | { type: "DISCOUNT"; discount: Discount }
  | { type: "CLEAR_DISCOUNT" };

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

    let newDiscountValue;
    if (state.discount.discountType === "Percentage") {
      newDiscountValue = newAmount * 0.1;
    } else {
      newDiscountValue = state.discount.discountValue;
    }

    return {
      items: newItems,
      totalAmount: newAmount,
      discount: {
        discountType: state.discount.discountType,
        discountValue: newDiscountValue,
      },
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const removeItem = state.items[removeItemIndex];
    const newItems = state.items.filter((item) => item.id !== action.id);
    const newAmount = state.totalAmount - removeItem.price * removeItem.amount;
    let newDiscountValue;
    if (state.discount.discountType === "Percentage") {
      newDiscountValue = newAmount * 0.1;
    } else {
      newDiscountValue = state.discount.discountValue;
    }
    return {
      items: newItems,
      totalAmount: newAmount,
      discount: {
        discountType: state.discount.discountType,
        discountValue: newDiscountValue,
      },
    };
  }

  if (action.type === "DISCOUNT") {
    const discountType: DiscountType = action.discount.discountType;
    const newTotalAmount: number =
      state.totalAmount - action.discount.discountValue;

    return {
      items: state.items,
      totalAmount: newTotalAmount,
      discount: {
        discountType,
        discountValue: action.discount.discountValue,
      },
    };
  }

  if (action.type === "CLEAR_DISCOUNT") {
    const newTotalAmount = state.totalAmount + state.discount.discountValue;
    return {
      items: state.items,
      totalAmount: newTotalAmount,
      discount: {
        discountType: "",
        discountValue: 0,
      },
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

  const discountHandler = (discount: Discount) => {
    dispatchAction({ type: "DISCOUNT", discount });
  };

  const clearDiscountHandler = () => {
    dispatchAction({ type: "CLEAR_DISCOUNT" });
  };

  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    discount: cartState.discount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    addDiscount: discountHandler,
    clearDiscount: clearDiscountHandler,
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
