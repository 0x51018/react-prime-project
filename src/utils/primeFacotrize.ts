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
  
  export default primeFactorize;
  