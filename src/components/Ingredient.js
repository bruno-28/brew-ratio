import React from "react";
import NumberInput from "./NumberInput";
import UnitOption from "./UnitOption";

export default function Ingredient(props) {

  function handleChange() {
    props.handleChange();
  }

  return (
    <div>
      <label>{props.name}: </label>
      <NumberInput name={props.name} value={props.value} onChange={handleChange} />
      <UnitOption />
    </div>
  );
}
