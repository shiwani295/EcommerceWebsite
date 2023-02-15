import React from "react";

const CardItem = (props) => {
  return (
    <tr>
      <td>
        <img src={props.image} className="rounded" style={{ width: "50px" }} />
        <span style={{ marginLeft: "6px", fontWeight: "500" }}>
          {props.title}
        </span>
      </td>
      <td>
        <p>{props.price}</p>
      </td>
      <td className="">
        <input
          className="form-control-sm border border-light"
          id="amount_"
          type="number"
          max="5"
          min="1"
          step="1"
          defaultValue="1"
          style={{ width: "40px", marginRight: "15px" }}
        />
        <button className="border border-danger rounded bg-danger ">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CardItem;
