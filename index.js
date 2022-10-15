function add(a,b){
    return a+b;
}
const result = add(2,3);
console.log(result);

function subtract(a,b){
    return a-b;
}
const result1 = subtract(5,3);
console.log(result1);

function multiply(a,b){
    return a*b;
}
const result2 = multiply(5,3);
console.log(result2);

function divide(a,b){
    return a/b;
}
const result3 = divide(15,3);
console.log(result3);

function increment(n){
    return ++n;
}
const result4 = increment(152);
console.log(result4);

function decrement(n){
    return --n;
}
const result5 = decrement(4);
console.log (result5);

function makeInt(x,y){
    return x,y;
}
const result6= makeInt("n",10);
console.log (result6);

function makeInt(n){
    return n;
}
const result7= makeInt("10");
console.log(result7);

function preserveDecimal(x){
    return x;
}
const result8= preserveDecimal("n");
console.log (result8);

function preserveDecimal(n){
    return parseFloat(n);
}
const result9= preserveDecimal('2.222');
console.log (result9);

function makeInt(n){
    return parseInt(n,10);
}