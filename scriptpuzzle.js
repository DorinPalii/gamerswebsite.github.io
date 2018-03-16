var correctAnswerCount = 0;

function askQuestion(textBoxId, answer){
	var userAnswer = document.getElementById(textBoxId).value;
	if (userAnswer == answer) {
		correctAnswerCount++;
	}
}



function playPuzzle() {
	correctAnswerCount = 0

	askQuestion("userAnswer1", "лампочка")
	askQuestion("userAnswer2", "елка")

	document.getElementById("result").textContent = "Правильных ответов: " + correctAnswerCount
}