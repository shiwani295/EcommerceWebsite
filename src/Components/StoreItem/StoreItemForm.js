import React, { useRef, useState } from "react";

const StoreItemForm = (props) => {
  const [errorForAmount, setErrorForAmount] = useState(true);
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enternedquantity = quantityInputRef.current.value;
    const enternedAmounquantitytNumber = +enternedquantity;

    if (
      enternedquantity.trim().length == 0 ||
      enternedAmounquantitytNumber < 1 ||
      enternedAmounquantitytNumber > 5
    ) {
      setErrorForAmount(false);
      return;
    }
    props.onAddToCart(enternedAmounquantitytNumber);
    // console.log(enternedAmounquantitytNumber);
  };
  return (
    <form className="form-control-sm form " onSubmit={submitHandler}>
      <input
        ref={quantityInputRef}
        //  id= "amount_" + props.id,
        id="amount"
        type="number" //the number always a string here
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        //value={props.quantity}
        className="mb-2"
      />
      <button className="FormButton"> +Add to Cart</button>
      {!errorForAmount && <p> Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default StoreItemForm;
