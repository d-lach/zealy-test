import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
export const MainScreen = () => {
  const [clickPositions, setClickPositions] = useState([]);
  const { width, height, ref } = useResizeDetector();
  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setClickPositions([
      ...clickPositions,
      { x: (x / width) * 100, y: (y / height) * 100 },
    ]);
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-gray-100"
      onClick={handleClick}
      style={{
        backgroundSize: "250px 250px",
        backgroundImage:
          "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
      }}
    >
      <div>
        Dimensions: {width}x{height}
      </div>
      {clickPositions.map((pos, index) => (
        <div key={index}>
          Click at x: {pos.x}%, y: {pos.y}%
        </div>
      ))}
    </div>
  );
};
