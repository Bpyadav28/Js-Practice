const name = "bhanu"
const age = 21

// console.log(name + age +" ka hai")  => old way

// console.log(`my name is ${name} and i am ${age} years old`) => modern way

// @@@@@@@@@@@@@@@@@@  one more way to declare string @@@@@@@@@@@@@@@@@@@@@

const myName = new String("bhanu");

console.log(myName)

// console.log(name.toUpperCase())  => dono me chlte h methods 

// there a more methods in stings

console.log(name.charAt(2))
console.log(name.indexOf('u'))

const newString = myName.substring(0,2)
console.log(newString)

const anotherString = myName.slice(-2,2)
console.log(anotherString)


/*  .trim()
    .replace()
    .includes()
*/
