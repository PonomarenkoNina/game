var cities = ["Київ", "Вінниця", "Яготин", "Нова Каховка", "Авдіївка"];
var wrongAttempts = 0;

function playGame() {
  //початок гри
  var cityToAnswer = null; //на початку ми нічого не відповідаємо, тож змінна з відповіддю пуста
  var userCityInput = getUserInput(); //читаємо ввод користувача і приводимо в апер або ловер кейс якщо треба

  if (isCityValid(cityToAnswer, userCityInput)) {
    //перевіряємо чи місто, що назвав користувач валідне(правильне)
    removeCityFromArray(userCityInput); //якщо так, то видаляємо це місто з масиву
    cityToAnswer = findCityThatStartsFrom(
      userCityInput.charAt(userCityInput.length - 1)
    ); //і шукаємо місто, яке починається на останню букву міста, що ввів користувач

    if (cityToAnswer != null) {
      //якщо місто знайшли
      writeMessageToUser(cityToAnswer); //пишемо користувачу відповідь - те місто, яке знайшли
      removeCityFromArray(userCityInput); //і також видаляємо його з масиву
    } else {
      //а якщо програма не знає міста на цю букву - то програма програла, а користувач виграв
      writeMessageToUser("Вітаю, ви виграли!"); //виводимо повідомлення для користувача про виграш
    }
  } else {
    //а якщо користувач неправильно назвав місто, тоді додаємо до помилки 1 спробу
    wrongAttempts++; //постсфіксне збільщення
    if (wrongAttempts > 3) {
      //перевіряємо чи він помилився більше 3 разів
      writeMessageToUser("Ви тричі ввели неправильно місто, ви програли!"); //якщо так, то він програв
    } else {
      //якщо помилився менше 3 разів, то пишемо, що користувач неправильно написав місто і що воно має починатися з останньої букви, даємо шанс виправитися
      writeMessageToUser(
        "Неправильно, ваше місто має починатися на букву " +
          cityToAnswer.charAt(cityToAnswer.length - 1)
      );
    }
  }
}

function getUserInput() {
  //отримуємо дані від користувача
  var userCityInput = document.getElementById("cityInput"); //звертаємось через об'єкт до елементу cityInput - користувач вводить місто в інпут
  return userCityInput.value.trim().toUpperCase(); //userCityInput.value - повертає назву, введену користувачем і trim - видаляє пробіли, переводить текст у верхній регістр
}

function getNextCity(lastletter) {
  //пошук міста в пам'яті за останною літерою
  for (var i = 0; i < cities.length; i++) {
    // цикл пробігається по всіх містах, змінна i - початкове значення
    var city = cities[i];
    console.log(
      "Перевірка міста: " + city + " перевірка на літеру " + lastletter
    );
    // перевіряє чи перша літера імені міста співпадає з переданою літерою і перевіряє чи місто не було використане

    if (
      city.charAt(0).toUpperCase() == lastletter &&
      cities.indexOf(city) !== -1
    ) {
      //якщо так, то вилучаємо його з масиву
      console.log("Знайдено місто, що починається з потрібної літери:", city);
      cities.splice(i, 1); //вилучення
      console.log("Масив міст після вилучення міста: ", cities);
      return city; //повернення знайденого міста
    }
  }
  return null; //повернення null, якщо не знайдено жодного міста
}

function checkGameOver() {
  //завершення гри - вивід результатів, функція означає чи виграв користувач або програв і виводить повідомлення
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
  }
}

function removeCityFromArray(cityName) {
  //видаляємо місто з масиву cities, що були використані за його назвою cityName
  var i = cities.indexOf(cityName); //метод indexOf знаходить індекс cityName
  if (i !== -1) {
    //якщо місто знайдено у масиві, тобто індекс не рівний -1, то
    cities.splice(i, 1); //видалення з масиву
  }
}

function isCityValid(lastCity, currentCity) {
  //перевіряємо чи введене користувачем місто є допустиме для використання, враховуючи останнє введене місто
  if (!lastCity) {
    //перевіряємо чи останнє місто null чи undefined, якщо так то currentCity(поточне місто) є перше, яке користувач ввів у гру і повертає true
    return true; //перше ввелдене місто
  }
  return (
    lastCity.charAt(lastCity.length - 1).toUpperCase() ===
    currentCity.charAt(0).toUpperCase()
  ); //перевіряє чи остання буква попереднього введеного міста дорівнює першій букві поточного ввведеного міста
}

function writeMessageToUser(message) {
  var outputElement = document.getElementById("output");
  outputElement.textContent = message;
}
