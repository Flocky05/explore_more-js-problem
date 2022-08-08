const country='Bangladesh';
const age=50;
const isIndependent= true;
const student={id:121,class:12,name:'Batash'};
const friends=[12,23,45,46,67,5,4,34,32,22];
function add(num1,num2){
    return num1+num2;
}
console.log(typeof country);
console.log(typeof isIndependent);
 console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);
// console.log(friends.includes(1));
if(friends.indexOf(34)==-1){
    console.log(false);
}else{
    console.log(true);
}
const number=[11,12,123,1223];
const result=number.concat(friends);
console.log(result);
