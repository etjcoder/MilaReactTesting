const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"

router.route("/captions/:id")
    .put(userController.updateUserCaption)
    .delete(userController.deleteUserCaption)
    .post(userController.createCommunityCaption)
    .get(userController.getUserCaption)

router.route("/search/keyword/:keyword")
    .get(userController.searchKeywords);

router.route("/search/category/:category")
    .get(userController.searchCategories)

router.route("/request")
    .get(userController.findAllRequest);

router.route("/request/:id")
    .post(userController.saveUserRequest)
    .get(userController.findUserRequest)

router.route("/suggestable/:id")
    .get(userController.findSuggestable)

router.route("/suggestion/top/:id")
    .get(userController.findTopSuggestion)

router.route("/suggestion/:id")
    .post(userController.saveSuggestedCaption)
    .get(userController.getSuggestedCaptions)
    .put(userController.updateSuggestion)

router.route("/data")
    .post(userController.createUserData)

router.route("/data/:id")
    .get(userController.getUserData)
    .put(userController.updateUserData);

router.route("/goldstars/:id")
    .put(userController.updateUserGold)
    .post(userController.updateCardGold)

router.route("/goldstar/:id")
    .put(userController.updateCaptionGold)

module.exports = router;