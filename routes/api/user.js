const router = require("express").Router();
const booksController = require("../../controllers/userController");

//Matches with "/api/user"
router.route("/captions")
    .post(booksController.createCommunityCaption)
    // .get(booksController.getUserCaptions);

router.route("/captions/:user")
    .get(booksController.getUserCaptions);

module.exports = router;