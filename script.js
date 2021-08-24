"use strict";
let a = document.querySelector("#a"),
  b = document.querySelector("#b"),
  btnSum = document.querySelector("#sum"),
  btnMult = document.querySelector("#mult"),
  res = document.querySelector("#res");

const calculator = {
  sum: function () {
    let summ = 0;
    let pow;
    this.a = +a.value;
    this.b = +b.value;
    pow = Math.pow(this.a, this.b);

    while (pow > 0) {
      summ += pow % 10;
      pow = Math.floor(pow / 10);
    }
    return summ;
  },

  mult: function () {
    this.a = +a.value;
    this.b = +b.value;
    return Math.pow(this.a, this.b);
  },

  readValues: function () {
    btnSum.addEventListener("click", function () {
      res.value = calculator.sum();
    });
    btnMult.addEventListener("click", function () {
      res.value = calculator.mult();
    });
  },
};

calculator.readValues();
