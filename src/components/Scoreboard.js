import { useContext } from "react";
import BingoContext from "../context/BingoContext";
import RankInfo from "./RankInfo";




const Scoreboard = () => {

  const {bingo , rank} = useContext(BingoContext);

  return (
    <div className="Scoreboard">
      <h3>Score</h3>
      you have {bingo} bingo
      <div>
        <h5>Ranks</h5>
        {
            rank.sort((a, b) => (a.score < b.score) ? 1 : -1)
            .map((el,index)=>{
              return <RankInfo key={index} el={el}/>
            })
          }
      </div>
    </div>
  )
}

export default Scoreboard