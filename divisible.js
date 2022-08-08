/*
1.show 1-50
2.if number is divisible by 3 show the output 'foo'
2.if number is divisible by 5 show the output 'bar'
2.if number is divisible by 3 and 5 show the output 'foobar'
*/

for(var i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log('foobar');
    }else if(i%3==0){
        console.log('foo');
    }else if(i%5==0){
        console.log('bar');
    }else{
        console.log(i);
    }
}