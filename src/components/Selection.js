import React, { useState } from "react";

const Selection = ({ item, selectedColor }) => {
  const [background, setBackground] = useState(item.background); // Initial background color

  const handleClick = () => {
    if (selectedColor) {
      setBackground(selectedColor); // Update background with selected color
    }
  };

  return (
    <div
      className="fix-box"
      style={{ background }}
      onClick={handleClick}
    >
      <h2>{item.box}</h2>
    </div>
  );
};

export default Selection;
