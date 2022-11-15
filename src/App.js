import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch=useDispatch();

  return (
    <>
      <div>
        <h1 className='text-center font-extrabold text-4xl my-4'>Increment/Decrement counter</h1><br></br>
        <h4 className='text-center font-semibold text-2xl my-5'>using React and Redux</h4>

        <div className='flex justify-center'>
          <button onClick={()=>dispatch(incNumber())} className="bg-pink-500 w-11 h-11 mx-3 text-3xl">+</button>
          {/* <button onClick={()=>dispatch(incNumber(5))} className="bg-pink-500 w-11 h-11 mx-3 text-3xl">+</button> */}
          <div className=' mx-7 font-bold text-4xl'>
            {myState}
          </div>
          <button onClick={()=>dispatch(decNumber())} className="bg-pink-500 w-11 h-11 text-3xl">-</button>
        </div>

      </div>
    </>
  )
}

export default App
