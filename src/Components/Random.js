function generateRandomNum() {
  let randomNum = Math.floor(Math.random() * 7) - 3;
  while (randomNum === 0) {
    randomNum = Math.floor(Math.random() * 7) - 3;
  }
  console.log(randomNum);
  return randomNum;
}

export default generateRandomNum;