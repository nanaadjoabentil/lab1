alert("JavaScript in Session");

var store= document.getElementById("welcome");
store.innerHTML = "Hello";
var username = document.getElementById("myname");
var useremail = document.getElementById("myemail");
var number = document.getElementById("phone_number");
var web = document.getElementById("website");
var text = document.getElementById("message");
var count = 0;
var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//var checkwebsite = /^[http://]/


function validateForm(){
  if (username.value= " "){
    alert("Please enter your username");
  }
else if (useremail.value.match(checkemail))
{
  alert("E-mail not valid");
}
else if (phone_number.value = " ")
{
  alert("Enter your phone number");
}
else if (website.value = " ")
{
  alert("Please check your website address");
}
else if (message.value = " ")
{
  alert("Please enter a message");
}
else{
  alert("Good job filling out all the fields :-)");
}
}
