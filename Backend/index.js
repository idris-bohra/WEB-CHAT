const http = require("http")
const express =  require('express')
const app = express();
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const cors = require('cors')
require('dotenv').config()


async function fun()
{
    try
    {
        mongoose.connect(process.env.MONGO_DATABASE_URL).then(() => console.log("Database connected!")).catch(err => console.log(err));
            
    }
    catch(err)
    {
        console.log(err)
    }
}

fun();

app.use(cors())
const server = http.createServer(app);
const io = socketIO(server)

const users = {};

io.on("connection",(socket)=>{

    console.log(`new connection ${socket.id}`)

    socket.on('joined', ({user})=>{
        console.log(`${user} has joined`)
        users[socket.id] = user;
        console.log(users)
        socket.broadcast.emit('userjoined', { messege : `${users[socket.id]} has joined the chat`})
        socket.emit('messege', {user:'admin', messege : `welcome to the chat ${users[socket.id]}` })
    })

    socket.on('dissconnect', ()=>{
        console.log('user left')
    })



})

app.get('/', (req,res)=>{
    res.send('hello boy');
})


server.listen(process.env.PORT , ()=>{
    console.log(`Running at ${process.env.PORT }`);
})