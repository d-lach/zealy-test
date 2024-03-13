import React, { createContext, useState, useContext } from "react";

const ReactionsContext = createContext();

export const useReactions = () => useContext(ReactionsContext);

export const ReactionsProvider = ({ children }) => {
  const [reactions, setReactions] = useState([]);

  const addReaction = (reaction) => {
    setReactions([
      ...reactions,
      { ...reaction, text: "", type: "neutral", id: Date.now() },
    ]);
  };

  const updateReactionText = (id, text) => {
    setReactions(
      reactions.map((reaction) => {
        return reaction.id === id ? { ...reaction, text } : reaction;
      }),
    );
  };

  const updateReactionType = (id, type) => {
    setReactions(
      reactions.map((reaction) => {
        return reaction.id === id ? { ...reaction, type } : reaction;
      }),
    );
  };

  return (
    <ReactionsContext.Provider
      value={{ reactions, addReaction, updateReactionText, updateReactionType }}
    >
      {children}
    </ReactionsContext.Provider>
  );
};
