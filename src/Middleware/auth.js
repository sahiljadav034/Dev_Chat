const authAdmin = (req,res,next)=>{
    const token = "spider@3301";
    const isAdminAutherized = token == "spider@3301";
    if(!isAdminAutherized) res.send("Acess denied , You are not Admin");
    else next();
};

const authUser = (req,res,next)=>{
    const token = "spider@311";
    const isUserAutherized = token == "spider@1311";
    if(!isUserAutherized) res.send("Acess denied , Incorrect password or username");
    else next();
};



//module.exports = authAdmin;
module.exports = {
    authAdmin,
    authUser
};
