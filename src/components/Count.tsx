import * as React from 'react'

interface CounterProps {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void,
  onIncrementAsync: () => void,
  onIncrementIfOdd: () => void,
}


const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }: CounterProps) => (
  <p>
    Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>{' '}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
    <button onClick={onIncrementAsync}>Increment async</button>
  </p>
)


export default Counter
