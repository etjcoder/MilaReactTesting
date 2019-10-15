const db = require("../models");


module.exports = {
    getUserCaption: function(req, res) {
        db.Communitycaption
            .find({"username": req.params.username})
            .then(dbCaption => res.json(dbCaption))
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
    }
};