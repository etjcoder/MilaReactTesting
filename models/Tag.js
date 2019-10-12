var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TagSchema = new Schema({
    tagname: {
        type: String,
        required: true,
        unique: false
    },
    category1: {
        type: String,
        required: true,
        unique: false
    },
    category2: {
        type: String,
        required: false,
        unique: false
    },
    category3: {
        type: String,
        required: false,
        unique: false
    }, 
    adult: {
        type: Boolean,
        required: true,
        unique: false,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Tag = mongoose.model("Tag", TagSchema);

module.exports = Tag;