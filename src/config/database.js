const mongoose = require("mongoose");

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();


const connetionDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI + "DevTinder");
}

module.exports = connetionDB;