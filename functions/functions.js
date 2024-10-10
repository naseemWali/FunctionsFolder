// // function table(userinpiut) {
  
// for (let index = 1; index <= 10; index++) {
//     console.log(`${userinpiut} x ${index} = ${userinpiut * index}`);
     
// }
// }


// table(+prompt("Enter any number that yioou want"));



// function hello(num1,num2) {
//   document.write(num1+num2+num3)
// }
// hello(1,4,0)
// // this will say num3 is not defined.



// doing work of palindrome by functions using return keyword



// var input =+prompt('enter a password range');
// var randomvalues='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&';
// var password="";


// for (let index = 0; index < input; index++) {
//      var randomnumber=Math.floor(Math.round()*randomvalues.length);
//      password=password + randomvalues[randomnumber];
    
// }


// var user=+prompt('enter a word to check');
// var word="";

// for (let index = user.length-1; index > user.length; index--) {
     
    
// }


// making a calculator


// var userinput=+prompt('Enter a first number');
// var userinput2=+prompt('Enter second number');
// var userinput3=+prompt('Enter operator');




// function Calculator (num1,num2,operator) {
//   if (operator==='+') {
//     return num1+num2;
//   }
//   else if (operator==='-'){
//    return num1 - num2;
//   }

//   else if (operator==='*'){
//     return num1 * num2;
//    }

//    else if (operator==='/'){
//     return num1  / num2;
//    }
  
//    else{
//     return 'invalid operator';
//    }

// }
// let result=Calculator(+prompt('Enter a first number'),+prompt('Enter a second number'),prompt('Enter an  operator that you want to'));
// document.write(result);


// local v/s global variables
// when we declare a variable by using var , let , const, outside a block of code that is called global variable.

// for example  var a=20;
//     console.log(a); we will excess this.


// {
//     var e=12;
// }
// console.log(e);  we cant access this because it is a  local varable and it will be  execute only inside block of code.


// another example here t is global variable so whether it is function or simple block of code it will update as well as execute.
// var t=12;
// function tea() 
    
// {
//     t=15;
//     console.log(t+1);   
// }
// tea();

// updating global variable inside if ConditionRule.


// var s=12;
// if (s===12) {
//     var d=s+2;
//     console.log(d);
    
// }

// {
//     let  g=1;
// }
// console.log(g+2); // here if we use var then we can access or execute value outside code but if we use let or const then it will be not execute .



// var num =20;

// if (true) {
//  num=50;   
// }
// console.log(num);


// var c=12;
// function abc() {
//     c=15;
//     console.log(c);
    
// }
// abc();


// switch statement

// let input=+prompt('enter your favourite pet')
// switch (input) {
//     case value:
        
//         break;

//     default:
//         break;
// }





// 10th october 2024
// doing a palindrome word by while loop

// making a multiplication by do while loop

/* => this comment is used for multi comment of things while (//) this is for single comment
let user=+prompt('enter a number')
let range=+prompt('enter range')
let i=1;
do {
   // console.log(i); 
     document.write(`${user} x ${i} = ${user * i} <br>`);
    i++;
    
  
} while (i<=range); // if we want to also mention the range then it will be 
*/




// Events  
// sweet alert is a library made on javascript that has different alerts

// function clickMe(message) {
//     document.write(message)
// }

// function sum() {
//     alert('hello every body')
// }

// function add() {
//     console.log('mouse over');
    
// }

// function subtract(){
// console.log('mouse out');

// }

// function changestate(arr){
//   arr.style.color='red';
//   arr.style.backgroundColor='black';
//   arr.fontSize='poppins'
// }

// function returnstate(barr) {
//     barr.style.color='black';
//     barr.style.backgroundColor='white';
//     barr.fontSize='Times New Roman'
// }


// Quiz Questions