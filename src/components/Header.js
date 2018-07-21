import React from "react";
import Avatar from "./Avatar.js";
import "../styles/Header.css";

function Header(props) {
  return (
    <header className="rc-header">
      <Avatar />
      <h1 className="rc-title">Welcome to React {props.name}</h1>
    </header>
  );
}

export default Header;
