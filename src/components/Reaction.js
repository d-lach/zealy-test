import React, { useEffect, useState } from "react";
import { FaSmile } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { useToggle } from "react-use";
import { useReactions } from "../contexts/ReactionsContext";
import useClickOutside from "../hooks/useClickOutside";

export const Reaction = ({ reaction }) => {
  const [isTooltipVisible, toggleTooltip] = useToggle(false);
  const ref = React.useRef();
  useClickOutside(ref, () => toggleTooltip(false));

  const [inputText, setInputText] = useState(reaction.text);
  const [isEditing, toggleEdition] = useToggle(true);
  const { updateReactionText } = useReactions();

  useEffect(() => {
    setInputText(reaction.text);
  }, [reaction.text]);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTooltip();
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    toggleEdition(true);
  };

  const handleInputBlur = () => {
    toggleEdition(false);
    updateReactionText(reaction.id, inputText);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (event.keyCode === 13) toggleEdition(false);
  };

  return (
    <div
      ref={ref}
      className="absolute"
      onClick={handleIconClick}
      style={{ left: `${reaction.x}%`, top: `${reaction.y}%` }}
    >
      <FaSmile
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
        size="24"
        onClick={handleClick}
      />
      <Tooltip isVisible={isTooltipVisible}>
        {isEditing ? (
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="bg-transparent border-none"
            placeholder="Enter your comment"
            autoFocus
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span onClick={toggleEdition} className="cursor-pointer min-w-48">
            {inputText || "Enter your comment"}
          </span>
        )}
      </Tooltip>
    </div>
  );
};
