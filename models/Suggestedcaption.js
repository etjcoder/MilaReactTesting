var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SuggestedCaptionSchema = new Schema({
    caption: {
        type: String,
        required: true,
        unique: true
    },
    parentID: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false,
        unique: false
    },
    tags: {
        type: [String],
        required: false,
        unique: false
    },
    username: {
        type: String,
        required: false,
        unique: false,
    },
    reference: {
        type: String,
        required: false,
        unique: false
    },
    lyric: {
        type: Boolean,
        required: true,
        default: false
    }, 
    quote: {
        type: Boolean,
        required: true,
        default: false
    },
    originalAuthor: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }, 
    goldstar: {
        type: Boolean,
        required: true,
        default: false
    }, 
    images: {
        type: [String],
        required: false,
        unique: false
    }, 
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }], 
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Suggestedcaption = mongoose.model("Suggestedcaption", SuggestedCaptionSchema);

module.exports = Suggestedcaption;