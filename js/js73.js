function calculatePoints(totalSelling) {
    // Calculate points, where each 100 selling units gives 1 point
    const points = Math.floor(totalSelling / 100);
    return points;
  }
  
  // Example usage:
  let totalSelling = 500;
  let points = calculatePoints(totalSelling);
  console.log(`Total points: ${points}`);
  