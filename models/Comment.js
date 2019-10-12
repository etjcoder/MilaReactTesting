var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({

    username: {
        type: String,
        required: true,
        default: ""
    }, 
    body: {
        type: String,
        required: true
    }, 
    likes: {
        type: Number,
        required: true,
        default: 0
    }
})

var Comment = mongoose.model("Comment", CommentSchema);

module.expoerts = Comment;