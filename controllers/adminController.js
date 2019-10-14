const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Category
            .find()
            .sort({"category": 1})
            .then(dbCategory => res.json(dbCategory))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Category 
            .create(req.body)
            .then(dbCategory => res.json(dbCategory))
            .catch(err => res.status(422).json(err))
    },
    createCap: function(req, res) {
        db.Maincaption  
            .create(req.body)
            .then(dbCaption => res.json(dbCaption))
            .catch(err => res.status(422).json(err))
    }
};