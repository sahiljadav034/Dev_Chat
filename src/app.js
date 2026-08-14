const express = require("express")

const app = express();

app.get("/user" , ( req, res)=>{
    res.send({firstname:"sahil" , sername:"Jadav"});
})

app.post("/user" , ( req, res)=>{
    res.send("Hey there i am POST ");
})

app.delete("/user" , ( req, res)=>{
    res.send("Hey there i am delete");
})

app.use("/",(req, res) =>{
    res.send("This is the response to the request");
});

app.listen(7777 , ()=>{
    console.log("Server is Succussfully Running ");
});