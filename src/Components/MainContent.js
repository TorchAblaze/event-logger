import React from "react";
import Button from "react-bootstrap/Button";
import winLoseMessage from "./Score";

class EpicodusScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
    };
  }

  incrementScore = () => {
    this.setState((prevState) => {
      return { score: prevState.score + 1 };
    });
  };

  decrementScore = () => {
    this.setState((prevState) => {
      return { score: prevState.score - 1 };
    });
  };

  restartScore = () => {
    this.setState((prevState) => {
      return {score: 5};
    })
  }

  render() {
    let incrementButtonVisibleState = null;
    let decrementButtonVisibleState = null;
    let restartGame = null;
    if (this.state.score < 15 && this.state.score > 0) {
      incrementButtonVisibleState = [
        <Button className="buttons" onClick={this.incrementScore}>
          Completes whiteboard problem
        </Button>,
        <Button className="buttons" onClick={this.incrementScore}>
          Completes Friday Project on Time
        </Button>
      ];
      decrementButtonVisibleState = [
        <Button className="buttons" onClick={this.decrementScore}>
          Cries during white boarding session
        </Button>,
        <Button className="buttons" onClick={this.decrementScore}>
          Burnout
        </Button>
      ];
    } else if (this.state.score >= 15 || this.state.score <= 0) {
      restartGame = (
        <Button onClick={this.restartScore}>
          Play Again!
        </Button>
      )
    }
    return (
      <React.Fragment>
        <h2>{this.state.score}</h2>
        <h3>{winLoseMessage(this.state.score)}</h3>
        {restartGame}
        {incrementButtonVisibleState}
        {decrementButtonVisibleState}
      </React.Fragment>
    );
  }
}

export default EpicodusScore;
