function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var mobile = document.forms["myForm"]["mobile"].value;
  var email = document.forms["myForm"]["email"].value;
  var address = document.forms["myForm"]["address"].value;
  var male = document.forms["myForm"]["male"].value;
  var female = document.forms["myForm"]["female"].value;
  var age = document.forms["myForm"]["age"].value;

  console.log("name:", name);
  console.log("mobile:", mobile);
  console.log("email:", email);
  console.log("address:", address);
  console.log("male:", male);
  console.log("female:", female);
  console.log("age:", age);
  //   if (
  //     name.length == 0 ||
  //     mobile.length == 0 ||
  //     email.length == 0 ||
  //     address == ""
  //   ) {
  //     alert("Error");
  //     return false;
  //   }
  alert("Successfully Submitted!");
}
