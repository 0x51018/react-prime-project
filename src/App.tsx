import React, { useState } from 'react';
import primeFactorize from './utils/primeFacotrize';


function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<Record<number, number>>([]);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult([]);

    const num = parseInt(number);
    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
      setError('Please enter a positive integer.');
      return;
    }

    setResult(primeFactorize(num));
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Prime Factorization</h1>
        
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter a positive integer"
                className="flex-grow text-lg py-3 px-4 border border-black rounded-md"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-md text-lg"
              >
                Factorize
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 border border-black bg-gray-100 p-4 rounded-md">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          {Object.keys(result).length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Prime Factors:</h2>
              <div className="bg-gray-100 p-6 rounded-lg border border-black">
                <p className="text-3xl sm:text-4xl font-bold break-words">
                  {Object.entries(result)
                    .map(([prime, count]) =>
                      count > 1 ? <span key={prime}>{prime}<sup>{count}</sup></span> : <span key={prime}>{prime}</span>
                    )
                    .reduce<React.ReactNode[]>((prev, curr) => [...prev, ' × ', curr], [])
                    .slice(1)}
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
      
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-sm">© 2024 Prime Factorization Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

