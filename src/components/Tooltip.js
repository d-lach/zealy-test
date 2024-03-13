import React from "react";

const Tooltip = ({ children, isVisible }) => {
  return (
    <div
      className={`absolute z-10 p-2 bg-gray-200 border rounded shadow-lg ${isVisible ? "block" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default Tooltip;
