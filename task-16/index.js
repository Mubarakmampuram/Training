
function pow(x,n){
    let result = 1;
    for(let i =1;i<=n;i++){
        result *= x;
        
    }
    return result;
}
let a = +prompt("Which Number`s Power Doyou need?");
let b = +prompt("to what power you want to rise the number?");
pow(a,b);