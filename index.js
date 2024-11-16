


const express = require("express");
const app = express();

const mongoose=require("mongoose");
const StuRoute =require("./routes/studentRoutes");
const bodyParser = require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017/yash").then(()=>{
   console.log("DB save Successfuly connected");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.use("/students",StuRoute);


app.listen(8002,()=>{
   console.log("server is running")
})