const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"
router.route("/captions")
    .post(userController.createCommunityCaption)

router.route("/captions/:id")
    .put(userController.updateUserCaption)
    .delete(userController.deleteUserCaption);

router.route("/captions/:username")
    .get(userController.getUserCaption);

router.route("/request")
    .post(userController.createUserRequest)
    .get(userController.findAllRequest);

router.route("/suggestion/:id")
    .post(userController.saveSuggestedCaption)
    .get(userController.getSuggestedCaptions)

module.exports = router;