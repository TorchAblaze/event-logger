export function outPutMessage(randomNum) {
  let message = "";
  if (randomNum === -3) {
    message = "Your computer crashed";
  } else if (randomNum === -2) {
    message = "3 hour debugging session";
  } else if (randomNum === -1) {
    message = "Redo friday project";
  } else if (randomNum === 1) {
    message = "Pair up for day";
  } else if (randomNum === 2) {
    message = "Get to see Jesse's cat on Google Meets";
  } else if (randomNum === 3) {
    message = "Pass friday project";
  }
  return message;
}

export function whiteBoardFail(randomNum) {
  let message = "";
  if (randomNum === -3) {
    message = "Recursion, Pascal's Triangle or crypto related problem";
  } else if (randomNum === -2) {
    message = "You received Leetcode 'easy'";
  } else if (randomNum === -1) {
    message = "Erik/James sits in on session";
  }
  return message;
}

export function whiteBoardPass(randomNum) {
  let message = "";
  if (randomNum === 1) {
    message = "Spoke during whole presentation";
  } else if (randomNum === 2) {
    message = "Edabit Easy";
  } else if (randomNum === 3) {
    message = "Solved problem on accident";
  }
  return message;
}

export function burnOut(randomNum) {
  let message = "";
  if (randomNum === -3) {
    message = "37 pages of homework";
  } else if (randomNum === -2) {
    message = "Intermediate JavaScript";
  } else if (randomNum === -1) {
    message = "Realize career services slide count";
  } 
  return message;
}

export function fridayProject(randomNum) {
  let message = "";
  if (randomNum === 1) {
    message = "Woke up on time";
  } else if (randomNum === 2) {
    message = "Remembered to make timely commits";
  } else if (randomNum === 3) {
    message = "Celebratory beer after 5PM";
  }
  return message;
}
