'use strict';

let money = prompt("Ваш бюджет на месяц?" , ""),
    time = prompt("Введите дату в формате YYYY-MM-DD" , "");

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {
      
    },
    optionalExpenses : {

    },
    income : [],
    savings : false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце" , ""),
    q2 = prompt("Во сколько обойдется?", ""),
    q3 = prompt("Не обязательная?", "");

appData.expenses.q1 = q1;
appData.expenses.q2 = q2;

alert(appData.moneyData/30);
console.log(appData.moneyData);
console.log(appData.timeData);