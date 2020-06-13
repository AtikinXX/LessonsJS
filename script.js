'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = 'freelance',
  addExpenses,
  deposit,
  mission = 100000,
  period = 10,
  amount1,
  amount2,
  accumulatedMonth,
  budgetDay,
  missionDone,
  expenses1,
  expenses2,
  expensesAmount;

function getExpensesMonth() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов?', "Настольные игры");
    } else if(i === 1){
      expenses2 = prompt('Введите обязательную статью расходов?', "Инвентарь для спорта");
    }
    do {
      sum += +prompt('Во сколько это обойдется?', '4000');
    } while (!isNumber(sum));
    }
  return sum;
}


function getAccumulatedMonth() {
  return money - expensesAmount;
}

let getTargetMonth = function () {
  
  if (accumulatedMonth < 0) {
    return 'Цель не будет достигнута';
  } else if (accumulatedMonth >= 0){
    return 'Цель будет достигнута';
  }
  return mission / accumulatedMonth;
};

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

let start = function () { 
  do{
    money = prompt('Ваш месячный доход?', '50000');
    deposit = confirm('Есть ли у вас депозит в банке?');
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  }
  while (!isNumber(money));
};
start();

expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);
missionDone = Math.ceil(mission / accumulatedMonth);

showTypeOf(addExpenses.toLowerCase().split(', '));
showTypeOf(missionDone);
showTypeOf(budgetDay);
console.log('Расходы за месяц: ' + expensesAmount);
console.log(getStatusIncome());
console.log(getTargetMonth());

