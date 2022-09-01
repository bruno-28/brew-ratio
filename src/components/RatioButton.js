import React from "react";

export default function RatioButton(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked ratio.");
  }

  return (
    <form onSubmit={handleClick}>
      <button type="submit">{props.ratio}</button>
    </form>
  )
}
