// Users Router
const router = require("express").Router();
const { users } = require("../controllers");
const auth = require('../config/auth')

router.post("/", auth, users.create);


router.get("/", auth, users.index);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }

module.exports = router;