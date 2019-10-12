var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        required: "Username is required"
    }, 
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input) {
                return input.length >=6;
            },
            "Password should be longer."
        ]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }, 
    image: {
        type: String,
        required: true,
        unique: false,
        default: ""
    }, 
    userCreated: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }, 
    goldstars: {
        type: Number,
        required: true,
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