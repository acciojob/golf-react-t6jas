import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this)
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.keyCode === 39) {
        this.setState((prevState) => {
          const newPos = prevState.posi + 5;
          return {
            posi: newPos,
            ballPosition: { left: `${newPos}px` }
          };
        });
      }
    });
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    )
  }
}

export default App;
