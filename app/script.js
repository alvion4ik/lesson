'use strict';

let money = prompt("Ваш бюджет на месяц?" , ""),
    time = prompt("Введите дату в формате YYYY-MM-DD" , "");

let appData = {
    moneyData : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    timeData : time,
    savings : false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a1;
appData.expenses.a3 = a4;

alert(appData.moneyData/30);

