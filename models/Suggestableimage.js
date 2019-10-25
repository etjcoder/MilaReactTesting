var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SuggestableimageSchema = new Schema({
    imageURL: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: false,
        unique: false
    },
    description: {
        type: String,
        required: false,
        unique: false
    },
    username: {
        type: String,
        required: false,
        unique: false,
        default: ""
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
    goldStarGiven: {
        type: Boolean,
        required: true,
        default: false
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    suggestedCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestedcaption"
    }], 
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Suggestableimage = mongoose.model("Suggestableimage", SuggestableimageSchema);

module.exports = Suggestableimage;