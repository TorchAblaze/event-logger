import React from 'react';
import Button from 'react-bootstrap/Button';
import winLoseMessage from './Score';

class EpicodusScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5
    };
  }

  incrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score + 1}
      })
    }

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    })
  }

  // gameOverLose = () => 
  //   this.setState({
  //     isActive: false
  //   })

  // gameOverWin = () => 
  //   this.setState({
  //     isActive: true
  //   })
  
  // <Button onClick={() => {
  //     gameOverLose();
  //     gameOverWin();
  //   }}>
  //     Play Again!
  //     </Button>
          
  render(){
    return (
      <React.Fragment>
        <h2>{this.state.score}</h2>
        <h3>{winLoseMessage(this.state.score)}</h3>
        <Button onClick={this.incrementScore}>Completes whiteboard problem</Button>
        <Button onClick={this.decrementScore}>Cries during white boarding session</Button>

      </React.Fragment>
    );
  }
}

export default EpicodusScore;
