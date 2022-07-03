const {MongoClient} = require('mongodb') //MongoClient module will help us to connect node with mongodb
const url = 'mongodb://localhost:27017'; //url on which our db will run
const dbName = 'NodeNew' //name of the database we want to connect with. here it's NodeNew. 

//Node is client and MongoDB is a server, i.e. why we're naming it as client we can change the name of it like Hks, school or anything
const client = new MongoClient(url) //Mongo will dedect the url and will connect the system, otherwise it'll throw an err

//if we're using await then we must use async i.e. asynchronous method
async function getData()
{
    let result = await client.connect(); //while using clinet.connect(); it'll show a promise, so to handle that we use await. 
    db = result.db(dbName); //db name
    collection = db.collection('users'); //collection name it's a variable (collection). 
    let data = await collection.find({}).toArray(); // data is another variable, without this it'll return promise. inside find we'll push {}(blank object), it'll just return an old
    //result from our collection. toArray will make format of our array. await is used, cuz it's returning a promise. 
    //A Promise in Node means an action which will either be completed or rejected. 
    console.log(data)
}

getData(); 