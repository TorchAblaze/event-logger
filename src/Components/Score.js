import React from 'react';
import EpicodusScore from './MainContent';

function winLoseMessage(score) {
  if (score === 0) {
    return "You lose!" 
  } else if (score >= 15) {
    return "Get ready for that unpaid internship :D"
  }
}

// function winLoseMessage2(score) {
//   return score === 0 ? : "You lose!"
//         :score >= 15: "Get ready for that unpaid internship :D"
//   score ? score === 0 : score >= 15
// }

export default winLoseMessage;