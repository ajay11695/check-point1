// // What is the difference between null and undefined
// // typeof null is odject which assign the value but it is nothing and tyoeof undefined is undefined which not assign

// // You have a variable named userAge with a value of NaN. Write an if condition to check if the value of userAge is NaN or not. If the value is NaN alert message The value is NaN otherwise alert Sorry the value if not NaN.
// let userAge=NaN
// // isNaN(userAge===NaN)?alert("the value is NaN"):alert('the value is not NaN')
// // We have two variables user1 and user2. Write an if condition to check if they are equal or not. If they are alert Both values are equal or else alert Both value are not equal. Explain why they are equal or not equal.

// let user1 = 'Sameer';
// let user2 = 'sameer';
// // user1==user2?alert("both are equal"):alert('both are not equal');  //because java is case senstive language it is s and S

// // What will be the output of the code below?
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, '2')); // Output//"12"
// // What will be the output of the code below?
// let number = 0;
// console.log(number++); // Output 1//0
// console.log(++number); // Output 2//2
// console.log(number); // Output 3//2
// // What will be the output/issue in the given code below?
// function getAge() {
//   age = 21;
//   console.log(age);
// }

//  getAge(); // output or issue if any  //21
// // What will be the output of the code below?
// function sayHi() {
//   function add() {
//     return 21;
//   }
//   return add();
// }

// console.log(typeof sayHi()); //   number
// // Next to each line given below write condition or loop based on what will be used in solving.
// // List numbers from 1 to 100
// // for(let i=1;i<=100;i++){console.log(i)}  //loop

// // Check if the number id odd or eve
// // number%2==0?alert("even"):alert("odd")

// // Keep buying phone if the total amount is less than 20000

// // Only buy accessories if the total amount id less than 10000

// // List all the even values from 0 to 100

// // List all the odd values from 0 to 100

// // Drink a glass of water when you are thirsty

// // Write a function that accepts the name of a product like phone, laptop, watch, tv or tablet. Based on the input return the price of the product. (You can choose any price you want). What will you use to solve this switch or if..else Explain your reason of why to use user one over another.
// function product(name){
//   switch(true){
//     case name=="phone":
//       return  "1500"
//     case name=="laptop":
//       return  "150000"
//     case name=="watch":
//       return  "1000"
//     case name=="tv":
//       return  "15000"
//     case name=="tablet":
//       return  "5000"
//   }
// }
// // What will be the output of the following lines of code given below?

// function add(a, b) {
//   return a + b;
// }
// typeof typeof add(21, 22); // Output//string
// typeof typeof add(21, '22'); // Output//string

// typeof typeof typeof add(100, true); // string
// typeof add(100 || true, 12 && 21); // number
// typeof add(100 || true, 12 && 21 && 0); // number
// typeof add; // Output//function
// typeof typeof add; // string


// Using loops take 10 inputs from user and find the average of all the numbers.
//  let sum=0
// for(let i=1;i<=10;i++){

// // sum+=i
// }
// // console.log(sum)
// let average=sum/10
// console.log(average)


// What will be the output of the code below
let i = 0;
while (i < 3) {
  
 console.log("hi")
  i++;
}
//  (3)hi

// Write a function named getEvenSum that accepts a parameter max. Return the sum of all even numbers. The value of max should default to 10.

function getEvenSum(max){
  let sum=0
  for(let i=0;i<=max;i++){
    if(i%2==0){
      sum+=i
    }
  }
  return sum
}
console.log(getEvenSum(10))

// Write a function named getOddSum that accepts a parameter max. Return the sum of all odd numbers. The value of max should default to 10.
function getoddSum(max){
  let sum=0
  for(let i=0;i<=max;i++){
    if(i%2!==0){
      sum+=i
    }
  }
  return sum
}
console.log(getoddSum(10))

// Write a function named getProductOfDigits that accepts a parameter num. It returns the product of all the digits in the number.
// function getProductOfDigits(max){
//   let sum=1
//   for(let i=1;i<=max;i++){
    
//       sum*=i
    
//   }
//   return sum
// }
// console.log(getProductOfDigits(5))

// If the input value is less than 0 return not a valid input
// For example if the input is 123 output should be 6.
// What will be the output of the following code below in multiple conditions? Explain with reason?
function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }
// 
  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // bigger than 5
check(1); // smaller than 5
check(5); // 5

///in each case it is having return keyword which will make our program to terminate and return the value.
// What will be the output of the following code given below? Explain the reason?
function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

console.log(getOutput('Arya')); // 'You are arya'
getOutput('John'); // 'You are john'
getOutput(); // 'Who are you'

//
// ere we are having console.log which will print the message in screen and also having one return so it give output 'who are you'.
// Can a function have multiple return statement? Give one example if possible and explain the reason.
// Yes a function can have multiple return statement.

function findTime(operation){

  if(operation==='wake up'){
    return '5A.M';
  }else if(operation==='dress up'){
    return '8A.M.';
  }else if(operation==='lunch'){
    return '12P.M.';
  }else if(operation==='snacks'){
    return '5P.M.';
  }else if(operation==='dinner'){
    return '9P.M.';
  }else if(operation==='sleep'){
    return '11P.M.';
  }
  else{
    return 'enter a valid operation';
  }
  
}
//here i have used multiple conditions and multiple return statement because user have to enter onw operation 
// so that has to return signle output for a particular input so we need to use multiple return.



// What is the difference between for loop and while loop. What are the different place you can use them? Explain with example. Both are for looping purpose it is used where we want to repeat something there we can use loops main difference between for and while is while has only one input condtion but for 'for' we have three input conditions .both has one breaking condtions. exp:
for(i=0;i<=10;i++)
{
  ///some code
}
// here i=0 is first input conditon which is start of the loop so it is initilization of that,after that we have breaking condtions where we have to stop if this is true then loop will keep executing,third we have increment by this we are incresing the value of i so our loop is looping for next itiration.
while(i<10)
{
  //some code
}
// here we have one input condition by which we will enter inside the loop so untill or unless this is true this loop will keep executing f

// function getProductOfDigits(num){
//   let product=1;
  
//   let temp=num;
//   if(num>0){
//   for(let i=1;i<=100;i++)
//   { 
//     product=product* num%10;
//     num=num/10;
    
//   }
//   return product;
//   }
//   else{
//     return `not a valid input`;
//   }


// }