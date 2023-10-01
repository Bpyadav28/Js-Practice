const array = [1,2,3,4,5,6]
const myArr2 = new Array(12,13,14,15)

// console.log(myArr2)

// console.log(array)
// console.log(array[2])


// ARRAY METHODS

// myArr2.push(2) => inserted at last
// myArr2.push(3)
// myArr2.pop()  => deleted from last

// myArr2.unshift(10) => inserted at beginning
// myArr2.shift()  => removes first element
// console.log(myArr2)

// !!!!!!  METHODS  !!!!!!!
 
// console.log(myArr2.includes(9)) => gives boolean value
// console.log(myArr2.indexOf(12))

const newArr = myArr2.join()
// console.log(newArr) => typeof string

// console.log(myArr2)

//  slice , splice

//  slice me original array same rehta aur range last wala include ni hota

//  const mna = array.slice(1,3)
//  console.log("a", array)
//  console.log(mna)

// splice me original array change hojata or range me last wala include hota  
 const mna1 = array.splice(1,3)
 console.log("b", array )
 console.log(mna1)