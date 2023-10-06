function calculatePower(voltage, current) {
    return voltage * current;
  }
  const voltage = 120;
  const current = 5;
  const power = calculatePower(voltage, current);
  console.log(`The power is ${power} watts.`);
  