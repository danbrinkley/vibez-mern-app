// Posts Router
const router = require("express").Router();
const { posts } = require("../controllers");

router.get("/", posts.index);
router.get("/:id", posts.show);
router.get("/:id/comments", posts.showComments);

router.use(require("../config/auth"));
router.post("/", posts.create);
router.post("/:id/comment", posts.createComment);
router.put("/:id/comment/:commentId", posts.updateComment);
router.put("/:id", posts.update);
router.delete("/:id", posts.destroy);
router.delete("/:id/comment/:commentId", posts.destroyComment);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }

module.exports = router;
