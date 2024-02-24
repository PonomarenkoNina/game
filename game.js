var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"]; //створення масиву для зберігання назв міст
console.log(cities);
var wrongAttempts = 0; //змінна для підрахунку помилок
console.log(wrongAttempts);

function playGame() {
  //початок гри (виклик функції та отримання міста, яке ввів користувач, запам'ятовує назву міста і на яку літеру закінчується, знаходить останню літеру зі строки)
  var userCityInput = document.getElementById("cityInput"); //звертаємось через об'єкт до елементу cityInput - користувач вводить місто в інпут
  var outputElement = document.getElementById("output"); //output - виводить текстові повідомлення
  var userCity = userCityInput.value.trim().toUpperCase(); //userCityInput.value - повертає назву, введену користувачем і trim - видаляє пробіли, переводить текст у верхній  регістр

  if (userCity.length === 0) {
    //перевірка, чи введено щось користувачем
    outputElement.textContent = "Ви не ввели місто!";
    return;
  }

  if (userCity.length > 0) {
    //користувач вводить місто і йде перевірка, чи введене користувачем місто збігається з містом у масиві
    console.log("Введене користувачем місто: ", userCity);
    //пошук індексу міста, яке ввів користувач за допомогою методу findIndex, який порівнює міста, переведені в верхній регістр, з містом, яке ввів користувач
    var i = cities.findIndex((city) => city.toUpperCase() === userCity);

    if (i !== -1) {
      //якщо місто знайдено в масиві, то
      cities.splice(i, 1); //вилучаємо місто з масиву
      console.log("Місто видалено з масиву. Новий масив міст:", cities);
    } else {
      //якщо ні
      console.log("Місто не знайдено в масиві.");
      wrongAttempts++; //збільшення кількості неправильних спроб
    }

    if (cities.includes(userCity)) {
      //перевіркаб чи введене користувачем місто правильне
      var lastletter = userCity.charAt(userCity.length - 1); //отримаємо останню літеру введеного користувачем міста
      console.log(lastletter);
      var nextCity = getNextCity(lastletter); //пошук наступного міста за останньою літерою
      console.log("Значення nextCity: ", nextCity);

      if (nextCity !== null) {
        //перевіряємо чи існує наступне місто - чи nextCity не дорівнює null
        console.log("Наступне місто: " + nextCity);
        outputElement.textContent = "Наступне місто: " + nextCity; //встановлює текстовий вміст і виводиться повідомлення
      } else {
        //ще, якщо дорівнює null, то місто не знайдено і гра завершується
        outputElement.textContent = "Вітаю, ви виграли!";
        wrongAttempts = 0; //скидання лічильника неправильних спроб у випадку програшу
      }
    } else {
      //якщо введене місто не вірне
      wrongAttempts++; //збільшення кількості неправильних спроб
    }

    userCityInput.value = ""; //очищення поля вводу
    userCityInput.focus(); //перенаправлення фокусу для введення наступного міста
    checkGameOver(); //перевірка на завершення гри після кожного шагу
  }
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

  if (wrongAttempts >= 3 || cities.length == 0) {
    //перевіряємо чи кількість неправильних спроб більше або дорівнює 3 або ж чи кількість міст у масиві cities дорівнює 0, гра закінчується, якщо будь-яка з цих умов виконується
    console.log(
      "Гра закінчена: кількість неправильних спроб " +
        wrongAttempts +
        " або міста закінчились: " +
        cities.length
    );
    outputElement.textContent = "Я програв! Вітаю з перемогою!";
    return; //оператор припиняє виконання функції, оскільки гра закінчилась
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
