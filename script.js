"use strict";
let a = document.querySelector("#a"),
  b = document.querySelector("#b"),
  btnSum = document.querySelector("#sum"),
  btnMult = document.querySelector("#mult"),
  res = document.querySelector("#res");

const calculator = {
  sum: function () {
    this.a = +a.value;
    this.b = +b.value;
    return this.a + this.b;
  },

  mult: function () {
    this.a = +a.value;
    this.b = +b.value;
    return this.a * this.b;
  },

  show: function () {
    btnSum.addEventListener("click", function () {
      res.value = calculator.sum();
    });
    btnMult.addEventListener("click", function () {
      res.value = calculator.mult();
    });
  },
};

calculator.show();
