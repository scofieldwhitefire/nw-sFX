const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    ref_code: { type: String, required: !!1, unique: !!1 },
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
    isDeleted: { type: Boolean, default: !!0 },
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
    isActive: { type: Boolean, default: !!1 },
  },
  { timestamps: !!1 }
);

const VerifySchema = new mongoose.Schema(
  {
    user: UserSchema,
    uuid: { type: "UUID", required: !!1, unique: !!1 },
    token: { type: String, required: !!1, unique: !!1 },
    expires: { type: Date, require: !!1 },
  },
  { timestamps: !!1 }
);

const SessionSchema = new mongoose.Schema(
  {
    user: { type: String, unique: !!0 },
    ip: String,
    token: { type: String, required: !!1, unique: !!1 },
    device: String,
    active: { type: Boolean, default: !!1 },
    expires: Date,
  },
  { timestamps: !!1 }
);

const FailedLoginSchema = new mongoose.Schema(
  {
    user: UserSchema,
    attempt: { type: Number, default: "1" },
    blocked: { type: Boolean, default: !!0 },
    disabled: { type: Boolean, default: !!0 },
    suspended: { type: Boolean, default: !!0 },
    sent: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

const AccountTypeSchema = new mongoose.Schema(
  {
    user: UserSchema,
    account_type: { type: String, default: "Starter" },
  },
  { timestamps: !!1 }
);

const ShowOnAdminSchema = new mongoose.Schema(
  {
    user: UserSchema,
    show: { type: Boolean, default: !!1 },
    ref_code: { type: String, default: (x) => (x === "" ? "ADMIN001" : x) },
  },
  { timestamps: !!1 }
);

const CreationMonthSchema = new mongoose.Schema(
  {
    user: UserSchema,
    month: { type: String, required: !!1 },
  },
  { timestamps: !!1 }
);

const RefCodeSchema = new mongoose.Schema(
  {
    user: UserSchema,
    ref_code: { type: String, unique: !!1 },
    number_of_refers: { type: Number, default: "0" },
    earns: { type: Number, default: "0" },
    admin_level: { type: Boolean, default: !!0 },
    subAdmin_level: { type: Boolean, default: !!0 },
    user_level: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

const RecoveryQuestionSchema = new mongoose.Schema(
  {
    user: UserSchema,
    question_one: String,
    answer_one: String,
    question_two: String,
    answer_two: String,
    question_three: String,
    answer_three: String,
    question_four: String,
    answer_four: String,
    question_five: String,
    answer_five: String,
  },
  { timestamps: !!1 }
);

const ResetPasswordSchema = new mongoose.Schema(
  {
    user: UserSchema,
    ui: { type: "UUID", required: !!1, unique: !!1 },
    token: { type: String, required: !!1, unique: !!1 },
    expires: { type: Date, require: !!1 },
    clicked: { type: Boolean, default: !!0 },
    changed: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

const OldPasswordSchema = new mongoose.Schema(
  {
    user: { type: String, unique: !!0 },
    password: { type: String, required: !!1 },
    changed: Date,
  },
  { timestamps: !!1 }
);

const PinSchema = new mongoose.Schema(
  {
    user: UserSchema,
    pin: { type: String, required: !!1 },
    expires: Date,
  },
  { timestamps: !!1 }
);

const IpLoginDetailSchema = new mongoose.Schema(
  {
    user: { type: String, unique: !!0 },
    ip: { type: String, required: !!1 },
    session: SessionSchema,
    vpn: { type: Boolean, default: !!0 },
  },
  { timestamps: !!1 }
);

/* 01 */ const User = mongoose.model("User", UserSchema);
/* 02 */ const Address = mongoose.model("Address", AddressSchema);
/* 03 */ const Verify = mongoose.model("Verify", VerifySchema);
/* 04 */ const Session = mongoose.model("Session", SessionSchema);
/* 05 */ const FailedLogin = mongoose.model("FailedLogin", FailedLoginSchema);
/* 06 */ const AccountType = mongoose.model("AccountType", AccountTypeSchema);
/* 07 */ const ShowOnAdmin = mongoose.model("ShowOnAdmin", ShowOnAdminSchema);
/* 08 */ const CreationMonth = mongoose.model(
  "CreationMonth",
  CreationMonthSchema
);
/* 09 */ const RefCode = mongoose.model("RefCode", RefCodeSchema);
/* 10 */ const RecoveryQuestion = mongoose.model(
  "RecoveryQuestion",
  RecoveryQuestionSchema
);
/* 11 */ const ResetPassword = mongoose.model(
  "ResetPassword",
  ResetPasswordSchema
);
/* 12 */ const OldPassword = mongoose.model("OldPassword", OldPasswordSchema);
/* 13 */ const Pin = mongoose.model("Pin", PinSchema);
/* 14 */ const IpLoginDetail = mongoose.model(
  "IpLoginDetail",
  IpLoginDetailSchema
);

module.exports = {
  User,
  Address,
  Verify,
  Session,
  FailedLogin,
  AccountType,
  ShowOnAdmin,
  CreationMonth,
  RefCode,
  RecoveryQuestion,
  ResetPassword,
  OldPassword,
  Pin,
  IpLoginDetail,
};
