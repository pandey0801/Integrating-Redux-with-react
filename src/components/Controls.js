import React from 'react'
import { useDispatch } from 'react-redux'

export default function Controls() {
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch({type: "INCREMENT"});
    }

    const handleDcrement = () =>{
        dispatch({type : "DEREMENT"});
    }

  return (
    <div>

    <button type='button' onClick={handleIncrement}>
        +1
    </button>

    <button type='button' onClick={handleDcrement}>
        -1
    </button>

    </div>
  )
}
