import React, { useState } from "react";
import "./Header.css";
import Home from "./Home"; // Import Home component
import Aboutus from "./Aboutus"; // Import AboutUs component
import Projects from "./Projects"; // Import AboutUs component
import Contact from "./Contact";

function Header() {
  const [currentSection, setCurrentSection] = useState("home"); // State to track which section is currently displayed


  // Function to handle section change
  const handleClick = (section) => {
    setCurrentSection(section); // Update the section to be shown
  };

  return (
    <div>
      <header className="header">
        <h1>JLSS</h1>
     
        <nav>
          <button onClick={() => handleClick("home")}>Home</button>
       <a href="#projects">Projects</a>
       
          <a href="#contact">Contact</a>
          <button onClick={() => handleClick("about")}>About Us</button>
        </nav>
      </header>

     {/* Conditionally render the Home or AboutUs section based on the state */}
     {currentSection === "home" ? <Home /> : null}
      {currentSection === "about" ? <Aboutus /> : null}
      {currentSection === "contact" ? <Contact />: null}
    </div>
  );
}

export default Header;
