import React from "react";

export default function NumberInput(props) {
  return (
    <input
      type="number"
      id={props.name}
      name={props.name}
      min="0"
      max="100000"
      value={props.value}
      onChange={props.handleChange}
    ></input>
  );
}
