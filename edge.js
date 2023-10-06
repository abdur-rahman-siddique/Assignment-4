function maxTriangleEdgeRange(side1, side2) {
    if (side1 <= 0 || side2 <= 0) {
      return "Side lengths must be positive integers.";
    }
    const maxRange = side1 + side2 - 1;
    return `The maximum range of the third edge is ${maxRange}.`;
  }
  const side1 = 4;
  const side2 = 7;
  console.log(maxTriangleEdgeRange(side1, side2));
  