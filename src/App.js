import "./App.css";
import { BingoProvider } from "./context/BingoContext";
import CardContainer from "./components/CardContainer";
import ControlBoard from "./components/ControlBoard";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <BingoProvider>
      <CardContainer />
      <ControlBoard />
      <Scoreboard />
    </BingoProvider>
  );
}

export default App;
