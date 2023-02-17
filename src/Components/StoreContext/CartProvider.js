import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // console.log(action);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    //** this one for check the item already exist or not in  header Cart
    //this for if you add one item 4 time so it will show you single item with 4 quantity

    //********start here */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updateItem;
    let updatedItems;

    if (existingCartItem) {
      updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };

      //copy the existing items
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //***end here */

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.payload;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    //console.log(existingCartItem);

    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.quantity;

    return {
      ...state,
      items: state.items.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    // console.log(item);
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items, //current item and amount
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
// const updatedTotalAmount = state.totalAmount - existingCartItem.price;
// console.log(existingCartItem.quantity);
//if (existingCartItem.quantity === 1) {
//////////////////////////////////////////////
//}
// } else {

//   updatedItems = [...state.items];
//   updatedItems[existingCartItemIndex] = updatedItem;
// }
