function multiplyNumeric(obj){
    for( let key in obj){
        if(typeof obj[key]=="number"){
            obj[key] *=2;
        }
    }
    
};
let menu = {
    width: 200,
    Height:300,
    tittle:"My Menu",
};
multiplyNumeric(menu);

alert(menu.width); //400
