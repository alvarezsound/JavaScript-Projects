//switch assignment
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Colo_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Colo_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Colo_String;
        break;
        case "Green":
            Color_Output = "Green" + Colo_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Colo_String;
        break;
        case "Pink":
            Color_Output = "Pinnk" + Colo_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Colo_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//class name assignment
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}



//gradient
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 350, 0);
grd.addColorStop(0, "cyan");
grd.addColorStop(1, "yellow");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 300);

//creating graphic within canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "60px Arial";
ctx.strokeText("Hello World", 100, 150);
