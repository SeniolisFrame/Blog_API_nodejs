const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const mongoose = require('mongoose');

const signup = async (req,res) => {
    User.find(
        { $or: [
            { email : req.body.email },
            { username : req.body.username }
        ]}
    ).then((user) => {
        if (user.length>0)
            res.json({
                message:"Email or Username Exists"
        })
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err) {
                return res.json({
                    error : err
                })
            }
            const user = new User({
                _id : new mongoose.Types.ObjectId(),
                name : req.body.name,
                email : req.body.email,
                username : req.body.username,
                password : hash,
            });
            user.save().then((result)=>{
                return res.json({
                    message : 'register success',
                    user : {
                        name : req.body.name,
                        email : req.body.email,
                        username :req.body.username
                    }
                })
            })
        })
    })
}

const login = async (req,res) => {
    User.findOne(
        { username : req.body.username }
    ).then((user)=>{
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if (err) {
                return res.json({
                    error : err
                })
            }
            if (result) {
                const token = jwt.sign({
                    _id : user._id,
                },
                process.env.jwt_secret,{ expiresIn: "30m"});
                return res.json({
                    name : user.name,
                    username : user.username,
                    token: token,
                })
            } else {
                return res.json({
                    message : 'username or password incorrect'
                })
            }
        })
    }).catch((err)=>{
        return res.json({
            message : 'username or password incorrect'
        })
    })
}

const getProfile = async (req,res) => {
    User.findOne( { _id : req.user._id
    }).then((user)=>
    {
        res.json(user);
    })
}



module.exports = {
    signup, login, getProfile
}