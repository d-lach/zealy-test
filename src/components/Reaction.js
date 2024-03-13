import React from "react";
import { FaSmile } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { useToggle } from "react-use";

export const Reaction = () => {
  const [isTooltipVisible, toggleTooltip] = useToggle(false);

  return (
    <div className="relative">
      <FaSmile
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
        size="24"
        onClick={toggleTooltip}
      />
      <Tooltip isVisible={isTooltipVisible}>This is your reaction!</Tooltip>
    </div>
  );
};
