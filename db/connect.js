const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://admin:4dm1n@cluster0.vlpmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const connectionString = 

const connectDB = (url) => {
    return mongoose.connect(url)
.then(() => console.log('conected '))
.catch((err)=> console.log(err))
}

module.exports = connectDB;
