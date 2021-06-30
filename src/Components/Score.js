function winLoseMessage(score) {
  if (score <= 0) {
    return "You lose! Try again next cohort!" 
  } else if (score >= 15) {
    return "You win! Get ready for that unpaid internship :D"
  }
}

export default winLoseMessage;