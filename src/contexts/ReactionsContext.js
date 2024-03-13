import React, { createContext, useState, useContext } from "react";

const ReactionsContext = createContext();

export const useReactions = () => useContext(ReactionsContext);

export const ReactionsProvider = ({ children }) => {
  const [reactions, setReactions] = useState([]);

  const addReaction = (reaction) => {
    setReactions([
      ...reactions,
      { ...reaction, text: "", type: "neutral", id: Date.now(), isOpen: false },
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

  const toggleReactionOpen = (id, state) => {
    setReactions(
      reactions.map((reaction) =>
        reaction.id === id
          ? {
              ...reaction,
              isOpen: state === undefined ? !reaction.isOpen : !!state,
            }
          : { ...reaction, isOpen: false },
      ),
    );
  };

  const isAnyReactionOpen = reactions.some((reaction) => reaction.isOpen);

  const closeAllReactions = () => {
    setReactions(reactions.map((reaction) => ({ ...reaction, isOpen: false })));
  };

  return (
    <ReactionsContext.Provider
      value={{
        reactions,
        addReaction,
        updateReactionText,
        updateReactionType,
        toggleReactionOpen,
        isAnyReactionOpen,
        closeAllReactions,
      }}
    >
      {children}
    </ReactionsContext.Provider>
  );
};
