const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inote?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo sucessfully");
    })
}

module.exports = connectToMongo;



// to install nodemon used this 
    // npm i -D nodemon

// to connect to mongo
    // nodemon index.js 
// instead of above line 
// this has worked 
    // npx nodemon  index.js
