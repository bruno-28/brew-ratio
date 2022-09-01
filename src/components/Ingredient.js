import React from "react";
import NumberInput from "./NumberInput";
import UnitOption from "./UnitOption";

export default function Ingredient(props) {
  return (
    <div>
      <label>{props.name}: </label>
      <NumberInput name="{props.name}" />
      <UnitOption />
    </div>
  );
}
