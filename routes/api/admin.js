const router = require("express").Router();
const adminController = require("../../controllers/adminController");


// Matches with /api/admin/captions
// router.route("/")
//     .get(adminController.getCaptions);

router.route("/category")
    .get(adminController.findAll);


module.exports = router;
