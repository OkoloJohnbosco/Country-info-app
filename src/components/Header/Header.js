import React from "react";
import "./Header.css";
import { IoMoonOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Header({ darkMode, setDarkMode, sticky }) {
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className={`header ${sticky ? "header__sticky" : ""}`}>
      <h1>Where in the world?</h1>
      <div className="header__icon" onClick={toggleDarkMode}>
        <FaMoon />
      </div>
    </div>
  );
}

export default Header;
