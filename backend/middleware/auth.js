const jwt = require('jsonwebtoken');

// Middleware to verify JWT tokens
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Expecting 'Bearer <token>'
    if (!token) {
        return res.sendStatus(403); // Forbidden
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Attach user data to the request
        next(); // Proceed to next middleware or route handler
    });
};

module.exports = authenticateJWT;