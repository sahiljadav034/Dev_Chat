const express = require("express")



const app = express();

app.use("/home",(req, res) =>{
    res.send("This is the response to the request on HOME");

});

app.use("/profile",(req, res) =>{

    res.send("This is the response to the request on PROFILE");
});

app.use("/",(req, res) =>{
    res.send("This is the response to the request");
});





app.listen(7777 , ()=>{
    console.log("Server is Succussfully Running ");
});