const year = 2281;
let remainder = year % 4;
if(remainder==0){
    console.log('Your year is a leap year');
}
else{
   console.log('Your year is not a leap year') 
}
//  I use it with function--------------

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    } 
  else{
      return false;
  }
}
const check2000 = isLeapYear(2000);
console.log(check2000);
 
// w3 school--------------
// function leapYear(year){
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapYear(2014));
// console.log(leapYear(2033));
// console.log(leapYear(2044));
// console.log(leapYear(2024));
//console.log(leapYear(2044));


