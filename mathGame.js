var tru=0;
var fal=0;
var time=0;
      
var primer = document.getElementById('primer');
var histor = document.getElementById('histor');
function kirill(){
	var e = Math.round(Math.random()*9) + "+" +  Math.round(Math.random()*9) + "="; /*iii*/
	return e;
}
function newprimer(){      
    primer.innerHTML = kirill() + "<input type='text' id='suvk'>"; /*input*/
    document.getElementById("suvk").focus();
    document.getElementById('suvk').onchange=nextprimer;
}
function nextprimer(){
    var exam = primer.innerHTML
    var inp = document.getElementById('suvk')
    exam = exam.substring(0, exam.indexOf("="))
    var result;
    if( inp.value==eval(exam)){
        result = ". Верно." ;
        tru=tru+1
    }
    else{
        result= ". Неверно, правильный ответ " + eval(exam);
        fal=fal+1
    }
    histor.innerHTML = exam + " = " + inp.value + result + "\n" + histor.innerHTML;
    newprimer();
    document.getElementById("suvk").focus();
    document.getElementById("vernie");
    vernie.innerHTML = tru;
    document.getElementById("nevern");
    nevern.innerHTML = fal;
    document.getElementById("tim");
    nevern.innerHTML = time;
}
  
    newprimer();
    timer = setInterval(function () {
        seconds = timeMinut%60 // Получаем секунды
        minutes = timeMinut/60%60 // Получаем минуты
       
        // Условие если время закончилось то...
        if (timeMinut <= 0) {
            // Таймер удаляется
            clearInterval(timer);
            // Выводит сообщение что время закончилось
            alert("Время закончилось");
        } else { // Иначе
            // Создаём строку с выводом времени
            time = $`{Math.trunc(minuts)}:${seconds}`;
            // Выводим строку в блок для показа таймера
           
        }
        --timeMinut; // Уменьшаем таймер
    }, 1000)
        