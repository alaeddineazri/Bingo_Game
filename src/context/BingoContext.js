import { createContext, useState } from "react";
import cardContent from "../data/cardContent";
import { shuffle } from "lodash";


const BingoContext = createContext();

export const BingoProvider = ({ children }) => {

    const [content, setContent] = useState(shuffle([...cardContent]));




  return (
    <BingoContext.Provider
      value={{
        content
      }}
    >
      {children}
    </BingoContext.Provider>
  );
};
export default BingoContext; 