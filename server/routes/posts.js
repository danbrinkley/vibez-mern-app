// Posts Router
const router = require("express").Router();
const { posts } = require("../controllers");
const auth = require('../config/auth')

router.get("/", posts.index);
router.get("/:id", posts.show);
router.get("/:id/comments", posts.showComments);


router.post("/", auth, posts.create);
router.post("/:id/comment", auth, posts.createComment);
router.put("/:id/comment/:commentId", auth, posts.updateComment);
router.put("/:id", auth, posts.update);
router.delete("/:id", auth, posts.destroy);
router.delete("/:id/comment/:commentId", auth, posts.destroyComment);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }

module.exports = router;
