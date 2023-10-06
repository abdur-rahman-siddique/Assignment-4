function ageInDays(ageInYears) {
    const daysInYear = 365.25;
    const ageInDays = ageInYears * daysInYear;
    return ageInDays;
  }
  const ageYears = 25;
  const ageDays = ageInDays(ageYears);
  console.log(`Your age in days is approximately ${ageDays} days.`);
  