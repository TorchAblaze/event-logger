export function generateRandomNum() {
  let randomNum = Math.floor(Math.random() * 7) - 3;
  while (randomNum === 0) {
    randomNum = Math.floor(Math.random() * 7) - 3;
  }
  console.log(randomNum);
  return randomNum;
}

export function plusRandomNum() {
  let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(randomNum);
  return randomNum;
}

export function minusRandomNum() {
  let randomNum = Math.floor(Math.random() * 3) - 3;
  console.log(randomNum);
  return randomNum;
}