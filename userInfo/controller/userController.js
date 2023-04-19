exports.signup = async (req, res, next) => {
  return res.status(201).json({
    success: true,
    user: {
      test: "test",
    },
  });
};

exports.signin = async (req, res, next) => {
  return res.status(201).json({
    success: true,
    user: {
      test: "test",
    },
  });
};

exports.getListOfUsers = async (req, res, next) => {
  return res.status(201).json({
    success: true,
    users: [
      {
        test: "test",
      },
      {
        test2: "test2",
      },
    ],
  });
};
