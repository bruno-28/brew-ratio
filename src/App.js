import { useEffect, useState } from "react";

const App = () => {
  const [method, setMethod] = useState('pourOver');
  const [ratio, setRatio] = useState('1:8');
  const [ratioNum, setRatioNum] = useState(1/8);
  const [massBeans, setMassBeans] = useState(10);
  const [massWater, setMassWater] = useState(60);

  useEffect(() => {
    setMassWater(massBeans / ratioNum)
  }, [ratio, massBeans, ratioNum])

  function handleMethodChange(event) {
    let brewMethod = event.target.value;

    setMethod(brewMethod);

    switch (brewMethod) {
      case 'pourOver':
        setRatio('1:8');
        setRatioNum(1 / 8);
        break;
      case 'autoDrip':
        setRatio('1:4');
        setRatioNum(1 / 4);
        break;
      case 'frenchPress':
        setRatio('1:15');
        setRatioNum(1 / 15);
        break;
      default:
    }
  }

  const handleBeansChange = (e, ratioNum) => {
    setMassBeans(e.target.value);
    setMassWater(e.target.value / ratioNum);
  }

  const handleWaterChange = (e, ratioNum) => {
    setMassWater(e.target.value);
    setMassBeans(e.target.value * ratioNum);
  }

  return (
    <div className="content">
      <div className="title">
        <h1>Brew Ratio</h1>
      </div>
      <div className="brew-method">
        <label>Choose brew method: </label>
        <select
          defaultValue={method}
          onChange={handleMethodChange}
        >
          <option value="pourOver">Pour Over</option>
          <option value="autoDrip">Auto Drip</option>
          <option value="frenchPress">French Press</option>
        </select>
      </div>
      <label>Ratio: {ratio}</label>
      <div className="ingredient">
        <label>Beans: </label>
        <input
          className="select"
          type="number"
          min="0"
          value={massBeans}
          onChange={(e) => handleBeansChange(e, ratioNum)}
        ></input>
        <select
          disabled
        >
          <option value="gram">g</option>
          <option value="tablespoon">tbsp</option>
          <option value="ounces">oz</option>
        </select>
      </div>
      <div className="ingredient">
        <label>Water: </label>
        <input
          className="select"
          type="number"
          min="0"
          value={massWater}
          onChange={(e) => handleWaterChange(e, ratioNum)}
        ></input>
        <select
          disabled
        >
          <option value="gram">g</option>
          <option value="tablespoon">tbsp</option>
          <option value="ounces">oz</option>
        </select>
      </div>
    </div>
  );
}

export default App;