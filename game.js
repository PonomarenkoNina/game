var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"]; //створення масиву для зберігання назв міст
console.log(cities);
var wrongAttempts = 0; //змінна для підрахунку помилок
console.log(wrongAttempts);
var computerLost = false; //вказує на те, чи програв комп'ютер
var lastCity = null; //останнє місто, яке назвала програма

function playGame() {
  //початок гри (виклик функції та отримання міста, яке ввів користувач, запам'ятовує назву міста і на яку літеру закінчується, знаходить останню літеру зі строки)
  var userCityInput = document.getElementById("cityInput"); //звертаємось через об'єкт до елементу cityInput - користувач вводить місто в інпут
  var outputElement = document.getElementById("output"); //output - виводить текстові повідомлення
  var userCity = userCityInput.value.trim().toUpperCase(); //userCityInput.value - повертає назву, введену користувачем і trim - видаляє пробіли, переводить текст у верхній  регістр

  if (userCity.length === 0) {
    //перевірка, чи введено щось користувачем
    console.log("Користувач не ввів місто.");
    outputElement.textContent = "Ви не ввели місто!";
    return;
  }
  //перевіряємо, чи введене користувачем місто відповідає правилам гри:
  //якщо останнє місто, яке назвала програма, ще не було встановлене (null), або введене користувачем місто починається на останню літеру останнього названого міста, гра може продовжуватися
  if (lastCity === null || userCity.startsWith(lastCity[lastCity.length - 1])) {
    //якщо умова виконується, виводимо в консоль введене користувачем місто
    console.log("Введене користувачем місто: ", userCity);
    var i = cities.findIndex((city) => city.toUpperCase() === userCity);
    //шукає індекс міста у масиві cities, яке точно відповідає userCity, ігноруючи регістр. Функція findIndex шукає елемент у масиві, для якого функція зворотного виклику повертає true

    if (i !== -1) {
      //якщо місто знайдено в масиві, то
      cities.splice(i, 1); //вилучаємо місто з масиву
      console.log("Місто видалено з масиву. Новий масив міст:", cities);

      var lastLetter = userCity.charAt(userCity.length - 1); //отримаємо останню літеру введеного користувачем міста
      console.log(lastLetter);
      var nextCity = getNextCity(lastLetter); //пошук наступного міста за останньою літерою
      console.log("Значення nextCity: ", nextCity);

      if (nextCity !== null) {
        //перевіряємо чи існує наступне місто - чи nextCity не дорівнює null
        console.log("Наступне місто: " + nextCity);
        outputElement.textContent = "Наступне місто: " + nextCity; //встановлює текстовий вміст і виводиться повідомлення
      } else {
        console.log("Користувач виграв!");
        //ще, якщо дорівнює null, то місто не знайдено і гра завершується
        outputElement.textContent = "Ви виграли!";
        wrongAttempts = 0; //скидання лічильника неправильних спроб у випадку програшу компьютера
        computerLost = true;
      }
    } else {
      //якщо місто не знайдено в масиві
      console.log("Місто не знайдено в масиві.");
      outputElement.textContent =
        "Ви ввели місто не з останньої літери попереднього міста!Сробуй ще раз!";
      wrongAttempts++; //збільшення кількості неправильних спроб

      if (wrongAttempts >= 3) {
        //перевіряємо, чи кількість неправильних спроб більше або дорівнює 3
        console.log("Користувач ввів тричі неправильно. Компьютер виграв!");
        outputElement.textContent =
          "Ви тричі ввели неправильне місто. Програли.";
        wrongAttempts = 0;
        computerLost = false;
      }
    }
  } else {
    console.log("Ви ввели місто не з останньої літери попереднього міста.");
    outputElement.textContent =
      "Ви ввели місто не з останньої літери попереднього міста!";
    wrongAttempts++;
  }

  userCityInput.value = ""; //очищення поля вводу
  userCityInput.focus(); //перенаправлення фокусу для введення наступного міста

  checkGameOver(); //перевірка на завершення гри після кожного шагу
}

function getNextCity(lastletter) {
  //пошук міста в пам'яті за останньою літерою - викликаємо функцію наступного міста з параметром (остання літера)
  for (var i = 0; i < cities.length; i++) {
    //цикл пробігається по всіх містах, змінна i - початкове значення
    var city = cities[i];
    console.log(
      "Перевірка міста: " + city + " перевірка на літеру " + lastletter
    );
    //перевіряє чи перша літера імені міста співпадає з переданою літерою і перевіряє чи місто не було використане
    if (
      city.charAt(0).toUpperCase() == lastletter &&
      cities.indexOf(city) !== -1
    ) {
      //якщо так, то також вилучаємо його з масиву
      console.log("Знайдено місто, що починається з потрібної літери:", city);
      cities.splice(i, 1); //вилучення
      console.log("Масив міст після вилучення міста: ", cities);
      return city; //повернення знайденого міста
    }
  }
  return null; //повернення null, якщо не знайдено жодного міста
}

function checkGameOver() {
  //завершення гри - вивід результатів, функція означає чи виграв користувач або програв і виводь повідомлення
  var outputElement = document.getElementById("output");

  if (wrongAttempts >= 3 || cities.length == 0 || computerLost) {
    //перевіряємо чи кількість неправильних спроб більше або дорівнює 3 або ж чи кількість міст у масиві cities дорівнює 0 або ж перевіряє, чи вже програв комп'ютер, гра закінчується, якщо будь-яка з цих умов виконується
    console.log(
      "Гра закінчена: кількість неправильних спроб " +
        wrongAttempts +
        " або міста закінчились: " +
        cities.length
    );
    outputElement.textContent = "Ви виграли!Гра закінчена!";

    //очистити ігрове поле
    cities = []; //всі міста видаляються з масиву, оскільки гра закінчилась
    wrongAttempts = 0; //лічильник неправильних спроб скидається до 0, оскільки гра завершилась і починається нова гра
    computerLost = false; //змінна встановлюється в false, оскільки гра закінчилась і комп'ютер не програв

    //блокуємо введення користувача
    var userCityInput = document.getElementById("cityInput");
    userCityInput.disabled = true;
  } else {
    //якщо жодна з умов не виконується - гра продовжується
    console.log(
      "Продовжуємо гру: неправильних спроб:",
      wrongAttempts,
      " міста залишились:",
      cities.length
    );
  }
}
