var tru=0;
var fal=0;
var n = sessionStorage.getItem("quest");
var primer = document.getElementById('primer');
var histor = document.getElementById('histor');
function kirill(){
    var op = Math.round(Math.random() * 1000);
    var oper;
    switch(op % 3){ 
        case 0:
            oper = '+';
            break;
        case 1:
            oper = '-';
            break;
        case 2:
            oper = '*';
            break;
    }
    if(sessionStorage.getItem("grade") >= 4){
        if(oper === '*'){
            var e = Math.round(Math.random()*100) + ' ' + oper + ' ' +  Math.round(Math.random()*10) + " ="; /*iii*/
        }else{
            var e = Math.round(Math.random()*100) + ' ' + oper + ' ' +  Math.round(Math.random()*100) + " =";
        }
    } else{
        var e = Math.round(Math.random()*9) + ' ' + oper + ' ' +  Math.round(Math.random()*9) + " =";
    }
	return e;
}
function newprimer(){ 
    n--;     
    primer.innerHTML = kirill() + "<input type='number' id='suvk'>"; /*input*/
    document.getElementById("suvk").focus();
    n--;
    document.getElementById('suvk').onchange=nextprimer;
}
function nextprimer(){
    n--;
    var exam = primer.innerHTML;
    var inp = document.getElementById('suvk');
    exam = exam.substring(0, exam.indexOf("="));
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
    if(n > 0){
        newprimer();
    }
    else{
        sessionStorage.setItem("corr", tru);
        sessionStorage.setItem("incorr", fal);
        window.location.replace("results.html");
    }
    document.getElementById("suvk").focus();
    document.getElementById("vernie");
    vernie.innerHTML = tru;
    document.getElementById("nevern");
    nevern.innerHTML = fal; 
    document.getElementById("left");
    nevern.innerHTML = n; 
}
  
<<<<<<< Updated upstream
    newprimer();

=======
    newprimer();
>>>>>>> Stashed changes
