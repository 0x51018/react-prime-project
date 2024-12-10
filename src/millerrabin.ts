export default function isProbablyPrime(n : bigint, k : number = 40): boolean {
    if (n <= 1n) return false;
    if (n <= 3n) return true;
    if (n % 2n === 0n) return false;
    
    // Decompose n-1 into d * 2^r
    let d = n - 1n;
    let r = 0n;
    while (d % 2n === 0n) {
        d /= 2n;
        r++;
    }

    // Perform k iterations of the Miller-Rabin test
    for (let i = 0; i < k; i++) {
        const a = getRandomBigInt(2n, n - 2n); // Random base in range [2, n-2]
        if (!millerRabinTest(n, a, d, r)) return false; // Composite detected
    }
    return true; // Probably prime
}

function millerRabinTest(n : bigint, a : bigint, d : bigint, r : bigint): boolean {
    let x = modularExponentiation(a, d, n);
    if (x === 1n || x === n - 1n) 
        return true;
    
    for (let i = 0n; i < r - 1n; i++) {
        x = (x * x) % n;
        if (x === n - 1n) 
            return true;
        }
    return false;
}

function modularExponentiation(base : bigint, exp : bigint, mod : bigint): bigint {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp /= 2n;
    }
    return result;
}

function getRandomBigInt(min : bigint, max : bigint): bigint {
    const range = max - min + 1n;
    const rand = BigInt('0x' + crypto.randomUUID().replace(/-/g, ''));
    return (rand % range) + min;
}

// Example Usage
const bigNumber = BigInt(
    "100000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000061"
);
console.log(isProbablyPrime(bigNumber)); // true or false