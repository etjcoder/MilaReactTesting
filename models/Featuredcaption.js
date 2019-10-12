var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FeaturedCaptionSchema = new Schema({
    caption: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    tags: {
        type: [String],
        required: false,
        unique: false
    },
    author: {
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
    uses: {
        type: Number,
        required: true,
        default: 0
    }, 
    images: {
        type: [String],
        required: false,
        unique: false
    }, 
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }], 
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Featuredcaption = mongoose.model("Featuredcaption", FeaturedCaptionSchema);

module.exports = Featuredcaption;