let money = prompt('Ваш месячный доход?'),
  income = 'freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  period = 10,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount1 = prompt('Во сколько это обойдется?'),
  amount2 = prompt('Во сколько это обойдется?'),
  budgetMonth = (money - amount1 - amount2),
  budgetDay = Math.floor(budgetMonth / 30),
  missionDone = Math.ceil(mission / budgetMonth);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay <= 0) {
  console.log('Что то пошло не так');
  } else {
  console.log('К сожалению у вас уровень дохода ниже среднего');
  }

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' $ usa');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetMonth);
console.log(missionDone);
console.log(budgetDay);



