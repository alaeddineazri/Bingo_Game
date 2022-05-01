import { createContext, useEffect, useState } from "react";
import cardContent from "../data/cardContent";
import { shuffle } from "lodash";
import winCombination from "../data/winCombination";
import { toast } from "react-toastify";

const BingoContext = createContext();

export const BingoProvider = ({ children }) => {
  const [content, setContent] = useState(shuffle([...cardContent]));

  const [index, setIndex] = useState();
  const [array, setArray] = useState([12]);
  const [wasClicked, setWasClicked] = useState("");
  const [bingo, setBingo] = useState(0);
  const [name, setName] = useState("");
  const [rank, setRank] = useState([]);




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

  useEffect(() => {
    let bingos = winCombination.map((elm) =>
      elm.every((item) => array.includes(item))
    );
    let arrayOfTrue = bingos.filter((el) => el === true);
    setBingo(arrayOfTrue.length);

    if (bingo < arrayOfTrue.length) {
        const notify = () =>
        toast("✨✨✨✨✨BINGO ✨✨✨✨", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
    }
  }, [array, bingo]);




  const reset = () => {
    setIndex();
    setArray([12]);
    setWasClicked("");
    setBingo(0);
    setName("");
  };



  const handelChange = (e) => {
    setName(e.target.value);
  };



  const nextPlayer = () => {
    let player = { name: name, score: bingo };
    setRank([...rank, player]);

    reset();
  };



  // console.log("index",index)
  // console.log("array",array)
  // console.log("wasClicked",wasClicked)
  // console.log("bingo",bingo)
  // console.log("name",name)
  // console.log("rank",rank)




  return (
    <BingoContext.Provider
      value={{
        content,
        handleClick,
        handelChange,
        nextPlayer,
        array,
        reset,
        rank,
        bingo,
        name,
      }}
    >
      {children}
    </BingoContext.Provider>
  );
};
export default BingoContext;
