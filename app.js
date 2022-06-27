//works with logger

//declare a variable, call it a logger name of the module and set it to the return value of the require function 
var logger = require ('./logger');

//let's log this logger
console.log(logger);

//calling the function (url: 'http://mylogger.org/log') or this method in app.js Output: message 
logger.log('message');


//OutPut
//{log: ƒ, url: 'http://mylogger.org/log'}
//Whole thing is an object, this object has a single method called log and has a function. 