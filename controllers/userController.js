const db = require("../models");


module.exports = {

    createCommunityCaption: function(req, res) {
        db.Communitycaption 
            .create(req.body)
            .then(dbCategory => res.json(dbCategory))
            .catch(err => res.status(422).json(err))
    },
    getUserCaptions: function(req, res) {
        db.Communitycaption
            .find({username: req.params.user})
            .then(dbCaptions => res.json(dbCaptions))
            .catch(err => res.status(422).json(err))
    }



};