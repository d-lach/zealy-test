import React, { createContext, useState, useContext } from "react";

const ReactionsContext = createContext();

export const useReactions = () => useContext(ReactionsContext);

export const ReactionsProvider = ({ children }) => {
  const [reactions, setReactions] = useState([]);

  const addReaction = (reaction) => {
    setReactions([...reactions, { ...reaction, text: "", id: Date.now() }]);
  };

  const updateReactionText = (id, text) => {
    setReactions(
      reactions.map((reaction) => {
        return reaction.id === id ? { ...reaction, text } : reaction;
      }),
    );
  };

  return (
    <ReactionsContext.Provider
      value={{ reactions, addReaction, updateReactionText }}
    >
      {children}
    </ReactionsContext.Provider>
  );
};
