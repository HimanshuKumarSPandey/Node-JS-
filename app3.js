const os = require('os');

//declaring variable and storing the result.
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//log these values on the console. If we are using Template String we don't need this. 
//console.log('Total Memory: ' + totalMemory);  //we can simplify this expression by using a template string.

//Template String is found in more recent versions of Js that refer to as ES6 or ES2015 (which is shortform of ECMAScript 6/2015)
//every year ECMA defines new features that should be added to Js, while different browsers implement different sets of features. 

console.log(`Total Memory: ${totalMemory}`); //Template String
console.log(`Free Memory: ${freeMemory}`); //So, we don't need Concatenation (+) i.e. used in above line for Template String. 
