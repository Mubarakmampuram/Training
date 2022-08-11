function value(){
    let a = prompt("Enter Your Value");
    readNumber(a);
}
function readNumber(x){
    if(isFinite(x)){
        if(x===NaN || x===''){
            value();
        }else{alert(x);

        }
    }else{
        value();
    }
}