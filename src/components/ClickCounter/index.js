// Write your code here

import {useState} from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="card-conatiner">
      <h1 className="heading">
        The button has been clicked
        <span className="span-element">{count}</span> times
      </h1>
      <p className="paragraph"> Click the button to increase the count! </p>
      <button className="button" type="button" onClick={onIncrement}>
        Click Me
      </button>
    </div>
  )
}

export default ClickCounter
