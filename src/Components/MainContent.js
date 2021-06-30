import React from "react";
import Button from "react-bootstrap/Button";
import winLoseMessage from "./Score";
import generateRandomNum from "./Random";
import outPutMessage from "./OutputMessage";
import $ from 'jquery'

class EpicodusScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
    };
  }

  // componentDidMount() {
  //   this.outPutMessage()
  // }
  // outPutMessage = () => 
  // $(document).ready(function() {
  //   $(".buttons").click(function(event) {
  //     event.preventDefault()
  //   })
  
  //   return $("#outputMessage").html(message)
  // })


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
      const randomNumMessage = randomNum;
      const attendanceMessage = outPutMessage(randomNumMessage);
      return {score: (prevState.score + randomNum)};
    })
  }

  restartScore = () => {
    this.setState(() => {
      return {score: 5};
    })
  }
  
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
      attendClassButton = [
        <Button className="buttons" onClick={this.randomNum}>Attend Class</Button>
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
        <div id="outputMessage"></div>
        <h2>Score: {this.state.score}</h2>
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
