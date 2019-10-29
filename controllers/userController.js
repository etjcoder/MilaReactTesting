const db = require("../models");


module.exports = {
    getUserCaption: function (req, res) {
        db.User
            .findById(req.params.id)
            .populate("myCommunityCaptions")
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    findUserRequest: function (req, res) {
        db.User
            .findById(req.params.id)
            .populate("myRequestedImages")
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    searchKeywords: function (req, res) {
        db.Maincaption
            .find({ $text: { $search: req.params.keyword } })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    searchCategories: function (req, res) {
        db.Maincaption
            .find({ category: req.params.category })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    getSuggestedCaptions: function (req, res) {
        db.Suggestableimage
            .findById(req.params.id)
            .populate(
                {
                    path: "suggestedCaptions",
                    options: { sort: { likes: -1 } }
                })
            .then(dbCaption =>
                res.json(dbCaption)
            )
            .catch(err => res.status(422).json(err))
    },
    findAllRequest: function (req, res) {
        db.Suggestableimage
            .find()
            .populate("suggestedCaptions")
            .then(dbImage => res.json(dbImage))
            .catch(err => res.status(422).json(err))
    },
    findSuggestable: function (req, res) {
        db.Suggestableimage
            .findById(req.params.id)
            .then(dbImage => res.json(dbImage))
            .catch(err => res.status(422).json(err))
    },
    createCommunityCaption: function (req, res) {
        db.Communitycaption
            .create(req.body)
            .then(function (dbCaption) {

                return db.User.findByIdAndUpdate({ _id: req.params.id }, { $push: { myCommunityCaptions: dbCaption._id } }, { new: true });

            })
            .catch(err => res.status(422).json(err))
    },
    updateUserCaption: function (req, res) {
        db.Communitycaption
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    deleteUserCaption: function (req, res) {
        db.Communitycaption
            .findById({ _id: req.params.id })
            .then(dbCaption => dbCaption.remove())
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err));
    },
    saveSuggestedCaption: function (req, res) {
        db.Suggestedcaption
            .create(req.body)
            .then(function (dbCaption) {

                return db.Suggestableimage.findByIdAndUpdate({ _id: req.params.id }, { $push: { suggestedCaptions: dbCaption._id } }, { new: true });

            })
            .catch(err => res.status(422).json(err))
    },
    saveUserRequest: function (req, res) {
        db.Suggestableimage
            .create(req.body)
            .then(function (dbCaption) {

                return db.User.findByIdAndUpdate({ _id: req.params.id }, { $push: { myRequestedImages: dbCaption._id } }, { new: true });

            })
            .catch(err => res.status(422).json(err))
    },
    createUserData: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    getUserData: function (req, res) {
        db.User
            .find({ uid: req.params.id })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    updateUserData: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    },
    updateSuggestion: function (req, res) {
        db.Suggestedcaption
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    updateUserGold: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, { $inc: { goldstars: 1 } })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    updateCardGold: function (req, res) {
        db.Suggestableimage
            .findOneAndUpdate({ _id: req.params.id }, { goldStarGiven: true })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    updateCaptionGold: function (req, res) {
        db.Suggestedcaption
            .findOneAndUpdate({ _id: req.params.id }, { goldstar: true })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    findTopSuggestion: function (req, res) {
        db.Suggestedcaption
            .find({ parentID: req.params.id }, { $sort: { likes: -1 } })
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    }
};