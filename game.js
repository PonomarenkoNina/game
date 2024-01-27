// Creating an array for storing city names - Створення масиву для зберігання назв міст
var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"];
// Definition of variables - Визначення змінних
var attempt;
var correct = 0;
var attempts = 0;
var weFinished = false;

// The appearance of a dialog box with a term, where the user will enter the name of the city - Поява діалогового вікна із строкою, куди користувач буде вводити назву міста
var attempt = prompt("Починаємо гру в города! (Введіть назву міста):");
alert(attempt);

// Calling the function and checking the correctness of entering the city name - виклик функції та перевірка правильності введеня назви міста
function playGame() {
  userInput = document.getElementById("cityInput");
  if (userInput == "") {
    alert(
      "Введіть назву міста, яке закінчується на останню літеру міста, яке ввів користувач!"
    );
    return;
  }
  if (attempt < 0 || attempt > 3) {
    alert("Неправильно! Спробуй ще раз!");
  } else {
    attempts = attempts++; // We increase the number of attempts by 1 - Кількість спроб збільшуємо на 1
  }
  if (attempts == 3) {
    weFinished = true;
    alert("Міста закінчились!");
  }
}

// 1. User input of a letter in a dialog box - Введення користувачем літери в діалогове вікно
function playCityGame() {
  userInput = prompt("Введіть літеру:");
}
// Check for correct letter input - Перевірка на правильність введення літери
if (validateInput(userInput)) {
  alert("Введіть, будь ласка лише одну букву.");
}
// 2. Remember the letter - Запам'ятати літеру
var rememberLeter = userInput;
// 3. Search for a city that starts with a given letter - Пошук міста, яке починається із заданої літери
var matchesCity = findCity(rememberLeter);
function findCity(letter) {
  cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"];
}
// 4. Output of results - вивід результатів
if (matchesCity) {
  alert("Місто" + matchesCity + "Ви виграли!");
} else {
  alert("Міста закінчились, що починаються з цієї літери. Ви програли!");
}
