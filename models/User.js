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
    firstName: {
        type: String,
        required: false,
        default: ""
    },
    lastName: {
        type: String,
        required: false,
        default: ""
    },
    username: {
        type: String,
        required: false,
        default: ""
    },
    profileDesc: {
        type: String,
        required: false,
        unique: false,
        default: ""
    },
    image: {
        type: String,
        required: false,
        unique: false,
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
    likedCaptions: {
        type: [String],
        required: false,
        unique: false
    },
    goldstars: {
        type: Number,
        required: false,
        default: 0
    }, 
    myCommunityCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Communitycaption"
    }], 
    mySuggestedCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestedcaption"
    }],
    myRequestedImages: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestableimage"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;