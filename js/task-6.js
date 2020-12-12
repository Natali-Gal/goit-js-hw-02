let input;
const numbers = [];
let total = 0;


while (input !== null) {
  input = prompt("Введите число:", "");
  //const inputNumber = Number(input);
  //console.log(inputNumber);
 
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  } 
  else if (input = Number(input)) {
    numbers.push(input);
    console.log(numbers);
    total += input
    console.log(total);
    continue;

  }  
  else {
    alert("Отменено пользователем!");
    console.log(`Общая сумма чисел равна ${total}`); 
    break;
  } 
}

for (let i = 0; i < numbers.length; i = +1) {
  total = total + numbers[i];
}



