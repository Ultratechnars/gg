var timeMinut = 1200;

var time;
var seconds
time = setInterval(function () {
	seconds = timeMinut%60 // Получаем секунды
	//minutes = timeMinut/60%60 // Получаем минуты
    
	// Условие если время закончилось то...
	if (timeMinut <= 0) {
		// Таймер удаляется
		clearInterval(timer);
		// Выводит сообщение что время закончилось
		alert("Время закончилось");
	}
	else { // Иначе
		// Создаём строку с выводом времени
		time = $`{Math.trunc(minuts)}:${seconds}`;
		// Выводим строку в блок для показа таймера
	}
	--timeMinut; // Уменьшаем таймер
}, 1)
setInterval(function(){document.getElementById("tim");tim.innerHTML = seconds;}, 1);