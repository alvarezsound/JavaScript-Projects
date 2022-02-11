document.write(typeof 6);
//"Type of" coercion
document.write("<br>")
document.write("22" + 8);
//"Type" coercion

document.write("<br>")

function func_Nan() {
    document.getElementById("Test_Nan").innerHTML = 0/0;
}
//Getting the browser to display NaN (0 can't be divided by 0)

function func_True() {
    document.getElementById("Test_True").innerHTML = isNaN('This is a string');
}
//Getting the browser to display True

function func_False() {
    document.getElementById("Test_False").innerHTML = isNaN('007');
}
//Getting the browser to display False

document.write(3E310);
//the number will be to large to display so it will say "infinity"

document.write("<br>")

document.write(-3E310);
//the number will be to large to display so it will say "-infinity"

document.write("<br>")

document.write(33 > 5);
//using boolean logic to display true

document.write("<br>")

document.write(22 < 4);
//using boolean logic to display false

console.log(4 + 8);
//displays results of this math equation in the browsers console log

console.log(4 > 8);
//displays false in the console log because it's not true

document.write("<br>")

document.write(9 == 9);
//using double equal signs to display true

document.write("<br>")

document.write(7 == 4)
//using double equal signs to display false

document.write("<br>")

A = 10
B = 10
C = 15
D = "15"

document.write(A === B);
//triple equal sign test
document.write("<br>")

document.write(A === D);
//triple equal sign test

document.write("<br>")

document.write(C === D);
//triple equal sign test

document.write("<br>")

document.write(B === C);
//triple equal sign test

document.write("<br>")

document.write(5 > 2 && 10 > 4);
//AND operator test

document.write("<br>")

document.write(5 > 10 && 10 > 4);
//AND operator test

document.write("<br>")

document.write(5 > 10 || 10 > 4);
//OR operator test

document.write("<br>")

document.write(5 > 10 || 10 > 20);
//OR operator test

document.write("<br>")

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(20 > 10);
}
//Not operator test false

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}
//Not operator test true



