const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: !!1, unique: !!1 },
    email: { type: String, required: !!1, unique: !!1 },
    first_name: { type: String, required: !!1, unique: !!0 },
    last_name: { type: String, required: !!1, unique: !!0 },
    gender: { type: String, required: !!1, unique: !!0 },
    phone_no: { type: Number, required: !!1, unique: !!1 },
    password: { type: String, required: !!1 },
    isAdmin: { type: Boolean, default: !!0 },
    isVerified: { type: Boolean, default: !!0 },
    isActive: { type: Boolean, default: !!1 },
    isDisabled: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

const AddressSchema = new mongoose.Schema(
  {
    user: UserSchema,
    address: {
      type: String,
      required: !!1,
      unique: [!!1, "Address already exists"],
    },
    wallet: { type: String, default: "BTC" },
    isActive: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

module.exports = mongoose.model("User", UserSchema);
module.exports = mongoose.model("Address", AddressSchema);
