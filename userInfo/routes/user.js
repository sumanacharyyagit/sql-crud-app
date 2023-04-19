const express = require("express");
const {
  signup,
  signin,
  getListOfUsers,
} = require("../controller/userController");

const router = express.Router();

router.route("/").get(() => {
  return res.status(200).json({
    success: true,
  });
});

router.route("/signup").get(signup);
router.route("/login").get(signin);
router.route("/all").get(getListOfUsers);

module.exports = router;
