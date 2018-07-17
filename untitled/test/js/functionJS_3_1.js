function display(){
 
    document.write("Функция в JavaScript");
}

display();

var strWin = prompt("Введите трехзначное число", 100);
var str = parseInt(strWin);
document.write(", было введено число: " + str);

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