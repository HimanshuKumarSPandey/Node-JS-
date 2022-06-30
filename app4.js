const fs = require('fs');

//Synchronous Method
//We'll get array of strings and the output will be the files in the current folder on the machine. 

//const files = fs.readdirSync('./'); //It'll return all the files and folders in the current folder. 
//console.log(files);

//Asynchronous Method 
//all these asynchronous methods take a function as their last argument, node will call this function when that asych. oper. completes
//we call this function a callback. 
//callback funtion with two parameters i.e. an error and result. 
//we pass a callback function with two parameter here. 
fs.readdir('$', function(err, files) { //in our case the second parameter is a string array. 
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
//for result we pass './' and for error '$'