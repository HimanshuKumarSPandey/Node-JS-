//Creating Module.
//this module is going to use one of those remote logging services for login our messages so there are websites out there provide logging as a service they give us a
//URL and we can send an HTTP request to that URL to log messages in the cloud. 

var url = 'http://mylogger.org/log'; //declaring variable like URL. Let's imagine that we're going to sent an HTTP request to this endpoint to this URL.
//Function called log that takes a message, and in this funcation we're going to send an HTTP request. 

function log(message) {
    //send an HTTP request. 
    console.log(message); //log this message on console. (prints the string u pass to it to the console)

}

module.exports.log = log; //the object's that we're exporting here has a single method called log. 
//adding method called log to this exports object and setting it to this log function we've defined here. 

module.exports.url = url; //similarly if we want to export this url then we'll do in this same way. 

//we we can change the name that is exported to the outside. 



//var and log both are scoped to this module(logger.js) nd they're private nd not visible from the outside.
//but in our main module we want to use this logger module, so we should be able to access this log function(logger.js function), we should be able to call it from the app
//module.

//so we'll make this public 