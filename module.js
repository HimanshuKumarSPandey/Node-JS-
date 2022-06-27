console.log(module); //this module seems to be public/global but it's private. 


//Ouput: 
Module { //Here we've Object i.e Module, it's a Json Object with key value pairs. 
    id: '.', //So, we've id (Unique Identifier)
    path: '/home/himanshu/Documents/node', //paths
    exports: {…}, //exports
    parent: null, //parents
    filename: '/home/himanshu/Documents/node/module.js', …} //filename (compelte path to that file)

    //in other terminals we also have loaded i.e Boolean that determines if this modules is loaded or not,
    //childrens. 