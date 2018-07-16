var xstr = prompt("Введите первое число (x)", 25);
var ystr = prompt("Введите второе число (y)", 5);
var x = parseInt(xstr);
var y = parseInt(ystr);
var z = x * y;
alert("x = " + x + ", y = " + y + ", произведение двух чисел z = " + z);

function display(){
 
    document.write("функция в JavaScript, произведение двух чисел z = " + z);
}
display();

function newplay(){

    var z = x / y;
    document.write(", частное двух чисел z = " + z);
}
newplay();

function display2(x){  // определение функции
 
    var z = x * x;
    document.write(", " + x + " в квадрате равно " + z);
}
 
display2(x); // вызов функции
display2(5);
display2(12);
display2(y);

function sum(a, b, c){
    let d = a + b + c;
    document.write(", d = " + d);
}
sum(1, 2, 3);
let nums = [4, 5, 6];
sum(...nums);