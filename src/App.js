import "./App.css";
import { BingoProvider } from "./context/BingoContext";
import CardContainer from "./components/CardContainer";
import ControlBoard from "./components/ControlBoard";
import Scoreboard from "./components/Scoreboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BingoProvider>
      <CardContainer />
      <ControlBoard />
      <Scoreboard />
      <ToastContainer/>
    </BingoProvider>
  );
}

export default App;
