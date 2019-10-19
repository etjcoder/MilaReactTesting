const db = require("../models");


module.exports = {
    getUserCaption: function(req, res) {
        db.Communitycaption
            .find()
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    searchKeywords: function(req, res) {
        db.Maincaption
            .find({tags : req.params.keyword})
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    searchCategories: function(req, res) {
        db.Maincaption  
            .find({category : req.params.category})
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    getSuggestedCaptions: function(req, res) {
        db.Suggestableimage 
            .findById(req.params.id)
            .populate("suggestedCaptions")
            .then(dbCaption =>
                res.json(dbCaption)
            )
            .catch(err => res.status(422).json(err))
    },
    findAllRequest: function(req, res) {
        db.Suggestableimage 
            .find()
            .then(dbImage => res.json(dbImage))
            .catch(err => res.status(422).json(err))
    },
    createCommunityCaption: function(req, res) {
        db.Communitycaption 
            .create(req.body)
            .then(dbCategory => res.json(dbCategory))
            .catch(err => res.status(422).json(err))
    },
    updateUserCaption: function(req, res) {
        db.Communitycaption
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    },
    deleteUserCaption: function(req, res) {
        db.Communitycaption
            .findById({ _id: req.params.id})
            .then(dbCaption => dbCaption.remove())
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err));
    },
    createUserRequest: function(req, res) {
        db.Suggestableimage
            .create(req.body)
            .then(dbImage => res.json(dbImage))
            .catch(err => res.status(422).json(err))
    },
    saveSuggestedCaption: function(req, res) {
        db.Suggestedcaption
            .create(req.body)
            .then(function(dbCaption){ 
                
                return db.Suggestableimage.findByIdAndUpdate({ _id: req.params.id}, { $push: { suggestedCaptions: dbCaption._id} }, {new: true});

            })
            .catch(err => res.status(422).json(err))
    }
};