const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const mongoose = require('mongoose');

const register = async (req,res) => {
    User.find(
        { $or: [{ email : req.body.email }, { username : req.body.username }]
        }).then((user) => {
            if (user.length>0)
                return res.json({
                    message:"Email or Username Exists"
            })
            bcrypt.hash(req.body.password,10,(err,encrpted)=>{
                if(err) {
                    return res.json({
                        error : err
                    })
                }
                const user = new User({
                    _id : new mongoose.Types.ObjectId(),
                    firstname : req.body.firstname,
                    lastname : req.body.lastname,
                    email : req.body.email,
                    username : req.body.username,
                    password : encrpted,
                });
                user.save().then(()=>{
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
                process.env.ACCESS_TOKEN_SECRET,{ expiresIn: "30m"});
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
    }).catch(()=>{
        return res.json({
            message : 'username or password incorrect'
        })
    });
}

const getProfile = async (req,res) => {
    User.findOne( { _id : req.user._id }).then((user)=> {
        return res.json({
            firstname: user.firstname,
            lastname: user.lastname,
            username : user.username,
            intro : user.intro
        });
    }).catch(()=>{ return res.json({ message:"error" }) });
}

module.exports = {
    register, login, getProfile
}