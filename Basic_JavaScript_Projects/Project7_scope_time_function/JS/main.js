var X = 20;
function Add_numbers_1() {
    document.write(30 + X + "<br>");
}
//global variable example

function Add_numbers_2() {
    var Y = 15;
    document.write(15 + Y + "<br>");
}
//local variable example

function Add_numbers_3() {
    document.write(20 + Y + "<br>");
}
//error displays in console log because Y is a local variable from previous function

Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

function get_Date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//if statement using date.gethours

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//if and else statement assignment

function Time_function() {
    var Time =  new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//else if statement assignment