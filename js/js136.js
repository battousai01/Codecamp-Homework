const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  function getWeightedAverage(scores) {
    const totalWeightedScore = scores.reduce((accumulator, current) => {
      return accumulator + (current.score * current.weight);
    }, 0);
  
    const totalWeight = scores.reduce((accumulator, current) => {
      return accumulator + current.weight;
    }, 0);
  
    return totalWeightedScore / totalWeight;
  }
  
  console.log(getWeightedAverage(scores))