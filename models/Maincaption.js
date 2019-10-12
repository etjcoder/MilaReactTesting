var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MainCaptionSchema = new Schema({
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
    // tags: {
    //     type: [String],
    //     required: true,
    //     unique: false,
    //     default: []
    // },
    author: {
        type: String,
        required: true,
        unique: false,
        default: "Mira"
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
    tags: {
        type: [String],
        required: false,
        unique: false
    }, 
    featured: {
        type: Boolean,
        required: true,
        default: false
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

var Maincaption = mongoose.model("Maincaption", MainCaptionSchema);

module.exports = Maincaption;