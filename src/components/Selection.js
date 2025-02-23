import React, { useState } from 'react';

const Selection = ({ index, selectedColor }) => {
  const [boxColor, setBoxColor] = useState({ background: "" });

  const handleBoxClick = () => {
    setBoxColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      style={{ ...boxColor, backgroundColor: boxColor.background || 'transparent' }}
      data-testid={`selection-${index}`} // Add data-testid attribute
      onClick={handleBoxClick}
    >
      Selection {index + 1}
    </div>
  );
};

export default Selection;
