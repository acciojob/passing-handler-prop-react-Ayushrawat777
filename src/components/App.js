import React, { useState } from "react";
import "../styles/App.css";
import ColourSelector from "./components/ColourSelector";
import Selection from "./components/Selection";

const App = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Manages the currently selected color

  // Data for color options
  const colorData = [
    {
      key: "aqua",
      label: "Blue",
      classname: "btn-blue",
      background: "rgb(34, 193, 195)",
    },
    {
      key: "orange",
      label: "Orange",
      classname: "btn-orange",
      background: "rgb(221, 112, 18)",
    },
    {
      key: "green",
      label: "Green",
      classname: "btn-green",
      background: "rgb(44, 209, 88)",
    },
  ];

  // Data for selection boxes
  const boxData = [
    { box: "selection1", background: "rgb(34, 193, 195)" },
    { box: "selection2", background: "rgb(221, 112, 18)" },
    { box: "selection3", background: "rgb(44, 209, 88)" },
  ];

  const title = "Select the gradient and then the Box to change the color";

  return (
    <div className="container">
      <h5 className="heading">{title}</h5>
      <div className="master">
        <div className="row">
          {colorData.map((item) => (
            <ColourSelector
              key={item.key}
              item={item}
              selectNextBackground={(color) =>
                setSelectedColor(color.background)
              } // Update selected color
            />
          ))}
        </div>
        <div className="row" id="children-wrapper">
          {boxData.map((item, key) => (
            <Selection
              key={key}
              item={item}
              selectedColor={selectedColor} // Pass selected color to each Selection
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
