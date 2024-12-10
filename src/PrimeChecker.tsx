import React, { useState, useEffect } from 'react';

const PrimeChecker: React.FC = () => {
  const [number, setNumber] = useState<number | ''>('');
  const [isPrime, setIsPrime] = useState<boolean | null>(null);

  const checkPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  useEffect(() => {
    if (typeof number === 'number') {
      setIsPrime(checkPrime(number));
    } else {
      setIsPrime(null);
    }
  }, [number]);

  return (
    <div>
      <h2>Prime Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      {isPrime !== null && (
        <p>{isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`}</p>
      )}
    </div>
  );
};

export default PrimeChecker;
