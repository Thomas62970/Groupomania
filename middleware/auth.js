const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "bonjour");
    const userId = decodedToken.userId;
    const userMod = decodedToken.userMod;
    if(userId){
      req.userId = userId;
      req.userMod = userMod;
      next();
    }else{
      throw 'Not authenticated'
    }    
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}
