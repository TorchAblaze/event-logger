import React from "react";
import Button from "react-bootstrap/Button";
import { outPutMessage, burnOut, fridayProject, whiteBoardFail, whiteBoardPass } from "./OutputMessage";
import { generateRandomNum, plusRandomNum, minusRandomNum } from "./Random";
import { returnMessage, winLoseMessage, returnScore } from "./Score";
class EpicodusScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
      attendanceMessage: null,
    };
  }

  whiteBoardPassNum = () => {
    this.setState((prevState) => {
      const updatedRandomNum = plusRandomNum()
      this.setState({attendanceMessage: whiteBoardPass(updatedRandomNum)})
      return { score: prevState.score + updatedRandomNum };
    });
  };

  
  whiteBoardFailNum = () => {
    this.setState((prevState) => {
      const updatedRandomNum = minusRandomNum()
      this.setState({attendanceMessage: whiteBoardFail(updatedRandomNum)})
      return { score: prevState.score + updatedRandomNum };
    });
  };
  

  fridayProjectNum = () => {
    this.setState((prevState) => {
      const updatedRandomNum = plusRandomNum()
      this.setState({attendanceMessage: fridayProject(updatedRandomNum)})
      return { score: prevState.score + updatedRandomNum };
    });
  };

  burnOutNum = () => {
    this.setState((prevState) => {
      const updatedRandomNum = minusRandomNum()
      this.setState({attendanceMessage: burnOut(updatedRandomNum)})
      return { score: prevState.score + updatedRandomNum };
    });
  };

  randomNum = () => {
    this.setState((prevState) => {
      const randomNum = generateRandomNum();
      this.setState({attendanceMessage: outPutMessage(randomNum)});
      return { score: prevState.score + randomNum };
    });
  };



  restartScore = () => {
    this.setState(() => {
      return { score: 5, attendanceMessage: null };
    });
  };

  render() {
    let plusRandomNum = null;
    let minusRandomNum = null;
    let attendClassButton = null;
    let restartGame = null;

    if (this.state.score < 15 && this.state.score > 0) {
      plusRandomNum = [
        <Button className="buttons" onClick={this.whiteBoardPassNum}>
          Completes whiteboard problem
        </Button>,
        <Button className="buttons" onClick={this.fridayProjectNum}>
          Completes Friday Project on Time
        </Button>,
      ];
        minusRandomNum = [
        <Button className="buttons" onClick={this.whiteBoardFailNum}>
          Cries during white boarding session
        </Button>,
        <Button className="buttons" onClick={this.burnOutNum}>
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
        <h3>{returnScore(this.state.score)}</h3>
        <h3>{returnMessage(this.state.score, this.state.attendanceMessage)}</h3>

        <h3>{winLoseMessage(this.state.score)}</h3>
        {attendClassButton}
        {restartGame}
        {plusRandomNum}
        {minusRandomNum}
      </React.Fragment>
    );
  }
}

export default EpicodusScore;
