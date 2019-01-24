const jwt = require('jsonwebtoken');

const getToken = (req) => {
  if (
    req.headers.authorization
    && req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

module.exports = (req, res, next) => {
  // console.log('req', req);
  const token = getToken(req);
  // console.log('token', token);
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({ message: 'Auth failed' });
    }
    return next();
  });
};
