function display(){
 
    document.write("Функция в JavaScript");
}

display();

// prompt - окно ввода значения
var strWin = prompt("Введите трехзначное число", 100);  // после запятой выводимое в окне значение по умолчанию
var str = parseInt(strWin);                             // распознаётся введённое в окне значение и сохраняется в переменую str
document.write(", было введено число: " + str);         // вывод введённого значения

var s;

function sum(str){

    var s = str + str;
    var ss = str * str;
    document.write(", квадрат числа равен: " + ss + ", сумма чисел: " + s);

    var sss = "Квадрат числа равен: " + ss + ", сумма чисел: " + s;
    alert(sss);

    alert("Значение s = " + s);

    return s;
}

sum(str);

function sym(s){

    document.write(". Возвращенное значение s = " + s);
}

sym(s);