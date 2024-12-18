const express= require('express');
const data=require("./dummydata/Data");
const dotenv= require('dotenv');
dotenv.config();
const app=express();

const Port=process.env.port||3000;

app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.get("/apidata",(req,res)=>{
    res.send(data)
})
app.get("/apidata/:id",(req,res)=>{
const fetcheddata=data.find(c=>c._id==req.params.id);
res.send(fetcheddata);
    
})
app.listen(Port,()=>{console.log(`listening on port ${Port}`);
})