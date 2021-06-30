import React from 'react';
import EpicodusScore from './MainContent';

function winLoseMessage(score) {
  if (score === 0) {
    return "You lose!" 
  } else if (score >= 15) {
    return "Get ready for that unpaid internship :D"
  }
}

export default winLoseMessage;