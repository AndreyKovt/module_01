'use strict';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2, root = Math.sqrt(number); i < root; i++) {
      if (number % i === 0) {
        return false;
        break;
      }
    }
  }
  return true;
};

const number = prompt(`Ведите число.`);

if (isPrime(number)) {
  console.log(`Число ${number} является простым.`);
} else {
  console.log(`Число ${number} не является простым.`);
}
