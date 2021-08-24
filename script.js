"use strict";
let a = document.querySelector("#a"),
  b = document.querySelector("#b"),
  btnSum = document.querySelector("#sum"),
  btnMult = document.querySelector("#mult"),
  res = document.querySelector("#res");

const powFunc = (a, b) => {
  let summ = 0;
  let pow = Math.pow(a, b);
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("pow: ", pow);
  while (pow > 0) {
    summ += pow % 10;
    pow = Math.floor(pow / 10);
  }
  return summ;
};
console.log("4^8 = 65536, а сумма его цифр составляет 6 + 5 + 5 + 3 + 6 = ", powFunc(4, 8));
