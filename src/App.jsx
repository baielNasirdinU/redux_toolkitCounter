import React from 'react'
import './App.css'
import {  useSelector ,useDispatch} from 'react-redux'
import { minesCount, plusCounter, resetCount } from './sclies/count'

const App = () => {
  const dispatch=useDispatch()

  const state=useSelector(state=>state.count)
  console.log(state);
  return (
    <div>
      <h1>counter <span>{state}</span></h1>

<button onClick={()=>dispatch(plusCounter())}>+</button>
<button onClick={()=>dispatch(minesCount())}>-</button>
<hr />
<button onClick={()=>dispatch(resetCount())}>reset</button>
    </div>
  )
}

export default App