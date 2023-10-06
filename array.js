function getFirstElement(arr) {
    if (arr.length > 0) {
      return arr[0];
    } else {
      return undefined;
    }
  }
  const numbers = [5, 10, 15, 20];
  const firstNumber = getFirstElement(numbers);
  console.log(`The first element in the array is: ${firstNumber}`);
  