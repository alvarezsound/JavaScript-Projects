function addition_Function() {
    var addition = 4 + 5;
    document.getElementById("Math_Add").innerHTML = "4 + 5 = " + addition
}
//addition function

function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("Math_Subt").innerHTML = "6 - 3 = " + subtraction
}
//subtraction function

function multiplication_Function() {
    var multiplication = 4 * 5;
    document.getElementById("Math_Mult").innerHTML = "4 * 5 = " + multiplication
}
//multiplication function

function division_Function() {
    var division= 6 / 3;
    document.getElementById("Math_Div").innerHTML = "6 / 3 = " + division
}
//division function

function more_Math() {
    var simple_Math = (3 + 4) * 11 / 2 - 3;
    document.getElementById("Math_More").innerHTML = "(3 + 4) * 11 / 2 - 3 = " + simple_Math;
}
//multiple operations function

function modulus_Operator() {
    var modulus = 25 % 6;
    document.getElementById("Math_Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}
//modulus operator function

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_Negation").innerHTML = -x;
}
//negation function function

var A = 6;
A++;
document.write(A);
//displays incrament

document.write('<br>');

var B = 9;
B--;
document.write(B);
//displays decrament

window.alert(Math.random() * 100);
//displays random number between 0 and 100 in an alert window

document.write('<br>');

document.write(Math.round(55.7));
//displays 55.7 rounded