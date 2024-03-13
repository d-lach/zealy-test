import React, { createContext, useState, useContext } from "react";

const ReactionsContext = createContext();

export const useReactions = () => useContext(ReactionsContext);

export const ReactionsProvider = ({ children }) => {
  const [reactions, setReactions] = useState([]);

  const addReaction = (reaction) => {
    setReactions([...reactions, reaction]);
  };

  return (
    <ReactionsContext.Provider value={{ reactions, addReaction }}>
      {children}
    </ReactionsContext.Provider>
  );
};
