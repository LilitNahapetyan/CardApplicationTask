const arrayOfNumbers = [];
function generateNumber() {
  let lengthOfArray = arrayOfNumbers.length;
  while (lengthOfArray === arrayOfNumbers.length) {
    let number = Math.floor(Math.random() * 1000);
    if (!arrayOfNumbers.includes(number)) {
      arrayOfNumbers.push(number);
      return number;
    }
  }
}

export default generateNumber;
