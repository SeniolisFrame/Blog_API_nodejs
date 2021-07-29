const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    _id : mongoose.Schema.ObjectId,
    blog_id : mongoose.Schema.ObjectId,
    comment : String,
    writeDate : {
      type : Date,
      default : Date.now
    }
  },
  { versionKey : false }
);
module.exports = mongoose.model("Comment",commentSchema);
