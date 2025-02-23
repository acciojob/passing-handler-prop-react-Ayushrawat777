import React from 'react';

const ColourSelector = ({ config, handleColorSelection }) => {
  const { label, background, classname } = config;

  return (
    <button
      className={classname}
      style={{ background }}
      data-testid={config.key} // Add data-testid attribute
      onClick={() => handleColorSelection({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
