import React from 'react'

export default function BrewMethod() {
  return (
    <div>
      <label for="typeOfBrew">Choose brew method: </label>
      <select name="typeOfBrew" id="typeOfBrew">
        <option value="pourOver">Pour Over</option>
        <option value="autoDrip">Auto Drip</option>
        <option value="frenchPress">French Press</option>
      </select>
    </div>
  )
}
