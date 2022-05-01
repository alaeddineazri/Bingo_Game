import { useContext } from "react";
import BingoContext from "../context/BingoContext";
import Card from "./Card";



const CardContainer = () => {

    const {content} = useContext(BingoContext);


  return (
    <div className="cardContainer">
    {content.map((element, index) =>
      index === 12 ? (
        <Card key={index} element={"FREE"} />
      ) : (
        <Card key={index} element={element} />
      )
    )}
  </div>
  )
}

export default CardContainer;