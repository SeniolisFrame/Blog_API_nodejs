const Blog = require('../Models/blog');
const Comment = require('../Models/comment');
const User = require('../Models/user');
const mongoose = require('mongoose');

const getAllBlog = async (req,res) => {
    Blog.find({}).then((data)=>{
        return res.json(data);
    })
    
}
const getBlog = async (req,res) => {
    Blog.findOne({_id : req.params.id }).then((blog)=>{
        if(!blog) {
            throw new Error();
        }
        Comment.find({ blog_id : blog._id }).then((comment)=>{
            if(!comment) {
                throw new Error();
            }
            User.findOne({ _id : blog.author_id }).then((user)=>{
                if(!user) {
                    throw new Error();
                }
                return res.json({
                    blog_id : blog._id,
                    topic : blog.topic,
                    content : blog.content,
                    author : user.firstname+' '+user.lastname,
                    comment : comment
                });
            }).catch(()=>{ return res.json({ message : "error" }) });
        }).catch(()=>{ return res.json({ message : "error" }) });
    }).catch(()=>{ return res.json({ message: "error" }) });
}

const postBlog = async (req,res) => {
    let blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        topic: req.body.topic,
        content : req.body.content,
        author_id : req.user._id
    });
    blog.save().then(()=>{ return res.json({ message:"success" })}).catch(()=>{ return res.json({ message: "error" }) });
}

const commentBlog = async (req,res) => {
    let comment = new Comment({
        _id : new mongoose.Types.ObjectId(),
        blog_id : req.body.blog_id,
        comment : req.body.comment,
    });
    comment.save().then(()=>{ return res.json({ message:"success" })}).catch(()=> { return res.json({ messege:"error" }) });
}


module.exports = {
    getAllBlog, getBlog, postBlog, commentBlog
}
