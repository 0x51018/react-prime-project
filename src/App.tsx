import React from 'react';
import PrimeChecker from './PrimeChecker';
import PrimeFactorization from './PrimeFactorization';

const App: React.FC = () => {
  return (
    <div>
      <h1>Prime Number Tools</h1>
      <PrimeChecker />
      <PrimeFactorization />
    </div>
  );
};

export default App;
