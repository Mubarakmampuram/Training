function truncate(){
    let str = prompt("Enter Your Note Here");
    let maxlength = +prompt("what should be the length of your note?");
    if(str.length > maxlength){
    let newstr = str.slice(0,maxlength) + "..." ;
    alert(newstr);}else{
        alert(str);
    }
}
truncate();
