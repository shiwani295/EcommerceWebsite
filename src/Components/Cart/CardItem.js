import React from "react";

const CardItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <tr className={{ style: "overflow" }}>
      <td>
        <img
          src={props.image}
          className="rounded"
          style={{ width: "50px" }}
          alt=""
        />
        <span style={{ marginLeft: "6px", fontWeight: "500" }}>
          {props.title}
        </span>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td className=" quantity">
        <span style={{ fontWeight: "bold" }}>x{props.quantity}</span>
      </td>
      <td>
        <button
          className="border border-danger rounded bg-danger text-white"
          onClick={props.onRemove}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CardItem;
{
  /* <input
className="form-control-sm border border-light"
id="amount_"
type="number"
max="5"
min="1"
step="1"
defaultValue="1"
style={{ width: "40px", marginRight: "15px" }}
/> */
}
