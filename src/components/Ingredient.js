import React, { useState } from "react";

const Ingredient = ({ name, defaultValue }) => {
  const [mass, setMass] = useState(defaultValue);

  return (
    <div>
      <label>{name}: </label>
      <input
        type="number"
        min="0"
        value={mass}
        onChange={(e) => setMass(e.target.value)}
      ></input>
      <select>
        <option value="gram">g</option>
        <option value="tablespoon">tbsp</option>
        <option value="ounces">oz</option>
      </select>
    </div>
  );
}

export default Ingredient;