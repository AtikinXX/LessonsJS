'use strict';

function first() {
  let randomNum = Math.floor(Math.random() * 100 + 1);

  function second() {
    let num = +prompt("Угадай число от 1 до 100");

    if (typeof num === 'number') {
      if (num > randomNum) {
        alert("Загаданное число меньше");
        second();
      } else if (num < randomNum) {
        alert("Загаданное число больше");
        second();
      } else if (num === randomNum) {
        alert("Вы угадали!");
        return;
      }
      else {
        alert("Введите число!");
      }
    }
  }
  second();
}
first();