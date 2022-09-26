const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');
const authroute=require('./routes/auth');
const userroute=require('./routes/users');
const postroute=require('./routes/posts');
const categoriesroute=require('./routes/category');
const multer= require("multer");
const path=require("path");
app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"/images")))
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("connect to mongo")).catch(err=>console.log(err));

const storage =multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },filename:(req,file,cb) =>
    {
        cb(null,req.body.name);
    }
})

const upload= multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File is  uploaded");
})

app.use("/api",authroute);
app.use("/api",userroute);
app.use("/api",postroute);
app.use("/api",categoriesroute);
app.listen("5000",() => {
    console.log("server on working");
})