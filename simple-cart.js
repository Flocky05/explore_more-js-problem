const shopping=[
    {name:'shirt',price:1200},
    {name:'shoes',price:2200},
    {name:'pant',price:2500},
    {name:'balt',price:500},
    {name:'watch',price:4500}
];
function shopping_cart(shopping){
    var sum=0;
    for(var i=0;i<shopping.length;i++){
        var product=shopping[i];
        sum=sum+product.price;
    }
    return sum;
}
let total=shopping_cart(shopping);
console.log(total);