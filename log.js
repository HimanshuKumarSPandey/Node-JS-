console.log(__filename); //finding name of the file 
console.log(__dirname); //finding path of the file 

var url = 'http://mylog/';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports = log;