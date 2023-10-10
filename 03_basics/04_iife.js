// Immediately Invoked Function Expression (IIFE)


// named iife
(function chai(){
    console.log("hello chai peelo");
})();  
// ; lagana jaroori hota varna next function run ni hota

// chai()

// simple iife
( (name) => {
    console.log(`${name} aajao peelo varna thandi hojayegi`);
})("bhanu");
