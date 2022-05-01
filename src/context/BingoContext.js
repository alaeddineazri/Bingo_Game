import { createContext, useEffect, useState } from "react";
import cardContent from "../data/cardContent";
import { shuffle } from "lodash";
import winCombination from "../data/winCombination";

const BingoContext = createContext();

export const BingoProvider = ({ children }) => {
  const [content, setContent] = useState(shuffle([...cardContent]));

  const [index, setIndex] = useState();
  const [array, setArray] = useState([12]);
  const [wasClicked, setWasClicked] = useState("");
  const [bingo, setBingo] = useState(0);


  const handleClick = (index) => {
    setIndex(index);
    if (!array.includes(index)) {
      setArray([...array, index]);
      setWasClicked("wasClicked");
    } else {
      array.splice(array.indexOf(index), 1);
      setWasClicked("");
      setArray([...array]);
    }
  };
  // console.log("index",index)
  // console.log("array",array)
  // console.log("wasClicked",wasClicked)
    // console.log("bingo",bingo)

  useEffect(() => {
    let bingos = winCombination.map((elm) =>
      elm.every((item) => array.includes(item))
    );
    let arrayOfTrue = bingos.filter((el) => el === true);
    setBingo(arrayOfTrue.length);

    if (bingo < arrayOfTrue.length) {
      console.log("you win");
    }
  }, [array, bingo]);

  return (
    <BingoContext.Provider
      value={{
        content,
        handleClick,
        array,
      }}
    >
      {children}
    </BingoContext.Provider>
  );
};
export default BingoContext;
