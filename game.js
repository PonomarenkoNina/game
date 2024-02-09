// Creating an array for storing city names - Створення масиву для зберігання назв міст
var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"];
console.log(cities);
// Definition of variables - Визначення змінних
var wrongAttempts = 0; // Змінна для підрахунку помилок
console.log(wrongAttempts);
// Виклик функції та отримання міста, яке ввів користувач
// запам'ятовує назву міста і на яку літеру закінчується, знаходить останню літеру зі строки
function playGame() {
  var userCityInput = document.getElementById("cityInput"); // звертаємось через об'єкт до елементу cityInput - користувач вводить місто в інпут
  console.log("Введенe користувачем місто: ", userCityInput);
  var outputElement = document.getElementById("output"); // output - виводить текстові повідомлення
  var userCity = userCityInput.value.trim(); // userCityInput.value - повертає назву, введену користувачем і trim - видаляє пробіли
  // Користувач вводить місто і йде перевірка
  if (userCity.length > 0) {
    var lastletter = userCity.charAt(userCity.length - 1); // отримаємо останню літеру введеного користувачем міста
    console.log(lastletter);
    var nextCity = getNextCity(lastletter);
    console.log("Значення nextCity: ", nextCity);
    // Перевірка чи існує наступне місто
    if (nextCity !== null) {
      console.log("Наступне місто: " + nextCity);
      outputElement.textContent = "Cайт: " + nextCity; // встановлює текстовий вміст і виводиться повідомлення
    } else {
      // ще - перевірка кількості неправильних спроб та закінчення міст
      wrongAttempts++; // We increase the number of attempts by 1 - Кількість спроб збільшуємо на 1
      outputElement.textContent = "Будь ласка, введіть назву міста.";
    }

    userCityInput.value = "";
    userCityInput.focus(); // для введення наступного міста
    checkGameOver(); // перевірка на завершення гри після кожного шагу
  }
}
//  Search for a city that starts with a given letter - Пошук міста в пам'яті - викликаємо
// функцію наступного міста з параметром (остання літера)
function getNextCity(lastletter) {
  for (var i = 0; i < cities.length; i++) {
    // цикл пробігається по всіх містах, змінна i - початкове значення
    var city = cities[i];
    console.log(
      "Перевірка міста: " + city + " перевірка на літеру " + lastletter
    );
    // перевіряє чи перша літера імені міста співпадає з переданою літерою
    // і перевіряє чи знаходиться місто в масиві
    if (city.charAt(0) == lastletter && cities.indexOf(city) !== -1) {
      console.log("Знайдено місто, що починається з потрібної літери:", city);
      cities.splice(i, 1); // Вилучити використане місто з масиву
      console.log("Масив міст після вилучення міста: ", cities);
      return city;
    }
  }
  return null;
}
// Output of results - вивід результатів, функція означає чи виграв користувач або програв і виводь повідомлення
function checkGameOver() {
  var outputElement = document.getElementById("output");
  // перевіряє чи кількість неправильних спроб більше або дорівнює 3
  if (wrongAttempts >= 3 || cities.length == 0) {
    console.log(
      "Гра закінчена: кількість неправильних спроб " +
        wrongAttempts +
        " чи міста закінчились: " +
        cities.length
    );
    outputElement.textContent = "Сайт: Я програв! Вітаю з перемогою!";
    return;
  } else {
    console.log(
      "Продовжуємо гру: неправильних спроб:",
      wrongAttempts,
      " міста залишились:",
      cities.length
    );
    outputElement.textContent = "Сайт: Неправильно. Спробуй ще!";
  }
}
