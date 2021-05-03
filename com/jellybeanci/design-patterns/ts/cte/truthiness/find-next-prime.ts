const isPrime = (num: number): boolean => {
  if (num <= 1)
    return false;
  const sqrt: number = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++)
    if (num % i == 0)
      return false;
  return true;
}

const nextPrime = (num: number): number => {
  while (!isPrime(++num)) ;
  return num;
}

console.log(nextPrime(44));