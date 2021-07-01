import React from "react";
import Button from "react-bootstrap/Button";
import generateRandomNum from "./Random";
import outPutMessage from "./OutputMessage";
import { returnMessage, winLoseMessage, returnPoints, returnScore } from "./Score";

class EpicodusScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
      attendanceMessage: null,
      points: null
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

  randomNum = () => {
    this.setState((prevState) => {
      const randomNum = generateRandomNum();
      this.setState({attendanceMessage: outPutMessage(randomNum)});
      this.setState({points: randomNum});
      return { score: prevState.score + randomNum };
    });
  };

  restartScore = () => {
    this.setState(() => {
      return { score: 5, points: null, attendanceMessage: null };
    });
  };

  render() {
    let incrementButtonVisibleState = null;
    let decrementButtonVisibleState = null;
    let attendClassButton = null;
    let restartGame = null;

    if (this.state.score < 15 && this.state.score > 0) {
      incrementButtonVisibleState = [
        <Button className="buttons" onClick={this.incrementScore}>
          Completes whiteboard problem
        </Button>,
        <Button className="buttons" onClick={this.incrementScore}>
          Completes Friday Project on Time
        </Button>,
      ];
      decrementButtonVisibleState = [
        <Button className="buttons" onClick={this.decrementScore}>
          Cries during white boarding session
        </Button>,
        <Button className="buttons" onClick={this.decrementScore}>
          Burnout
        </Button>,
      ];
      attendClassButton = [
        <Button className="buttons" onClick={this.randomNum}>
          Attend Class
        </Button>,
      ];
    } else if (this.state.score >= 15 || this.state.score <= 0) {
      restartGame = <Button onClick={this.restartScore}>Play Again!</Button>;
    }

    return (
      <React.Fragment>
       
          {/* <h2>Score: {this.state.score}</h2>
          <h2>You scored {this.state.points} points</h2>
          <h3>{this.state.attendanceMessage}</h3> */}
        <h3>{returnScore(this.state.score)}</h3>
        <h3>{returnPoints(this.state.score, this.state.points)}</h3>
        <h3>{returnMessage(this.state.score, this.state.attendanceMessage)}</h3>

        <h3>{winLoseMessage(this.state.score)}</h3>
        {attendClassButton}
        {restartGame}
        {incrementButtonVisibleState}
        {decrementButtonVisibleState}
      </React.Fragment>
    );
  }
}

export default EpicodusScore;
