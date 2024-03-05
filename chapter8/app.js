// q1

var questionOne = prompt("Enter number to check the number (even or odd)");

if (questionOne % 2 === 0){
   alert(`The number ${questionOne} is even `);
} else {
    alert(`The number ${questionOne} is odd `);
}

// --------------------------------------------------------------------------------------------//

// q2

var questionTwo = prompt("Enter number to check the number (negative or positive)");

if (questionTwo > 0) {
   alert(`The number ${questionTwo} is positive `);
}

else if (questionTwo < 0){
    alert(`The number ${questionTwo} is negative`);
}

else if (questionTwo == 0) {
    alert(`The number ${questionTwo} is zero `);
} else {
    alert(` ${questionTwo}  is not a number`);
};

// ---------------------------------------------------------------------------------------------//

// q3

var questionThree_i = prompt("Enter first number to check which number is large");
var questionThree_ii = prompt("Enter second number to check which number is large");

if (questionThree_i > questionThree_ii) {
    alert(`The number ${questionThree_i} is large `);
} else if (questionThree_ii > questionThree_i) {
    alert(`The number ${questionThree_ii} is large `);
} 

// -----------------------------------------------------------------------------------------------//

// q4

var questionFour_i = prompt("Enter 1st number to check which number is small");
var questionFour_ii = prompt("Enter 2nd number to check which number is small");
var questionFour_iii = prompt("Enter 3rd number to check which number is small");

if (questionFour_i < questionFour_ii < questionFour_iii) {
    alert(`The number ${questionFour_i} is small `);
} else if (questionFour_ii < questionFour_i < questionFour_iii) {
    alert(`The number ${questionFour_ii} is small `);
} else if (questionFour_iii < questionFour_i < questionFour_ii) {
    alert(`The number ${questionFour_ii} is small `);
} 

// --------------------------------------------------------------------------------------------------//

// q5

// var questionFive = prompt("enter number to calculate its factorial");

// if (questionFive) {} 



// q6

var questionSix = +prompt("enter marks of English");
var questionSix_i = +prompt("enter marks of Urdu");
var questionSix_ii = +prompt("enter marks of Maths");
var questionSix_iii = questionSix + questionSix_i + questionSix_ii;
var total_marks = 300;
var percentage = (questionSix_iii / total_marks) * 100;

if (percentage <= 100 && percentage >= 80 ) {
    alert(`Your percentage is ${percentage} % and grade is A+`);
}
else if (percentage < 80 && percentage >= 70 ) {
    alert(`Your percentage is ${percentage} % and grade is A`);
}
else if (percentage < 70 && percentage >= 60 ) {
    alert(`Your percentage is ${percentage} % and grade is B`);
} else {
    alert("not ww");
}
  
// ---------------------------------------------------------------------------------//

// q7
 
var temperature = +prompt("Enter temperature in celcius");

var temp = ((9 / 5) * temperature) + 32;
alert ("the temp is " + temp + " F°")

// ------------------------------------------------------------------------------------//

// q8

var length1 = +prompt("Enter length 1 to determine what type is it");
var length2 = +prompt("Enter length 2 to determine what type is it");
var length3 = +prompt("Enter length 3 to determine what type is it");
var equilateral = "equilateral triamgle";
var isoseles = " isosceles triangle";
var  scalene = " scalene triangle";
if (length1 === length2 && length2 === length3) {
    alert (equilateral);
} else if  (length1 === length2 || length1 === length3 || length2 === length3) {
    alert (isoseles);
} else if (length1 != length2 || length1 != length3 || length2 != length3){
    alert (scalene);
} else {
    alert("Enter correct sides")
}




// q10 

var base= +prompt("Enter base");
var exponent = +prompt("Enter power");
 var result = Math.pow(base, exponent);
 alert(result);

