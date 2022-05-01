import React, { useContext } from 'react'
import BingoContext from '../context/BingoContext';
import {AiOutlineClear} from 'react-icons/ai'

const ControlBoard = () => {

    const {reset , handelChange , name , nextPlayer} = useContext(BingoContext);

  return (
    <div className='ControlBoard'>
        <h3>Control Board</h3>
        <div className='ControlBoard-btn' >
        <button   onClick={()=>reset()}><AiOutlineClear /></button>
        <input type="text" placeholder='Put the player name ' value={name} onChange={handelChange} />
        <button disabled={name? false:true} onClick={()=>nextPlayer()} > Next Player </button>
        </div>
    </div>
  )
}

export default ControlBoard