import React, { Component } from "react";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";
import LightBulb from "./components/LightBulb.js";

import "./App.css";

const ctColor = "#00aeef";
const intro =
  "Welcome to my react App. This is where I will build fun components and show off my skills.";
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
