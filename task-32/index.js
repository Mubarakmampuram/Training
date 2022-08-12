function truncate(){
    let str = prompt("Enter Your Note Here");
    let maxlength = +prompt("what should be the length of your note?");
    let newstr = str.slice(0,maxlength) + "..." ;
    alert(newstr);
}
truncate();
