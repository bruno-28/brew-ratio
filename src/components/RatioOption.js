import React from "react";
import RatioButton from "./RatioButton";

export default function RatioOption() {
  return (
    <div>
      <label>Ratio: </label>
      <RatioButton ratio="1:6" />
    </div>
  );
}
