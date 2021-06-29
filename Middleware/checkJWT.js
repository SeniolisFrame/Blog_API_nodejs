const jwt = require("jsonwebtoken")
module.exports = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token===null) return res.status(401).json({
        message : "invalid token"
    });

    jwt.verify(token,process.env.jwt_secret,(err,user)=>{
        if(err){
            return res.status(403).json({
                message : "token can't verify"
            });
        }
        req.user = user;
        next();
    });
    
}