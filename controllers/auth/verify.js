const { NotFound } = require("http-errors");

const { User } = require("../../model");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOneAndUpdate(
    { verificationToken },
    {
      verificationToken: null,
      verify: true,
    },
    { new: true }
  );
  if (!user) {
    throw new NotFound("User not found");
  }
  // await User.findByIdAndUpdate(user._id, {
  //   verificationToken: null,
  //   verify: true,
  // });
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verify;
