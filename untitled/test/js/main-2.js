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