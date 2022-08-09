function checkAge(age){
    return (age>18)? true:confirm("Did Parents Allow You??");
}

function checkAge2(age){
    return (age>18 || confirm("Did Parents Allow You?"));
}