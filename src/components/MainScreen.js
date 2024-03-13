import { useResizeDetector } from "react-resize-detector";
import { useReactions } from "../contexts/ReactionsContext";
import { Reaction } from "./Reaction";
export const MainScreen = () => {
  const { width, height, ref } = useResizeDetector();
  const { addReaction, reactions } = useReactions();
  const handleClick = (e) => {
    const x = Math.max(e.clientX - 15, 0); // -15 to offset cursor dimensions
    const y = Math.max(e.clientY - 15, 0);
    addReaction({ x: (x / width) * 100, y: (y / height) * 100 });
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-gray-100 relative"
      onClick={handleClick}
      style={{
        backgroundSize: "30% 30%",
        backgroundImage:
          "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
      }}
    >
      {reactions.map((reaction) => (
        <Reaction key={reaction.id} reaction={reaction} />
      ))}
    </div>
  );
};
