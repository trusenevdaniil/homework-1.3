"use strict";


function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentNumber = parseFloat(percent);
    let contributionNumber = parseFloat(contribution);
    let amountNumber = parseFloat(amount);

    if(isNan(percentNumber)) {
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    else if(isNan(contributionNumber)) {
      return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }
    else if(isNan(amountNumber)) {
      return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }
    else {
      let creditBody = amount - contribution;
      let currentDate = new Date();
      let n = (date.getFullYear() - currentDate.getFullYear()) * 12 + date.getMonth() - currentDate.getMonth();
      let P = percentNumber / 12 / 100;
      let monthPay = creditBody * (P + P / (((1+P)**n) - 1));
      let totalAmount = monthPay * n;
      return parseFloat(totalAmount.toFixed(2));
    }

}

function getGreeting(name) {
    if (typeof name !== "string" || name == '') {
      name = "Аноним";
    }
    return  `Привет, мир! Меня зовут ${name}`
}
