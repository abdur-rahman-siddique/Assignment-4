function sumOfInternalAngles(n) {
    if (n < 3) {
      return "Invalid input. A polygon must have at least 3 sides.";
    }
    const sum = (n - 2) * 180;
    return sum;
  }
  console.log(sumOfInternalAngles(3));
  