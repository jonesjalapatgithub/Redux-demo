import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../actions/counterActions'

const First = () => {
  // get the counter from global store
  const counter = useSelector((state) => state.counter)

  // use dispatch to dispatch an action to the reducer
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }

  return (
    <div>
      <h1>First Component</h1>
      <p>Count {counter}</p>

      <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default First

            