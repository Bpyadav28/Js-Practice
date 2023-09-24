let score = "33"
console.log(typeof(score))  //=> typeof can be used as a method or normal  
console.log(typeof score)

let value = Number(score)
console.log(typeof value)

/*
CONVERTED TO NUMBER

33abc => NaN  me convert hota hai
null => 0 me 
undefined => NaN
true => 1
*/

let isValid ="bhanu"
let convertedIsValid = Boolean(isValid)
console.log(convertedIsValid)
/*
CONVERTED TO BOOLEAN

1 => true
0 => false
"" => false
"bhanu" => true
*/

