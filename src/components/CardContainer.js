import { useContext } from "react";
import BingoContext from "../context/BingoContext";
import Card from "./Card";



const CardContainer = () => {

    const {content} = useContext(BingoContext);


  return (
    <div className='cardContainer'>
        {content.map(el=><Card  />)}
    </div>
  )
}

export default CardContainer 