function findPrimeNumbers(start, end) {
    function isPrime(num) {
        // TODO
        if (num <= 1) return false;/*1 is not prime*/
        /*loop to find prime numbers*/
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;/*if the number is divisible by any number other than 1 and itself(num), it is not prime*/
        }
        return true;
    }

    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        // TODO
        if(isPrime(i)){
            primeNumbers.push(i);
        }
    }
    
    
    return primeNumbers;
  }

  // ทดสอบการทำงานของฟังก์ชัน
  
   console.log(findPrimeNumbers(10, 30)); // Output: [11, 13, 17, 19, 23, 29]
  console.log(findPrimeNumbers(1, 10)); // Output: [2, 3, 5, 7]
  console.log(findPrimeNumbers(15, 17)); // Output: [17]