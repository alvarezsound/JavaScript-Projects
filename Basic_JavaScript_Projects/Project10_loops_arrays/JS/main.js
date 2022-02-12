function Call_Loop() {
    var Digit = ""
    var X = 1;
    while (X < 6) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//loop assignment

function length() { 
    document.write("My name is Jeff".length) 
} 
length();
//string length property assingment

document.write("<br>");

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//for loop assignment

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}
//array assignment

function constant_Function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}
    Musical_Instrument.color = "blue"
    Musical_Instrument.price = "900"
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//constant assignment

var X = 55;
document.write(X);
{
    let X = 66;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//let assignment

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
};
document.getElementById("Car_Object").innerHTML = car.description();
//return and let assignment

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("break").innerHTML = "Today is " + day;
//break assignment

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 4) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;
//continue assignment
