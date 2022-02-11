function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Ternary operation

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//Ternary operation

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
//object constructor function

function Pet(Animal, Breed, Age) {
    this.Pet_Animal= Animal;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
}
var Georgie = new Pet("Cat", "Siamese", 3);
function petFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Georgie is a " + Georgie.Pet_Breed + " " + Georgie.Pet_Animal + ". They are " + 
    Georgie.Pet_Age + " years old.";
}
//new and this keyword constructor function challenge

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Double ();
    function Double() {
        var Starting_point = 10;
        function Multiply_two() {Starting_point *= 2;}
        Multiply_two();
        return Starting_point;
    }
}
//nested function