function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//concatenate assignment

function slice_Method(){
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//slice assingment

function uppercase() {
    var str = 'my name is jeff';
    var string = str.toUpperCase();
    document.write(string);
}
uppercase();
//toUpperCase() assignment

document.write ("<br>")

var string = "my name is jeff";
var re1 = /j/;
document.write(string.search(re1));
//search() method assignment

function string_Method() {
    var X =199;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//toString() assignment

function precision_Method() {
    var Y = 12445.30748492849403923;
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);
}
//toPrecision()  method

function fixed_Method() {
    var Z = 10.56789;
    document.getElementById("Fixed").innerHTML = Z.toFixed(1);
}
//toFixed()  method

function valueof_Method() {
    var P = "My name is Jeff.";
    document.getElementById("valueof").innerHTML = P.valueOf();
}
//valueOf()  method


