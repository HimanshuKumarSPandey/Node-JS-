//we call the require function we get the event emitter class
const EventEmitter = require('events'); //this is class, it's a blueprint it defines wht an EventEmitter can do

//in order to use this EventEmitter, first we need to create an instance of this class. 
const emitter = new EventEmitter(); //so here this emitter is an object. This 2nd Emitter is an actual object of that class.
// this obj. we're going to use in the application. 

//we use 'on' method it took 2 arguments, 1st name of the event & 2nd is the callback function. 
//Register a listener
emitter.on('messageLogged', function(){ //messageLogged is the name of the event, while the function will be called when that event is raised. 
    console.log('Listener called');
});

//in future we're going to extend our loggermodule nd everytime we log a message we're going to raise an event called 'messageLogged'. 
//Raise an Event
emitter.emit('messageLogged'); //we pass an argument i.e the name of the event.


// this indicated that when we raise the event (emitter.emit('messageLogged')), the event function or listener was called. 
//The order is important,if we register this listener after calling the emit method , nothing would happen. 
