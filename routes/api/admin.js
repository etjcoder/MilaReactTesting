const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/category")
    .get(adminController.findAll)
    .post(adminController.create)

router.route("/captions")
    .post(adminController.createCap)
    .get(adminController.findAllCaps)

router.route("/captions/:id")
    .put(adminController.update)
    .delete(adminController.deleteCap)
    .post(adminController.featureCap)

router.route("/captions/featured")
    .get(adminController.findAllFeaturedMila)

router.route("/captions/featured/:id")
    .put(adminController.unfeatureMila)

module.exports = router;



