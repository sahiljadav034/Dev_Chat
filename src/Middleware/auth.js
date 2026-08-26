const authAdmin = (req,res,next)=>{
    const token = "spider@3301";
    const isAdminAutherized = token == "spider@3301";
    if(!isAdminAutherized) res.status(401).send("Acess denied , You are not Admin");
    else next();
};

const authUser = (req,res,next)=>{
    const token = "spider@311";
    const isUserAutherized = token == "spider@1311";
    if(!isUserAutherized) res.status(401).send("Acess denied , Incorrect password or username");
    else next();
};



//module.exports = authAdmin; find the reason why we can't export like this :
//  we can export like this we also have to import like this , not like object (means inside curly braces)
module.exports = {
    authAdmin,
    authUser
};
