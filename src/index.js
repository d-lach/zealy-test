import { createRoot } from "react-dom/client";
import { MainScreen } from "./components/MainScreen";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<MainScreen />);
const test = "aas";

console.log({ test });
