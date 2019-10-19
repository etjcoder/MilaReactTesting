const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"
router.route("/captions")
    .post(userController.createCommunityCaption)
    .get(userController.getUserCaption)

router.route("/captions/:id")
    .put(userController.updateUserCaption)
    .delete(userController.deleteUserCaption);

router.route("/search/keyword/:keyword")
    .get(userController.searchKeywords);

router.route("/search/category/:category")
    .get(userController.searchCategories)

router.route("/request")
    .post(userController.createUserRequest)
    .get(userController.findAllRequest);

router.route("/suggestion/:id")
    .post(userController.saveSuggestedCaption)
    .get(userController.getSuggestedCaptions)

module.exports = router;