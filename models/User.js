var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }, 
    uid: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false,
        unique: false,
        default: ""
    }, 
    userCreated: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    }, 
    goldstars: {
        type: Number,
        required: false,
        default: 0
    }, 
    myCommunityCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Communitycaptions"
    }], 
    mySuggestedCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestedcaptions"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }],
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;