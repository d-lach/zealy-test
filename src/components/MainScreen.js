import { useResizeDetector } from "react-resize-detector";
import { useReactions } from "../contexts/ReactionsContext";
import { Reaction } from "./Reaction";
export const MainScreen = () => {
  const { width, height, ref } = useResizeDetector();
  const { addReaction, reactions } = useReactions();
  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
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
      <div>
        Dimensions: {width}x{height}
      </div>
      {reactions.map((reaction) => (
        <Reaction key={reaction.id} reaction={reaction} />
      ))}
      {reactions.map((pos, index) => (
        <div key={index}>
          Click at x: {pos.x}%, y: {pos.y}%
        </div>
      ))}
    </div>
  );
};
