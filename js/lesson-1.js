// № 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//==============================================
// const firstNumber = prompt('Enter a number');
// let number = Number(firstNumber);
// if (number === 10) {
//     alert('Вірно');
// } else {
//     alert('Не вірно')
    
// }
//===============================================

// №2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
//===============================================

// const min = Math.floor(Math.random() * (59 - 0) + 0);


// if (0 <= min && min <= 14) {
//     alert(`${min} - 1 quarter`);
// } else if(15 <= min && min <= 29) {
//     alert(`${min} - 2 quarter`);
// } else if(30 <= min && min <= 44) {
//     alert(`${min} - 3 quarter`);
// } else if(45 <= min && min <= 59) {
//     alert(`${min} - 4 quarter`);
// }
//---------------------------------------------

// Не справилась с синтаксисом :(((  else if(45 <= min <= 59)==> было неправильно!!!
//                                   else if(45 <= min && min <= 59) ==> Так правильно!!!
//===================================================

// №3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

//=================================================

// const numberPeople = prompt('Enter a number from 1 to 4');
// let result = Number(numberPeople); //
// switch (result){
//     case 1:
//        console.log('winter');
//     break;
//     case 2:
//         console.log('spring');
//      break;
//     case 3:
//         console.log('summer');
//      break;
//     case 4:
//         console.log('outumn');
//      break;
//          default:
//       console.log('Sorry but you a namber enter from  1 to 4');
//   }
//=======================================================

// №4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

//=====================================================

// const numberUserMinutes = Number(prompt('Enter you time'));

// function formattime(totalMinutes) {

//     const hours = Math.floor(totalMinutes / 60);
//     const modHours = String(hours).padStart(2, 0);
//     const minutes = totalMinutes % 60;
//     const modMinutes = String(minutes).padStart(2, 0);
//     return `${modHours}:${modMinutes}`;
// }
// console.log(formattime(numberUserMinutes));


//=================================================
// №5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

//=============================================


// const userLogin = prompt("Введіть логін");
// console.log(userLogin);

// if (userLogin === "Адмін") {
//   const userPassword = prompt("Введіть пароль");

//   if (userPassword === null || userPassword === "") {
//     alert("Скасовано");
//   } else if (userPassword === "Я головний") {
//     alert("Добрий день!");
//   } else {
//     alert("Невірний пароль!");
//   }

// } else if (userLogin === null || userLogin === "") {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

//========================================
// №6  
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
//============================================== 
// let numberLich = 0;
// while (numberLich <= 20) {
//     console.log(numberLich);
//     numberLich++;
// }



// №7:

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

//  function getNumbers(min, max) {

//     for (let i = max; i >= min; i--)
//         console.log(i);

    //  let sum = 0; 
  // for (let i = min; i <= max; i++) {
//      if (i % 2 === 0) {
        //  sum += i;
         
    //  }
    
//     }
    //  return sum;
//  }
//  console.log(getNumbers(8, 15));


// №8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
    
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Not a number!";
//         }
//         if (a < b) {
//             return a;
       
//         } else if (a > b) {
//             return b;
//         }
    
    
// }
// console.log(min(8, 15));
// console.log(min(40, 17));
// =================================

// №9:

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (typeof age !== "number") {
//     return "Not a number!";
//   }

//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have parents permission?");
//   }
// }


// console.log(isAdult(20));
// console.log(isAdult(15)); 
// console.log(isAdult("gguuuu")); 


// ============================

// №10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

//===========================


//--------------------------
// function isEven(n) {
//   return n % 2 === 0 ? "чётное" : "нечётное";
// }
//let namberMin = Number(prompt("min"));
    
//let namberMax = Number(prompt("max"));
// ==================================================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);


//   for (const value of values) {
    
//     totalSalary += value;
//     //console.log(totalSalary);
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// ======================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   }
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// ===============================================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {

//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
  
// }
// console.log(hexColors);
// console.log(rgbColors);
// ====================================

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
  
//   return null; // если не нашли совпадения
// }

// console.log(getProductPrice("Radar"));   // 1300
// console.log(getProductPrice("Grip"));    // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid"));   // 400
// console.log(getProductPrice("Engine"));  // null
//=======================================
