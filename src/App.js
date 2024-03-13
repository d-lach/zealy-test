import { ReactionsProvider } from "./contexts/ReactionsContext";
import { MainScreen } from "./components/MainScreen";

export const App = () => {
  return (
    <ReactionsProvider>
      <MainScreen />
    </ReactionsProvider>
  );
};
