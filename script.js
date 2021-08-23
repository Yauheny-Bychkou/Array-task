"use strict";
let option;
let option2;
let option3;
let text = document.querySelector("#text");
let text1 = document.querySelector("#text-1");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
option = document.createElement("option");
option2 = document.createElement("option");
option3 = document.createElement("option");
city.add(option);
city.add(option2);
city.add(option3);

country.addEventListener("change", function (e) {
  if (e.target.value === "rus") {
    option.textContent = "Москва";
    option2.textContent = "Питер";
    option3.textContent = "Казань";
    text1.textContent = "Россия";
    text1.style.display = "none";
    text.style.display = "none";
  } else if (e.target.value === "bel") {
    option.textContent = "Минск";
    option2.textContent = "Могилёв";
    option3.textContent = "Гродно";
    text1.textContent = "Беларусь";
    text1.style.display = "none";
    text.style.display = "none";
  } else if (e.target.value === "uk") {
    option.textContent = "Киев";
    option2.textContent = "Львов";
    option3.textContent = "Одесса";
    text1.textContent = "Украина";
    text1.style.display = "none";
    text.style.display = "none";
  } else if (e.target.value === "jap") {
    option.textContent = "Токио";
    option2.textContent = "Киото";
    option3.textContent = "Иокогама";
    text1.textContent = "Япония";
    text1.style.display = "none";
    text.style.display = "none";
  }

  document.querySelector("#city").addEventListener("change", function (e) {
    text.textContent = e.target.value;
    text.style.display = "initial";
    text1.style.display = "initial";
  });
});
