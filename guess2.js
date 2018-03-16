function playGuess2(){
	var quest = parseInt(Math.random() * 100);
        var gamer = 1;
        var serial = 0;
        var teset = 0;
        do {
          rez = prompt("Игрок "+gamer+". Введите число от 0 до 100");
          serial ++;
          if (rez == "q") {
            alert("Вы прекратили игру").
            break;
          }
          test = parseInt(rez);
          if (test > quest){
            alert("Слишком много");
          } else if (test < quest) {
            alert("Слишком мало");
          } else if (test==quest) {
            alert("Игрок " +gamer+ " Вы угадали с "+serial+" попытки");
            break;
          } else {
            alert("Необходимо вводить число от 0 до 100");
          }

          if (gamer == 1) {
            gamer = 2;
          } else {
            gamer = 1;
          }
        } while (true);
}