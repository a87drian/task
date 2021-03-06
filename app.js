require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found')

//midleware

app.use(express.json())
//routes 

app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)

const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server on ${port}` ))
    }catch(error){
        console.log(error)
    }
}
start()