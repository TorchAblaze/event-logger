
export function winLoseMessage(score) {
  if (score <= 0) {
    return "You lose! Try again next cohort!" 
  } else if (score >= 15) {
    return "You win! Get ready for that unpaid internship :D"
  }
}

export function returnScore(score) {
  if (score > 0 && score < 15) {
    return `Score: ${score}`;
  }
}

export function returnPoints(score, points) {
  if (points !== null && score > 0 && score < 15) {
    return `You scored ${points} points`;
  }
}

export function returnMessage(score, message) {
  if (score > 0 && score < 15) {
    return message;
  }
}