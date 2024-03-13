import React, { useEffect, useState } from "react";
import { FaRegMeh, FaRegSmile, FaRegTired } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { useToggle } from "react-use";
import { useReactions } from "../contexts/ReactionsContext";
import useClickOutside from "../hooks/useClickOutside";
import classNames from "classnames";
const Icons = {
  smile: FaRegSmile,
  neutral: FaRegMeh,
  sad: FaRegTired,
};

export const Reaction = ({ reaction }) => {
  const [isTooltipVisible, toggleTooltip] = useToggle(false);
  const ref = React.useRef();
  useClickOutside(ref, () => toggleTooltip(false));

  const [inputText, setInputText] = useState(reaction.text);
  const [isEditing, toggleEdition] = useToggle(true);
  const { updateReactionText, updateReactionType } = useReactions();

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

  const selectIcon = (type) => {
    updateReactionType(reaction.id, type);
  };

  const Icon = Icons[reaction.type];
  return (
    <div
      ref={ref}
      className="absolute "
      onClick={handleIconClick}
      style={{ left: `${reaction.x}%`, top: `${reaction.y}%` }}
    >
      <div
        className={
          "hover:bg-gray-200 text-green-50 cursor-pointer rounded-lg p-2"
        }
      >
        <Icon
          className={classNames({
            "text-green-600": reaction.type === "smile",
            "text-black": reaction.type === "neutral",
            "text-red-600": reaction.type === "sad",
          })}
          size="24"
          onClick={handleClick}
        />
      </div>
      <Tooltip isVisible={isTooltipVisible}>
        <div className="flex flex-col gap-2">
          <div className="flex space-x-2 mt-2">
            {Object.entries(Icons).map(([type, Icon]) => (
              <div
                key={`reaction-icon-${type}`}
                className={classNames("p-1 cursor-pointer rounded-lg", {
                  "bg-blue-200": type === reaction.type,
                })}
                onClick={() => selectIcon(type)}
              >
                <Icon />
              </div>
            ))}
          </div>
          <div>
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
              <div
                onClick={toggleEdition}
                className="cursor-pointer min-w-[200px]"
              >
                {inputText || "Enter your comment"}
              </div>
            )}
          </div>
        </div>
      </Tooltip>
    </div>
  );
};
