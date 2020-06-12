'use strict';

let money = prompt('Ваш месячный доход?', '50000'),
  income = 'freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  period = 10,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = prompt('Во сколько это обойдется?', '4000'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = prompt('Во сколько это обойдется?', '11000');
  
  

function getExpensesMonth(expenses1, expenses2) {
  let sum = Number(expenses1) + Number(expenses2);
  return sum;
}
getExpensesMonth(amount1, amount2);
function getAccumulatedMonth(money, expenses1, expenses2) {
  let accumulatedTotal = Number(money) - getExpensesMonth(expenses1, expenses2);
  return accumulatedTotal;
}

function getTargetMonth(mission, accumulatedMonth) {
  let targetMonth = Number(mission) / Number(accumulatedMonth);
  return targetMonth;
}

let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2),
  budgetDay = Math.floor(accumulatedMonth / 30),
  missionDone = Math.ceil(mission / accumulatedMonth);


let showTypeOf = function (data) {
    console.log(data, typeof(data));
  };
showTypeOf(getExpensesMonth(amount1, amount2));
showTypeOf(addExpenses.toLowerCase().split(', '));
showTypeOf(getTargetMonth(mission, accumulatedMonth));
showTypeOf(budgetDay);

let getStatusIncome = function name(params) {
  if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay <= 0) {
    console.log('Что то пошло не так');
  } else {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  }
};
getStatusIncome();

