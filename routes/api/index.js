const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./user");
const adminRoutes = require("./admin");

// Book routes
// router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;