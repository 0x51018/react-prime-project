const primeFactorize = (n: number): Record<number, number> => {
    if (n <= 1) {
      return {};
    }
  
    const factors: number[] = [];
    let divisor = 2;
  
    while (n > 1) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    const result = factors.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  
    return result;
  };

  // To Do: Implement factorizor for BigInt
  // To Do: Implement Miller-Rabin primality test
  // To Do: Implement Pollard's rho algorithm
  // To Do: Implement Shor's algorithm

  // const primeFactorizeBigInt = (n: bigint): Record<string, number> => {
  //   if (n <= 1n) {
  //     return {};
  //   }
  
  //   const factors: bigint[] = [];
  //   let divisor = 2n;
  
  //   while (n > 1n) {
  //     if (n % divisor === 0n) {
  //       factors.push(divisor);
  //       n /= divisor;
  //     } else {
  //       divisor++;
  //     }
  //   }
  
  //   const result = factors.reduce((acc, cur) => {
  //     acc[cur.toString()] = (acc[cur.toString()] || 0) + 1;
  //     return acc;
  //   }, {} as Record<string, number>);
  
  //   return result;
  // }
  
  export default primeFactorize;
  