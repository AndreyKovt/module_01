'use strict';

for (let a = 1; a <= 10; a++) {
  let x = a;
  console.log(`${a} в степени 1 = ${a}`);
  for (let m = 2; m <= 10; m++) {
    x *= a;
    console.log(`${a} в степени ${m} = ${x}`);
  }
  console.log(`===================================`);
}
