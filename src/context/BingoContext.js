import { createContext, useState } from "react";
import cardContent from "../data/cardContent";


const BingoContext = createContext();

export const BingoProvider = ({ children }) => {

    const [content, setContent] = useState([...cardContent]);



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