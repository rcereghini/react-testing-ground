import React from "react";
import "../styles/Intro.css";

function Intro(props) {
  return (
    <div className="rc-intro-container">
      <p className="rc-intro-p">{props.introText}</p>
    </div>
  );
}

export default Intro;
