import BrewMethod from "./components/BrewMethod";
import RatioOption from "./components/RatioOption";
import Ingredient from "./components/Ingredient";

function App() {
  return (
    <div>
      <div>
        <h1>Brew Ratio</h1>
      </div>
      <BrewMethod />
      <RatioOption />
      <Ingredient name="Beans" />
      <Ingredient name="Water" />
    </div>
  );
}

export default App;
