const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Matches with "/api/user"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//Matches with "/api/user/:id"
router.route("/:id")
    .delete(booksController.remove)


module.exports = router;