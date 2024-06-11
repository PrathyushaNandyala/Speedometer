// Write your code here
import {useState} from 'react'

import './index.css'

const Speedometer = () => {
  const [speed, setSpeed] = useState(0)

  const brake = () => {
    if (speed > 0) {
      setSpeed(speed - 10)
    }
  }

  const accelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10)
    }
  }

  return (
    <div className="bg-container">
      <h1 className="m-h">SPEEDOMETER</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
        className="img"
        alt="speedometer"
      />
      <h2 className="h">
        Speed is <span>{speed}</span>mph
      </h2>
      <p className="p">Min Limit is 0mph, Max Limit is 200mph</p>

      <div>
        <button onClick={accelerate } className="btn1">
          Accelerate
        </button>
        <button onClick={brake} className="btn2">
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
