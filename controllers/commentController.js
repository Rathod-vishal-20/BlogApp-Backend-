const Commet = require("../models/commentModels");
const Post = require("../models/postModel")

exports.createComment = async (req, res) => {
    try{

        const {post,user,body} = req.body;

        const comment = new Commet({
            post,user,body
        })

        const savedComment = await comment.save();

        // find the post 
        const updatedPost = await Post.findByIdAndUpdate(post,{
            $push:{comments:savedComment._id},
        },{new:true})
        .populate("comments")
        .exec()

        return res.status(200).json({
            post:updatedPost,
            message:"Comment added successfully",
            status :true
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Eror while creating comment",

            status:false
        })
    }
}