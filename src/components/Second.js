import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../actions/counterActions'

const Second = () => {
  // get the counter from global store
  const counter = useSelector((state) => state.counter)

  // use dispatch to dispatch an action to the reducer
  const dispatch = useDispatch()

  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Second Component</h1>
      <p>Count {counter}</p>

      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Second

            