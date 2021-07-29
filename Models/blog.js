const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    _id : mongoose.Schema.ObjectId,
    topic: String,
    content : String,
    author_id : mongoose.Schema.ObjectId,
    writeDate : {
      type : Date,
      default : Date.now
    }
  },{ versionKey: false }
);


module.exports = mongoose.model("Comment",commentSchema);

