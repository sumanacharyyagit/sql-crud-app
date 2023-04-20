const connection = require("../config/db.config");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

exports.signup = async (req, res, next) => {
  const { id, firstName, lastName, email, password } = { ...req.body };

  if (!firstName || !lastName || !id || !email || !password) {
    return res.status(201).json({
      success: false,
      user: {
        message: "FirstName, LastName, Email, Password and Id is required!",
      },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    };

    console.log(user);
    connection.query("INSERT INTO userdata SET ?", user, (err, result) => {
      //if(err) throw err
      if (err) {
        console.log(err);
        return res.status(401).json({
          success: false,
          user: {
            message: "Error while creating the user!",
          },
        });
      } else {
        return res.status(201).json({
          success: false,
          user: {
            message: "Successfully signed-up the user!",
          },
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      user: {
        message: "Error while register!",
      },
    });
  }
};

exports.signin = async (req, res, next) => {
  const { email, password: plainPass } = { ...req.body };

  if (!email || !plainPass) {
    return res.status(201).json({
      success: true,
      user: {
        message: "Email and Password are required!",
      },
    });
  }

  try {
    connection.query(
      "SELECT * FROM userdata WHERE email = ?",
      [email],
      async (err, rows, fields) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            success: false,
            message: "Email and Password are required!",
          });
        }
        // if user not found
        if (rows.length <= 0) {
          return res.status(400).json({
            success: false,
            message: "Email and Password are not valid!",
          });
        } else {
          console.log(rows[0].password);

          const isPasswordValid = await bcrypt.compare(
            plainPass,
            rows[0].password
          );
          if (!isPasswordValid) {
            return res.status(401).json({
              success: false,
              message: "Password not matched!",
            });
          }
          return res.status(201).json({
            success: true,
            token: jwt.sign({ id: rows[0].id }, jwt_secret),
            user: {
              email: rows[0].email,
            },
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      success: false,
      user: {
        message: "Error while register!",
      },
    });
  }
};

exports.getListOfUsers = async (req, res, next) => {
  try {
    connection.query("SELECT * FROM userdata", async (err, rows, fields) => {
      if (err) {
        console.log(err);
        return res.status(401).json({
          success: false,
          message: "Error while Fetching!",
        });
      }
      // if user not found
      if (rows.length <= 0) {
        return res.status(200).json({
          success: true,
          message: "User list is empty!",
        });
      } else {
        return res.status(201).json({
          success: true,
          user: rows,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      user: {
        message: "Error while Fetching!",
      },
    });
  }
};

exports.updateSingleUser = async (req, res, next) => {
  const { id } = { ...req.params };
  const data = req.body;

  try {
    const payload = { ...data, password: await bcrypt.hash(data.password, 10) };
    connection.query(
      "UPDATE userdata SET ? WHERE id = ?",
      [{ ...payload }, id],
      async (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            success: false,
            message: "Error while updating!",
          });
        } else {
          return res.status(201).json({
            success: true,
            updatedUser: result.affectedRows,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Error while updating!",
    });
  }
};

exports.deleteSingleUser = async (req, res, next) => {
  const { id } = { ...req.params };

  try {
    connection.query(
      "DELETE FROM userdata WHERE id = ?",
      [id],
      async (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            success: false,
            message: "Error while Deleting!",
          });
        }
        // if user not found
        else {
          return res.status(201).json({
            success: true,
            deletedUser: results.affectedRows,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Error while Deleting!",
    });
  }
};
