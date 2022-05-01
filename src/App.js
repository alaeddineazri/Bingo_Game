import "./App.css";
import { BingoProvider } from "./context/BingoContext";
import CardContainer from "./components/CardContainer";
import ControlBoard from "./components/ControlBoard";
import Scoreboard from "./components/Scoreboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

    <>
    <div className="navbar">BINGO GAME </div>
    
    <div className="App">

    
    <BingoProvider>
      
      <div className="left-box" >
        <CardContainer />
      </div>
      <div className="right-box">      
      <ControlBoard />
      <Scoreboard />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      </div>
    </BingoProvider>

    </div>
    </>
  );
}

export default App;
