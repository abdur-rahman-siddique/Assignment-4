function minToSec(minutes) {
    return minutes * 60;
  }
  const minutes = 5;
  const seconds = minToSec(minutes);
  console.log(`${minutes} minutes is equal to ${seconds} seconds.`);