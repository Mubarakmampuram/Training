function readNumber(){
    let num;

    do{
         num = prompt("Enter A Valid Number");
    }while(!isFinite(num));
    if(num===null || num==='')return null;
    alert(num);

}