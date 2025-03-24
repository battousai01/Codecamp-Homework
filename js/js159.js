let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  let { numPlanets, ...discoveryYears } = planetFacts;
  console.log(discoveryYears); // *
  /*  let { numPlanets, ...discoveryYears } = planetFacts; 
  above line is object destructuring in JavaScript, which allows you to extract values from an object and assign them to individual variables.
  ...discoveryYears is use  is used rest operator (...) to collect the remaining values after numplanets from object and assign them to planetFacts*/