import "./App.css";
import { BingoProvider } from "./context/BingoContext";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <BingoProvider>
      <CardContainer />
    </BingoProvider>
  );
}

export default App;
