// Creating an array for storing city names - Створення масиву для зберігання назв міст
var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"];
// Definition of variables - Визначення змінних
var attempt;
var wrongAttempts = 0; // Змінна для підрахунку помилок
// Виклик функції та отримання міста, яке ввів користувач
// запам'ятовує назву міста і на яку літеру закінчується, знаходить останню літеру зі строки
function playGame() {
  var userCityInput = document.getElementById("cityInput"); // звертаємось через об'єкт до елементу cityInput - користувач вводить місто в інпут
  var outputElement = document.getElementById("output"); // output - виводить текстові повідомлення
  var userCity = userCityInput.value.trim(); // userCityInput.value - повертає назву, введену користувачем і trim - видаляє пробіли
  // Користувач вводить місто і йде перевірка
  if (userCity.length > 0) {
    var lastletter = userCity.charAt(userCity.length - 1); // отримаємо останню літеру введеного користувачем міста
    var nextCity = getNextCity(lastletter);
    // Перевірка чи існує наступне місто
    if (nextCity) {
      outputElement.textContent = "Cайт:" + nextCity; // встановлює текстовий вміст і виводиться повідомлення
    } else {
      // ще - перевірка кількості неправильних спроб та закінчення міст
      wrongAttempts++; // We increase the number of attempts by 1 - Кількість спроб збільшуємо на 1
      outputElement.textContent = "Будь ласка, введіть назву міста.";
    }

    userCityInput.value = "";
    userCityInput.focus(); // для введення наступного міста
  }
  //  Search for a city that starts with a given letter - Пошук міста в пам'яті - викликаємо
  // функцію наступного міста з параметром (остання літера)
  function getNextCity(lastletter) {
    for (var i = 0; i < cities.length; i++) {
      // цикл пробігається по всіх містах, змінна i - початкове значення
      var city = cities[i];
      if (city.charAt(0) == lastletter && cities.indexOf(city) !== -1) {
      }
      // перевіряє чи перша літера імені міста співпадає з переданою літерою
      // і перевіряє чи знаходиться місто в масиві
      return city;
    }
    return null;
  }
  // перевіряє чи кількість неправильних спроб більше або дорівнює 3
  if (wrongAttempts >= 3 || cities.length == 0) {
    alert("Сайт: Я програв! Вітаю з перемогою!");
  } else {
    outputElement.textContent = "Сайт: Неправильно. Спробуй ще!";
  }
}
// Output of results - вивід результатів, функція означає чи виграв користувач або програв і виводь повідомлення
function checkGameOver() {
  var outputElement = document.getElementById("output");
  outputElement.textContent = "Сайт: Я програв! Вітаю з перемогою!";
}
