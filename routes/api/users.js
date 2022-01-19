// Users Router
const router = require("express").Router();
const { users } = require("../controllers");

router.post("/", users.create);

// router.use(require("../config/auth"));
router.get("/", users.index);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }

module.exports = router;