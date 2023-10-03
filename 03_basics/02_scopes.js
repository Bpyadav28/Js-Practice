// 3 types of variable declaration 
// 1) let => mostly used
// 2) var  => global scope not used 
// 3)const => mostly used

let a = 10;
const b = 20;
var c = 30;

if(true){
    let a=100;
    const b=200;
    var c=300;
}
console.log(a);
console.log(b);
console.log(c);