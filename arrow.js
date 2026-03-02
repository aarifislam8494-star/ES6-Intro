// console.log(add(10,20));
//function declaration
function add (num1, num2){
 return num1+num2;
}
// console.log(add(10,20));


// console.log(add2(30, 40));
//function expression
const add2 = function(num1, num2){
 return num1 + num2;
}

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50,60));

//ex-
const multiple = (a, b) => a * b;
console.log(multiple(10,10));

//ex-
const tenTimes = x => x * 10;
console.log(tenTimes(20));

//ex-
const tenTimes2 = (x) => x * 30;
console.log(tenTimes2(20));

//ex-
const getPi = () => 3.1416;
console.log(getPi());

 
