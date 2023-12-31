import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../CSS/HiddenSearchBar.scss";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  function handleClick(e) {
    setBgColor("#1a1a1a"); // Gray10 color
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white"); // white
    }
  }

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search" />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
