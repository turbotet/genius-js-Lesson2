// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const value = prompt("Введіть число");
// if (value > 0) {
//     console.log(true); 
//     alert(true);
// } else if (value < 0) { 
//     console.log(false);
//     alert(false);
// } else {
//     alert("Ви ввели 0");
// }

// --------------------------------------------
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = prompt("Введіть значення test або qwerty або true");
// value === "test" ? alert(true) : alert(false);

// --------------------------------------------
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let value = prompt("Введіть число");
// value = Number(value);
// if (value > 10) {
//     console.log(value - 5);
// } else if (value < 10) {    
//     console.log(value + 5);
// } else {
//     console.log(value);
// }

// --------------------------------------------
//Зробіть сервіс, який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = null;
// let num = prompt("Введіть число від 1 до 12");
// num = Number(num);
// switch (num) {
//     case 1:
//         month = "січень";
//         break;
//     case 2:
//         month = "лютий";
//         break;
//     case 3:
//         month = "березень";
//         break;
//     case 4:
//         month = "квітень";
//         break;
//     case 5:
//         month = "травень";
//         break;
//     case 6:
//         month = "червень";
//         break;
//     case 7:
//         month = "липень";
//         break;
//     case 8:
//         month = "серпень";
//         break;
//     case 9:
//         month = "вересень";
//         break;
//     case 10:
//         month = "жовтень";
//         break;
//     case 11:
//         month = "листопад";
//         break;
//     case 12:
//         month = "грудень";
//         break;
//     default:
//         month = ";) Ви ввели невірне число";
//         break;
// }
// alert(`${num} місяць - ${month}`);

// --------------------------------------------
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num = prompt("Введіть тризначне число");
// value = Number(num);
// if (num > 99 && num < 1000) {
//     let n1 = num % 10;
//     let n2 = (num % 100 - n1) / 10;
//     let n3 = (num - n2 * 10 - n1) / 100;
//     let sum = n1 + n2 + n3;
//     alert(`сума цифр числа ${num} - ${sum}`);
// } else {
//     alert("Ви ввели невірне число");
// }