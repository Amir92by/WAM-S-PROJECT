//require 
const express= require('express')
const cors = require('cors');
require("dotenv").config()
const connectDB= require('./config/connectDB');
const path = require("path");

const adminAuth = require('./Middleware/adminAuth');

//instance express
const app= express()


const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));

// connection DB
connectDB()

//Midelleware global
app.use(express.json())

// routes : Users & Post
app.use('/api/users',require('./routes/user.routes'))
app.use('/api/post' , require('./routes/post.routes'));
app.use('/api/admin' ,adminAuth , require('./routes/admin.routes'));

//server static assets ifin production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  //set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}





//Port
const PORT=process.env.PORT
//create server
app.listen(PORT,(err)=>{
    err? console.log('server is not running')
    :
    console.log(`Server is runnig in PORT ${PORT}` )
})
