const names=['abul','babul','calbul','babul','madul','sabul','babul','abul','ulab'];
function noDuplicate(array){
    unique=[];
    for(var i=0;i<array.length;i++){
       const name=names[i];
    //    if(unique.includes(name)===false){
    //     unique.push(name);
    //    }
    if(unique.indexOf(name)===-1){
        unique.push(name);
    }

    }
    return unique;
}
const uniquename=noDuplicate(names);
console.log(uniquename);