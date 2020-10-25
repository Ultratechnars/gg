let timerShow = getElementById("tim");

var timeMinut = 1200;

tim = setInterval(function () {
	var seconds = timeMinut%60 // Получаем секунды
	var minutes = timeMinut/60%60 // Получаем минуты
    
	// Условие если время закончилось то...
	if (timeMinut <= 0) {
		// Таймер удаляется
		clearInterval(tim);
		// Выводит сообщение что время закончилось
		alert("Время закончилось");
	}
	else { // Иначе
		// Создаём строку с выводом времени
		let timSTR = `${Math.trunc(minuts)}:${seconds}`;
		// Выводим строку в блок для показа таймера
		timerShow.innerHTML = timSTR;
	}
	--timeMinut; // Уменьшаем таймер
}, 1000)