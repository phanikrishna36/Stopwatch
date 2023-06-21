// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {sec: 0, min: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {sec} = this.state
    if (sec < 60) {
      this.setState(i => ({sec: i.sec + 1}))
    } else {
      this.setState(i => ({min: i.min + 1, sec: 0}))
    }
  }

  onClicked = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  onCleared = () => {
    this.timerID = clearInterval(this.timerID)
  }

  onReset = () => {
    this.setState({sec: 0, min: 0})
  }

  render() {
    const {sec, min} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Stopwatch</h1>

        <div className="itemCont">
          <div className="cont1">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>

          <h1 className="time">
            {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
          </h1>
          <div className="btnCont">
            <button className="btn1" type="button" onClick={this.onClicked}>
              Start
            </button>
            <button className="btn2" type="button" onClick={this.onCleared}>
              Stop
            </button>
            <button className="btn3" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
