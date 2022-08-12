function checkSpam(){
    let str = prompt("type anything: ");
    let string = str.toLowerCase();
    
   alert( string.includes("viagra") || string.includes("xxx"));

}
checkSpam();