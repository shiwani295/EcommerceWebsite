import React, { useEffect, useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //console.log(action); //its will tell the action ADD and REMOVE
  //console.log(state.items); //initial there is no items and total amount

  //console.log("total Amount State", state.totalAmount);
  if (action.type === "ADD") {
    //console.log(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    // console.log(updatedTotalAmount); //amount you recivce when you add to card  and add all the amount according to quantity

    //** this one for check the item already exist or not in  header Cart
    //this for if you add one item 4 time so it will show you single item with 4 quantity

    //********start here */

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //console.log(existingCartItemIndex);

    const existingCartItem = state.items[existingCartItemIndex];
    //console.log(existingCartItem); //it will take all times of existingitem index like 1 (id)

    let updateItem;
    let updatedItems;

    if (existingCartItem) {
      //console.log("existing item");
      updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      console.log(updateItem);

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
      console.log(updateItem);
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  let existingCartItemIndex;
  if (action.type === "REMOVE") {
    existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.payload;
    });

    const existingCartItem = state.items[existingCartItemIndex];
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

  let useremailid = "";
  if (localStorage.getItem("email") === null) {
    useremailid = "";
  } else {
    useremailid = localStorage.getItem("email");
  }
  const plainTextEmail = useremailid.replace(/[^a-zA-Z0-9 ]/g, "");
  console.log(plainTextEmail);

  const addItemFromCartHandler = (item) => {
    const getData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://crudcrud.com/api/2dcb9a73017f4cc0a41dfdd3cd8ab7d3/Cart${plainTextEmail}`,
      getData
    )
      .then((response) => response.json())
      .then((data) => {
        const duplicateItem = data.findIndex((i) => i.id === item.id);
        console.log(duplicateItem);
        if (duplicateItem === -1 || undefined) {
          fetch(
            `https://crudcrud.com/api/2dcb9a73017f4cc0a41dfdd3cd8ab7d3/Cart${plainTextEmail}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(item),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("Add the DATA", data);
              console.log(item);
              dispatchCartAction({ type: "ADD", item: item });
            });
        } else {
          const totalQuantity = item.quantity + data[duplicateItem].quantity;
          console.log(totalQuantity);
          fetch(
            `https://crudcrud.com/api/2dcb9a73017f4cc0a41dfdd3cd8ab7d3/Cart${plainTextEmail}/${data[duplicateItem]._id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: totalQuantity,
              }),
            }
          )
            .then((response) => response.json())
            .then((items) => {
              dispatchCartAction({ type: "add", item: items });
              console.log("put");
            });
        }
      });
  };

  useEffect(() => {
    const getData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://crudcrud.com/api/2dcb9a73017f4cc0a41dfdd3cd8ab7d3/Cart${plainTextEmail}`,
      getData
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((items) => {
          dispatchCartAction({ type: "ADD", item: items });
        });
        console.log("get the item", data);
      });
    //
  }, [dispatchCartAction, plainTextEmail]);

  ///////////////
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
