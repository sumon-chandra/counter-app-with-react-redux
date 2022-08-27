import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counter/actions'
import "./counter.css"

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const incrementHandler = () => {
        dispatch(increment())
    }
    const decrementHandler = () => {
        dispatch(decrement())
    }
    const resetHandler = () => {
        dispatch(reset())
    }
    return (
        <div className='counter'>
            <h2>{count <= 0 ? 0 : count}</h2>
            <button onClick={incrementHandler}>+ Add</button>
            <button onClick={decrementHandler}>- Remove</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Counter