function playGuess() {
  var answer = parseInt(Math.random() * 100);
  var correctAnswerCount = 0
  while (true) {
    var userAnswer = prompt("Введите число от 1 до 100, для выхода нажжмите q.")
    correctAnswerCount++
  if(userAnswer == "q") {
    break;
  }

    userAnswer = parseInt(userAnswer);

    if(userAnswer > answer) {
    alert("Ваш ответ слишком большой.");
    }else if(userAnswer < answer) {
    alert("Ваш ответ слишком маленький.")
    }else if(userAnswer == answer) {
    alert("Вы угадали c " + correctAnswerCount + " Попытки!")
          break;
    } else {
    alert("Ну я же просил ввести число от 1 до 100!")
    }

  }
}