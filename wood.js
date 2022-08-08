function woodcound(chare,table,bad){
    var charenumber=chare*3;
    var tablenumber=table*5;
    var badnumber=bad*10;
    return charenumber+tablenumber+badnumber;
}
var totalnumber=woodcound(1,1,2);
console.log(totalnumber);