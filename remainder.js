function findRemainder(dividend, divisor) {
    if (divisor === 0) {
      return "Division by zero is not allowed";
    }
    return dividend % divisor;
  }
  const num1 = 10;
  const num2 = 3;
  const remainder = findRemainder(num1, num2);
  console.log(`The remainder of ${num1} divided by ${num2} is ${remainder}`);
  