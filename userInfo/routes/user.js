const express = require("express");
const {
  signup,
  signin,
  getListOfUsers,
  updateSingleUser,
  deleteSingleUser,
} = require("../controller/userController");
const { isSignIn } = require("../middlewares/userMiddlewares");

const router = express.Router();

router.route("/test").get((req, res) => {
  return res.status(200).json({
    success: true,
  });
});

router.route("/signup").post(signup);
router.route("/login").post(signin);
router.route("/all").get(isSignIn, getListOfUsers);
router.route("/update/:id").patch(isSignIn, updateSingleUser);
router.route("/delete/:id").delete(isSignIn, deleteSingleUser);

module.exports = router;
