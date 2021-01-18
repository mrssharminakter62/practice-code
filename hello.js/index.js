var number = 8;
console.log(number);

var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);

 //condition if -----------else

var cokePrice =14;
if(cokePrice<15){
    console.log("pani");
}
else{
    console.log("ruti");
}

   //Multiple condition if--------&&------else

var studyKorso = true;
var likso = 5000;
 
if(studyKorso==true && likso>50000){
    console.log("khelte parva");
}
else{
    console.log("khelte parbana");
}
 //Multiple condition or (||) if ---------else
var studyKorso = true;
var likso = 500;
 
if(studyKorso==true || likso>5000){
    console.log("khelte parva");
}
else{
    console.log("khelte parbana");
}

//Condition if--------else if --------else

var studyKorso = true;
var likso = 500;
if(studyKorso == false && likso > 5000){
    console.log("khelte parva");
}

else if(studyKorso == true){
    console.log("mardebo");
}

else{
    console.log("khelte parbana");
}

 //Absolute Number

var number = 5.4526;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);


var number = 5.4526;
var result = Math.round(number);
console.log(result);


var number = 15.4526;
var result = Math.floor(number);
console.log(result);

var number = 9.4526;
var result = Math.ceil(number);
console.log(result);


var number = 9.4526;
var result = Math.random(number);
console.log(result);

var number = 19.2343;
var result = Math.ceil(number);
console.log(result);

// print fullName

var firstName = 'Mrs';
var lastName = ' Sharmmin';
var fullName = firstName +lastName;
console.log(fullName);
console.log('My name is '+fullName);
console.log('My name is '+ fullName + ' Akter Mim');

// totall length of fullName

var text ='Bangladesh';
console.log('Number of character ' + text.length);
console.log(text.length);

// print the 2nd position from fullname

var text = text.charAt(2);
console.log(text);



// convert toUpperCase


var text = 'sharmin';
var text = text.toUpperCase();
console.log(text);

// convert toLowerCase

var text1 = 'BANGLADESH';
var text1 = text1.toLowerCase();
console.log(text1);

//  slice word\

var text1 = 'Bangladesh';
var text = text1.slice(2,5);
console.log(text);

// two word concat 

var text1 = 'Bangladesh';
var text2 = 'is a beautiful country';
var text = text1.concat(text2);
console.log(text);

 // slice

var friendsAges = [15,14,37,18,19];
console.log(friendsAges.length);
var salam =friendsAges.slice(2,5);
console.log(salam);
console.log(typeof friendsAges);


        //while loop
  
    var num = 0;
    while(num<=5){
        console.log(num);
        num++;
    }
      //for loop
    var friends = [23, 33, 44, 55, 65,56];
    for(var i = 0; i<friends.length; i++){
        var element =friends[i];
        console.log(element);
    }


    var friends = ["Mariam", "sonia", "Rotna","tania", "Romana"];
    for(var i = 0; i<friends.length; i++ ){
        var element =friends[i];
        console.log(element);
    }


       //switch---------------
       
       num =200;
       switch(num){
           case 1000:
               console.log('I an 1000');
               break;
          case 500:
              console.log('I am 500');
             break;
         case 200:
             console.log('I am 200');
           break;
         default:
             console.log('Who are you')
       }
        
  fruit = "orange";
   switch(fruit){
       case "Banana":
           console.log('Hello');
        break;
        case "Apple":
            console.log('Welcome');
            break;
        default:
            console.log('Assalamualikum');
   }

              //try Function

        function  myFunction(){
            console.log('I love Allah');
            console.log('I love Mohammad (SM)');
        }
        myFunction();
var num = 100;
var myName = 'Sharmin';
var result = num + myName;
console.log(result);
 myFunction();

                    //Function call parameter

     function doubleIt(num){
         var result = num * 2;
         console.log(result);
     }   
     
     doubleIt(20);
     doubleIt(500);

  //Function return  / function parameter return...........
      
  function doubleIt(num) {
      var result = num * 2 ;
      return result;
  }
 
  var first = doubleIt(5);
  var second = doubleIt(200);
  var total = first + second;

  console.log(total);
   
       // Multiple parameter  function return........

function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var first = add(10, 40);
console.log(first);
  //or............
var sum1 =add(5, 50);
var sum2 =add(20, 50);
var sum = sum1 + sum2 ;
console.log(sum);
        //End..........................................






        
        