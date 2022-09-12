import BrewMethod from "./components/BrewMethod";
import Ingredient from "./components/Ingredient";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beansMass: 10, waterMass: 60 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ beansMass: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Brew Ratio</h1>
        </div>
        <BrewMethod />
        <Ingredient name="Beans" value={this.state.beansMass} onChange={this.handleChange} />
        <Ingredient name="Water" value={this.state.waterMass} />
      </div>
    );
  }
}

export default App;
