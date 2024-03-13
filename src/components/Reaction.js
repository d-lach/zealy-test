import React from "react";
import { FaSmile } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { useToggle } from "react-use";

export const Reaction = (divProps) => {
  const [isTooltipVisible, toggleTooltip] = useToggle(false);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTooltip();
  };

  return (
    <div className="absolute" {...divProps}>
      <FaSmile
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
        size="24"
        onClick={handleClick}
      />
      <Tooltip isVisible={isTooltipVisible}>This is your reaction!</Tooltip>
    </div>
  );
};
