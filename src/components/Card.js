import React, { useContext } from "react";
import BingoContext from "../context/BingoContext";

const Card = ({ element, index, center }) => {
  const { handleClick, array } = useContext(BingoContext);


  return (
    <div
      onClick={() => handleClick(index)}
      className={` ${array.includes(index) ? "wasClicked" : ""}  ${center ? "center" : "card"}`}
    >
      {element}
    </div>
  );
};

export default Card;