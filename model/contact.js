const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlengh: 5,
      maxlength: 99,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};
