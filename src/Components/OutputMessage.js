function outPutMessage(randomNum) {
  let message = "";
  if (randomNum === -3) {
    message = "Your computer crashed";
  } else if (randomNum === -2) {
    message = "3 hour debugging session";
  } else if (randomNum === -1) {
    message = "Redo friday project";
  } else if (randomNum === 1) {
    message = "pair up for day";
  } else if (randomNum === 2) {
    message = "get to see Jesse's cat on Google Meets";
  } else if (randomNum === 3) {
    message = "Pass friday project";
  }
  return message;
}

export default outPutMessage;
