const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"
router.route("/captions")
    .post(userController.createCommunityCaption)

router.route("/captions/:id")
    .put(userController.updateUserCaption);

router.route("/captions/:username")
    .get(userController.getUserCaption);

module.exports = router;