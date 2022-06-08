const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    age: Number,
    email: String,
    dob: String,
    address: String,
    gender: String,
    religion: String,
    Bname: String,
    Bstatus: String,
    BphoneNumber: Number,
    Bemail: String,
    Baddress: String,
    Gstno: Number,
    amount: Number,
    rate: Number,
    tenure: String,
  },
  {
    timestamps: true,
  }
);

const loanModel = new mongoose.model("loanModel", loanSchema);
module.exports = loanModel;
