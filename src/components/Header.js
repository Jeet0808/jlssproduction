import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>JLSS</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
