function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let schedule = {};
isEmpty(schedule);

schedule["8:30"] = "getUp" ;

isEmpty(schedule);
