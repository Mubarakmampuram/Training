let uname = prompt("Enter Your UserName : ");
if (uname ===admin){
    let passwd = prompt("Enter Your Password");
    if(passwd==="themaster"){
        alert("Welcome")
    }else if(passwd==="" || passwd===null){
        alert("Cancelled");
    }
    else{
        alert("Incorrect Password");
    }
}else if(uname===null || uname===""){
    alert("Cancelled");
}
else{
    alert("I Dont Know You");
}