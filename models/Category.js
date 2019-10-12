var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        unique: true
    },

}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Category = mongoose.model("Category", CategorySchema);

module.exports = Category;