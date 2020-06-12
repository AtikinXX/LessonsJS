'use strict';

let money = prompt('Ваш месячный доход?', '50000'),
  income = 'freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  period = 10,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?', '4000'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?', '11000'),
  accumulatedMonth,
  budgetDay,
  missionDone;

function getExpensesMonth(val1, val2) {
  return val1 + val2;
}


function getAccumulatedMonth(val1, val2, val3) {
  return val1 - getExpensesMonth(val2, val3);
}

function getTargetMonth(mission, accumulatedMonth) {
  return mission / accumulatedMonth;
}

let showTypeOf = function (data) {
    console.log(data, typeof(data));
  };


let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if (budgetDay >= 600) {
    return 'У вас средний уровень дохода';
  } else if (budgetDay <= 0) {
    return 'Что то пошло не так';
  } else {
    return 'К сожалению у вас уровень дохода ниже среднего';
  }
};

accumulatedMonth = +getAccumulatedMonth(money, amount1, amount2);
budgetDay = Math.floor(accumulatedMonth / 30);
missionDone = Math.ceil(mission / accumulatedMonth);

showTypeOf(addExpenses.toLowerCase().split(', '));
showTypeOf(getTargetMonth(mission, accumulatedMonth));
showTypeOf(budgetDay);
console.log(getExpensesMonth(amount1, amount2));
console.log(getStatusIncome());

