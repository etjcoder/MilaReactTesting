const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Category
            .find()
            .sort({ category: 1})
            .then(dbCategory => res.json(dbCategory))
            .catch(err => res.status(422).json(err));
    }

};

   // getCaptions: function(req, res) {
    //     db.Caption
    //         .find()
    //         .sort({ category: 1})
    //         .then(dbCaption => res.json(dbCaption))
    //         .catch(err => res.status(422).json(err));
    // },