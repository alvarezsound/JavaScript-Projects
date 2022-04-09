function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Last name must be filled out");
      return false;
    }
    let z = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }