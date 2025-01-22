import React from "react";

const ColourSelector = ({ item, selectNextBackground }) => {
  const handleClick = () => {
    selectNextBackground(item); // Pass the selected background color
  };

  return (
    <button
      className={item.classname}
      onClick={handleClick}
      style={{ backgroundColor: item.background }}
    >
      {item.label}
    </button>
  );
};

export default ColourSelector;
