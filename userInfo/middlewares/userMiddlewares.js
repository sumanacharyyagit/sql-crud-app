const connection = require("../config/db.config");
var jwt = require("jsonwebtoken");

exports.isSignIn = async (req, res, next) => {
  const token =
    req.body?.token || req.header("Authorization").replace("Bearer ", "");
  console.log(token);

  if (!token) {
    return res.status(403).json({
      success: false,
      user: {
        message: "Route is forbidden!",
      },
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    connection.query(
      "SELECT * FROM userdata WHERE id = ?",
      [decoded.id],
      async (err, rows, fields) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            success: false,
            message: "Error in Middleware!",
          });
        }
        // if user not found
        if (rows.length <= 0) {
          return res.status(400).json({
            success: false,
            message: "The token is not valid!",
          });
        } else {
          next();
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
