const path = require('path'); //we gonna load the building path module and store it in a constant called path. 

//method used here is parse method. __filename is the argument of module wrapper function
var pathObj = path.parse(__filename); //parse method with argument is called and stored the result in pathObject. 

console.log(pathObj); //log it on the console. 