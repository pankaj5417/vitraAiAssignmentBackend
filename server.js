const express=require("express");
const mongoose=require("mongoose");
const fetch =require("node-fetch");
const axios=require("axios")
const dotenv = require("dotenv");
var cors = require("cors");
//const routes=require("./routes/stories.route")
dotenv.config();
const controller= require('./controllers/stories.controller');
const app=express();


//require(dotenv.configs())
const port = process.env.PORT || 8000;
//mongoose.connect("")
app.use(cors())

app.use(express.json());

//app.use("/",routes)
app.get('/top', controller.MyTopStories);

app.get('/bestStories', controller.MyBestStories);
app.get('/newStories', controller.MyNewStories);

app.listen(port,()=>{
    console.log("Server is running on port 8000")
})