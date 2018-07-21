import React, { Component } from "react";
import "../styles/LightBulb.css";

class LightBulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      activated: !prevState.activated
    }));
    console.log("Toggle clicked");
    console.log(this.activated);
  }

  render() {
    if (this.state.activated) {
      return (
        <div className="bulb-section">
          <h1 className="bulb">Here is a turned on state component</h1>
          <button onClick={this.toggle}>Click Here!</button>
        </div>
      );
    } else {
      return (
        <div className="bulb-section">
          <h1 className="bulbOff">Here is a turned off state component</h1>
          <button onClick={this.toggle}>Click Here!</button>
        </div>
      );
    }
  }
}

export default LightBulb;
