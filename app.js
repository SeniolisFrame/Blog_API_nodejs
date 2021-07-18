const express = require('express');
const usersRouter = require('./Routes/user.routes');
const blogRouter = require('./Routes/blog.routes');
process.setMaxListeners(0);
require('./db');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.get('/',(req,res)=>{
  return res.json({ message : 'Hello Server'});
})

app.use('/user',usersRouter);
app.use('/blog',blogRouter);

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

const port = process.env.port || 443;

app.listen(port,() => {
    console.log("server start")
})