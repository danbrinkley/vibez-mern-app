const router = require("express").Router();

router.use("/posts", require("./posts"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));



module.exports = router;