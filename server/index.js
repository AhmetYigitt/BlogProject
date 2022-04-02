import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoute from "./routes/postRoute.js";


const app =express();

dotenv.config();


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(cors());

app.use("/posts",postRoute);


app.get("/",(req,res)=>{
    res.status(200).json({message:"home directory"});
});



const port=process.env.PORT;
const connection_url=process.env.CONNECTION_URL
mongoose.connect(connection_url).then(()=>{
    app.listen(port, ()=>{
        console.log("server is running on:"+port);
    })
}).catch((err)=>{
    console.log(err.message);
})