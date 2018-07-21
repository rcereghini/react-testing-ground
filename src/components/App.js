import React, { Component } from "react";
import Header from "./Header.js";
import Intro from "./Intro.js";
import Footer from "./Footer.js";
import LightBulb from "./LightBulb.js";

import "../styles/App.css";

const ctColor = "#00aeef";
const intro =
  "Welcome to my react testing ground. This is where I will build fun components and show off my skills. Don't mind the poor styling. Going retro with this one.";
const mission = "It is my mission to fully understand React.";
const plan = "I will let go of the hands of tutorial creators.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Robert" />
        <section className="introBox">
          <Intro introText={intro} />
          <LightBulb />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
