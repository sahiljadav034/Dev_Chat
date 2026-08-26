const mongodb = require("mongodb");
const express = require("express");
const { authAdmin, authUser } = require("./Middleware/auth");
const connetionDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.post("/sign-up",async(req,res)=>{
  const user = new User({
    firstName:"Sahil",
    lastName:"Jadav",
    emailId:"sahil3301@gmail.com",
    password:5690,
    gender:"male",
    age:19
  });
  await user.save();
  res.send("Users Data inserted in document succussfully");
})


connetionDB()
  .then(() => {
    console.log("Database Connedction established ......");
    app.listen(7777, () => {
      console.log("Server is Succussfully Running  on http://localhost:7777");
    });
  })
  .catch((err) => {
    console.error("Database connection cannot establishe....");
    console.error(err.message);
  });

/*app.use("/admin", authAdmin);

app.get("/admin/getAllData",(req, res )=>{
  //logic for fetching User data
  res.send("Data sent succussfully");
});

app.get("/user",authUser,(req,res)=>{
  res.send("Hey there I am a User");
});

app.get("/user/login",(req,res)=>{
  res.send("User login Sucussfully");
});

app.get("/admin/UpdateProfile",(req, res)=>{
  //logic for Update user profile
  res.send("Profile Updated succussfully");
});

app.get("/admin/DeleteUser",(req, res)=>{
  //logic for Delete user
  res.send("User deleted  succussfully");
});*/

// app.get("/user/:userID/:name/:password", ( req, res)=>{ // dynamic routes
//     console.log(req.params);        // reads dynamic parameters in routes
//     res.send({firstname:"sahil" , sername:"Jadav"});
// });

// app.use("/user",(req, res) =>{      // suppose we request for this URL /user?userId=101&password=3301
//     console.log(req.query)         // this is reads query parameters
//     res.send("This is the response to the request");
// });

// app.get(/.less$/ , ( req, res)=>{
//     res.send({firstname:"sahil" , sername:"Jadav"});
// });

// app.get("/user" , ( req, res)=>{
//     res.send({firstname:"sahil" , sername:"Jadav"});
// })

// app.post("/user" , ( req, res)=>{
//     res.send("Hey there i am POST ");
// })

// app.delete("/user" , ( req, res)=>{
//     res.send("Hey there i am delete");
// })

// app.use("/", (req, res) => {
//   res.send("This is the response to the request");
// });
