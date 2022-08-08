let login = prompt("Enter Your Designation : ");
let message = (login==Employee)? "Hello":
(login==Director)? "Greetings":
(login=="")? "NoLogin":"" ;
alert(message);
