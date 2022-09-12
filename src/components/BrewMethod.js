import React, { useState } from 'react'
import RatioOption from './RatioOption'

export default function BrewMethod() {
  const [method, setMethod] = useState('pourOver');
  const [ratio, setRatio] = useState('1:6');

  function handleChange(event) {
    let brewMethod = event.target.value;
    setMethod(brewMethod);
    switch (brewMethod) {
      case 'pourOver':
        setRatio('1:6');
        break;
      case 'autoDrip':
        setRatio('1:4');
        break;
      case 'frenchPress':
        setRatio('1:8');
        break;
      default:
    }
  }

  return (
    <>
      <label >Choose brew method: </label>
      <select
        defaultValue={method}
        onChange={handleChange}
      >
        <option value="pourOver">Pour Over</option>
        <option value="autoDrip">Auto Drip</option>
        <option value="frenchPress">French Press</option>
      </select>
      <RatioOption ratio={ratio} />
    </>
  )
}
