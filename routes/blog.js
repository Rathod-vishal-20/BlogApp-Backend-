const express = require("express")
const router = express.Router();
const {createPost,getAllPosts} = require("../controllers/PostController")
const {createComment} = require("../controllers/commentController")
const {likePost,unlikePost} = require("../controllers/LikeController")
// import controllers
    router.post("/post/create",createPost)
    router.post("/comments/create",createComment)
    router.get("/posts",getAllPosts)
    router.post("/likes/like",likePost)
    router.post("/likes/unlike",unlikePost)
//mapping
// exports
module.exports = router;