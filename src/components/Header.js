import React from "react";
import Avatar from "./Avatar.js";
import "../styles/Header.css";

function Header(props) {
  return (
    <header className="rc-header">
      <Avatar />
      <h1 className="rc-title">{props.name}'s React Testing Ground</h1>
    </header>
  );
}

export default Header;
