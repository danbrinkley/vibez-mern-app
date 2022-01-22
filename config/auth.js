const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) {
        res.status(401).json({ msg: "Authorization Denied"} )
    
    try {
        const decoded = jwt.verify(token, SECRET)
    
        req.user = decoded;
        next();

    } catch(e) {
        res.status(400).json({ msg: "Token is not valid"});
    
        }
    }
}

module.exports = auth;

// module.exports = function (req, res, next) {
//     // Check for the token being sent in three different ways
//     let token = req.get("Authorization") || req.query.token || req.body.token;
//     console.log("AUTH HEADER FROM AUTH MIDDLEWARE: ", token);
//     if (token) {
//         // Remove the 'Bearer ' if it was included in the token header
//         token = token.replace("Bearer ", "");
//         // Check if token is valid and not expired
//         jwt.verify(token, SECRET, function (err, decoded) {
//             if (err) {
//                 console.log("JWT VERIFY ERROR: ", err);
//                 next(err);
//             } else {
//                 // It's a valid token, so add user to req
//                 console.log("DECODE SUCCESSFUL: ", decoded.user);
//                 req.user = decoded.user;
//                 next();
//             }
//         });
//     } else {
//         next();
//     }
// };