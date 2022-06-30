//we call the require function we get the event emitter class
const EventEmitter = require('events'); //this is class, it's a blueprint it defines wht an EventEmitter can do

//in order to use this EventEmitter, first we need to create an instance of this class. 
const emitter = new EventEmitter(); //so here this emitter is an object. This 2nd Emitter is an actual object of that class.
// this obj. we're going to use in the application. 

//in future we're going to extend our loggermodule nd everytime we log a message we're going to raise an event called 'messageLogged'. 
//Raise an Event
emitter.emit('messageLogged') //we pass an argument i.e the name of the event.
//if we run only this(till upperLine), nothing gonna happen, cuz we've raised an event here but nowhere in our application we've registered a listener,
//that is interested in that event 
