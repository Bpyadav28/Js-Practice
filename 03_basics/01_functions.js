function user(){
console.log("b");
console.log("h");
console.log("a");
console.log("n");
console.log("u");
}
// console.log(user()); 

function userLoggedIn(username = "user"){
    return `${username} just logged in`

}
// console.log(userLoggedIn());

// console.log(userLoggedIn()) => if we do not pass any argument then it will show "undefined"

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);

// }

// console.log(addTwoNumbers(3,4)); => it will print 7 and undefined because function is not returning anything

// addTwoNumbers(3,5)  => value 8
//  addTwoNumbers(3,"5") => concat because it will automatically consider it string
//  addTwoNumbers(3,null) => same as above

function addTwoNumbers(number1 , number2){
    return (number1+number2);

}

// console.log(addTwoNumbers(2,3));

//  SPREAD / REST OPERATOR  ...

function cartValue(...num1){
    return num1;
}
// console.log(cartValue(100,200));
// spread operator will used in above senerio where single parameter is there and multiple arguments are added 

const obj = {
    name: "bhanu",
    age: 21
}

function myObj(user){
    return `hello ${user.name} you are ${user.age} years old`
}

console.log(myObj(obj));
