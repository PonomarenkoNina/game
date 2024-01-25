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
// Output of game results - вивід результатів гри
