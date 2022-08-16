function filterRangeInPlace(array,h,l){
    for(let i = 0;i<array.length;i++){
        let value = array[i];
        if(value < l || value >h){
            array.splice(i,1);
            i--;
        }
    }
};
let array = [12,23,56,87,34,98,32,21];
filterRangeInPlace(array,50,20);
alert(array);