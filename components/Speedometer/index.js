// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  applyBrake = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <h1 className="head">Speedometer</h1>
        <img
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="head">Speed is {count} mph</h1>
        <p className="head">min limit is 0mph, max limit is 200mph</p>
        <div>
          <button type="button" onClick={this.accelerate}>
            Accelerate{' '}
          </button>
          <button type="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
