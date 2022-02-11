function cloneButton() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Clone");
    x.appendChild(t)
    document.body.appendChild(x)
}
//function that adds a button everytime you click

const element = document.getElementById("p1");

function changeColor(newColor) {
    var elem = document.getElementById('p1');
    elem.style.color = newColor;
  }
  //function that changes the color of the p1 text everytime you click the button

  function myFunction() {
      var sentence = "I am learning"; 
      sentence += " JavaScript as we speak!"; 
      document.getElementById("Concatenate").innerHTML = sentence;
  }
  //function that displays a different sentence when you "Click Here!"