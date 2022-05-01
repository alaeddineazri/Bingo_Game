import { createContext, useState } from "react";
import cardContent from "../data/cardContent";
import { shuffle } from "lodash";


const BingoContext = createContext();

export const BingoProvider = ({ children }) => {

    const [content, setContent] = useState(shuffle([...cardContent]));


    const [index, setIndex] = useState();
    const [array, setArray] = useState([12]);
    const [wasClicked, setWasClicked] = useState("");
  
  
  
  
  
  const handleClick = (index) => {
      setIndex(index);
      if (!array.includes(index)) {
          setArray([...array, index]);
          setWasClicked("wasClicked");
        } else {
          array.splice(array.indexOf(index),1)
          setWasClicked("");
          setArray([...array]);
    };
  }
    console.log("index",index)
    console.log("array",array)
    console.log("wasClicked",wasClicked)
  


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