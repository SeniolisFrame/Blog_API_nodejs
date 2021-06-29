const express = require('express');
const usersRouter = require('./Routes/user.routes');
const EventEmitter = require('events');
process.setMaxListeners(0);
require('./db');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/',(req,res)=>{
    res.json(req.body)
})

app.use('/user',usersRouter);

app.use((req, res, next) => {
    res.status(err.status || 404).json({
      message: "No such route exists"
    })
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: "Error Message"
    })
});

app.listen(3000,() => {
    console.log("server start")
})