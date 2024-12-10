import React, { useState, useEffect } from 'react';

const PrimeFactorization: React.FC = () => {
  const [number, setNumber] = useState<number | ''>('');
  const [factors, setFactors] = useState<string>('');

  const factorize = (num: number): string => {
    const result: { [key: number]: number } = {};
    let divisor = 2;
    while (num > 1) {
      while (num % divisor === 0) {
        result[divisor] = (result[divisor] || 0) + 1;
        num /= divisor;
      }
      divisor++;
    }
    return Object.entries(result)
      .map(([factor, count]) => (count > 1 ? `${factor}^${count}` : factor))
      .join(' × ');
  };

  useEffect(() => {
    if (typeof number === 'number' && number > 0) {
      setFactors(factorize(number));
    } else {
      setFactors('');
    }
  }, [number]);

  return (
    <div>
      <h2>Prime Factorization</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      {factors && (
        <p>
          Prime factors of {number}: {factors}
        </p>
      )}
    </div>
  );
};

export default PrimeFactorization;
