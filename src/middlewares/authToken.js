const jwt = require('jsonwebtoken');

module.exports.authUser = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.json({statusCode: 401, response: 'not_user_found'});  
    } else {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(payload);
        req.user = payload;
        next();
    }
};