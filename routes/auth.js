// Users Router
const router = require("express").Router();
const { auth } = require("../controllers");

// router.use(require('../config/auth'));
router.post("/auth", auth.login);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }

module.exports = router;    