const Post = require("../models/postModel");
const { post } = require("../routes/blog");

exports.createPost = async( req, res) => {
    try{
        const {title , body} = req.body;
        const post = new Post({
            title,body
        })

        const savedPost = await post.save();
        res.json({
            post:savedPost
        })
    }catch(error){
        return res.status(500).json({
            messaga:"Error while creating post",
            status:false
        })
    }
}

exports.getAllPosts = async (req , res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
        res.send({
            posts
        })
    }catch(error){
        return res.status(500).json({
            messaga:"Error while fetching all posts",
            status:false
        })
    }
}