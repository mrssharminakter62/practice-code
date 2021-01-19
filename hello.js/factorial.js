// 7! = 1*2*3*4*5*6*7
// 10! = 11x2x3x4xx5x6x7x8x9x10
// for(var i = 1; i<=10; i++){
//     console.log(i)
// }
//  I use factorial with for loop-------------
var factorial = 1;
for(var i = 1; i<= 12; i++) {
    var factorial = factorial * i
    console.log( i, factorial);
}
var factorial = 1;
for(var i = 1; i<= 15; i++) {
    var factorial = factorial * i
    console.log( i, factorial);
}

// Now I use factorial with function  for loop---------
function isFactorial(num) {
    var factorial = 1 ;
    for(var i = 1; i<= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = isFactorial(10);
console.log(result);

// use factorial with while loop---------------------
var i = 1;
var factorial = 1;
while(i<=8){
    factorial = factorial * i;
   // console.log(i, factorial);
    i++;
}
console.log(factorial);
// Use factorial while loop with function
function isFactorial(n){
    var i = 1;
    var fact = 1;
while(i<=n){
    fact = fact * i;
    i++;
}
return fact;
}
var result = isFactorial(6);
console.log(result);