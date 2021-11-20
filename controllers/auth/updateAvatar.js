const fs = require("fs/promises");
const path = require("path");
const { NotFound, Unauthorized } = require("http-errors");
const { User } = require("../../model");

const avatarDir = path.join(__dirname, "../../public/avatars");

const updateAvatar = async (req, res, next) => {
  const { _id, email } = req.user;

  if (!req.file) {
    throw new BadRequest("Enter the file");
  }
  const { path: tempDir, originalname } = req.file;

  const filename = `${_id}_avatar-image_${originalname}`;
  const uploadDir = path.join(avatarDir, filename);

  try {
    await fs.rename(tempDir, uploadDir);
    const avatar = path.join("/avatars", filename);

    const data = await User.findByIdAndUpdate(
      _id,
      { avatarURL: avatar },
      { new: true }
    );
    if (!data) {
      throw new NotFound(`User with id=${_id} not found`);
    }
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Success update avatar",
      data: {
        avatarURL: avatar,
      },
    });
  } catch (error) {
    await fs.unlink(tempDir);
    next(error);
  }
};

module.exports = updateAvatar;
