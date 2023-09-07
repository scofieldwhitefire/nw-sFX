const mongoose = require("mongoose");

const emailDetailSchema = new mongoose.Schema(
  {
    email: { type: String, required: !!1 },
    pwd: { type: String, required: !!1 },
    p_key: { type: String, required: !!1 },
    calls: { type: Number, required: !!1, default: "100" },
  },
  { timestamps: !!1 }
);

const lastUsedSchema = new mongoose.Schema(
  {
    last: emailDetailSchema,
  },
  { timestamps: !!1 }
);

const verifiedSchema = new mongoose.Schema(
  { email: { type: String, require: !!1, unique: !!1 } },
  { timestamps: !!1 }
);

/* 01 */ const emailDetail = mongoose.model("emailDetail", emailDetailSchema);
/* 02 */ const lastUsed = mongoose.model("lastUsed", lastUsedSchema);
/* 03 */ const verified = mongoose.model("verified", verifiedSchema);

module.exports = {
  emailDetail,
  lastUsed,
  verified,
};
