// singleton
// Object.create  => constructor se banne wala

// object literal 

const symb = Symbol("key1")
const myobj = {
    name: "bhanu",
    "full name": "bhanu pratap yadav",
    age: 18,
    email: "bhanu@google.com",
    isLoggedIn: false,
    logInDays : ["monday", "saturday"],
    [symb]: "key1" 
}

// console.log(myobj.name); => isse bhi accha ek type or hota hai

// console.log(myobj["name"]); => isse hum isliye prefer karte kyuki ye keys ko string samjhta hai 
// console.log(myobj["full name"]); => isse access khali ye hi kar sakta hai
// console.log(myobj[symb]);
// console.log(myobj);

myobj.email = "bhanu@IPS.com"
// Object.freeze(myobj) => it makes the object freeze ie can't update or add new values to the object

 myobj.email = "bhanu@twitter.com"
// console.log(myobj);

myobj.greeting = function(){
    console.log("hello preety");
}
// console.log(myobj.greeting); => isme function return hora hai par output nahi
console.log(myobj.greeting());

myobj.greeting2 = function(){
    console.log(`hello pretty. myself ${this.name}`)
}
console.log(myobj.greeting2());