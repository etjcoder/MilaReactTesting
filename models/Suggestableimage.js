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
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
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
    likes: {
        type: Number,
        required: true,
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