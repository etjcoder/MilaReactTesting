var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SuggestedCaptionSchema = new Schema({
    caption: {
        type: String,
        required: false,
    },
    parentID: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    tags: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    reference: {
        type: String,
        required: false,
    },
    lyric: {
        type: Boolean,
        required: false,
    }, 
    quote: {
        type: Boolean,
        required: false,
    },
    originalAuthor: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    }, 
    likedBy: {
        type: [String],
        required: true,
        default: ""
    },
    goldstar: {
        type: Boolean,
        required: false,
        default: false
    }, 
    images: {
        type: String,
        required: false,
        unique: false
    }, 
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }], 
})

var Suggestedcaption = mongoose.model("Suggestedcaption", SuggestedCaptionSchema);

module.exports = Suggestedcaption;