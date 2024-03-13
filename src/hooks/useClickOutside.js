import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref?.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref.current]);
};

export default useClickOutside;
