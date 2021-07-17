const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.ObjectId,
    firstname : String,
    lastname : String,
    email : {
      type : String,
      match : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    username : String,
    password : String,
    intro : {
      type : String,
      default : ''
    },
    create_date : {
      type : Date,
      default : Date.now
    },
    update_date : {
      type : Date,
      default : Date.now
    }
  },{ versionKey: false }
  );

module.exports = mongoose.model("User", userSchema);