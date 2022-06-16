const express=require("express");
const mongoose=require("mongoose");
const fetch =require("node-fetch");
const axios=require("axios")
//const routes=require("./routes/stories.route")

const controller= require('./controllers/stories.controller');
const app=express();


//require(dotenv.configs())
const port=8000||process.env.PORT;
//mongoose.connect("")
app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})
app.use(express.json());

//app.use("/",routes)
app.get('/top', controller.MyTopStories);

app.get('/bestStories', controller.MyBestStories);
app.get('/newStories', controller.MyNewStories);
