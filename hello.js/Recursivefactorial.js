//10! = 1*2*3*4*5*6*7*8*9*10
//0! = 1
//7! = (7-1)!*7

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);