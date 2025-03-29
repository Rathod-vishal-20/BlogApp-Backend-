const Like = require("../models/LikeModel")
const Post = require("../models/postModel")

exports.likePost = async (req, res) => {
    try{
        const{post , user}= req.body;

        const like = new Like({
            post, user
        })

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate('likes').exec()
        res.json({
            post:updatedPost
        })

    }catch(error){
        console.log(error)
        return res.json({
            message:"Issue in like section",
            error:error.message
        })
    }
}

exports.unlikePost = async (req, res) => {
    try{
        const {post , like} = req.body;

        const deletedLike = await Like.findByIdAndDelete({post:post, _id:like})
        // update the post collection 

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

        res.json({
            post:updatedPost
        })


    }catch(error){
        return res.json({
            message:"Issue in unlike section",
            error:error.message
        })
    }
}