function sumInput(){
    let Numbers = [];
    while(true){
        let value = prompt("Enter Number");
        if(value =='' || value == null || !isFinite(value))break;
        Numbers.push(value);

    }
    let sum = 0;
    for(let i =0;i<Numbers.length;i++){
        sum += +Numbers[i] ;
    }
    alert(sum);
};
sumInput();