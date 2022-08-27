import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/dynamicCounter/actions'
import "./counter.css"

const DynamicCounter = () => {
    const count = useSelector((state) => state.dynamicCounter.value)
    // console.log(count);
    const dispatch = useDispatch()
    const incrementHandler = (value) => {
        dispatch(increment(value))
    }
    const decrementHandler = (value) => {
        dispatch(decrement(value))
    }
    const resetHandler = () => {
        dispatch(reset())
    }
    return (
        <div className='counter'>
            <h2>{count <= 0 ? 0 : count}</h2>
            <button onClick={() => incrementHandler(5)}>+ Add</button>
            <button onClick={() => decrementHandler(3)}>- Remove</button>
            <button onClick={() => resetHandler()}>Reset</button>
        </div>
    )
}

export default DynamicCounter