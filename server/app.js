const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./utils/db");

const loanModel = require("./model/user");

app.use(cors());

// config dotenv
dotenv.config({});

const port = process.env.PORT || 3000;

// set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// routing
app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/loan", async (req, res) => {
  try {
    const data = await loanModel.find().sort({ _id: 1 });
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/loan_details", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      age,
      email,
      dob,
      address,
      gender,
      religion,
      Bname,
      Bstatus,
      BphoneNumber,
      Bemail,
      Baddress,
      Gstno,
      amount,
      rate,
      tenure,
    } = req.body;

    const userApi = new loanModel({
      firstName,
      lastName,
      mobileNumber,
      age,
      email,
      dob,
      address,
      gender,
      religion,
      Bname,
      Bstatus,
      BphoneNumber,
      Bemail,
      Baddress,
      Gstno,
      amount,
      rate,
      tenure,
    });
    const saveData = await userApi.save();
    console.log("====================================");
    console.log(saveData);
    console.log("====================================");
    res.status(200).json({ message: "loan details saved successfully" });
  } catch (error) {
    res.status(404).json({ message: "something error please try again" });
  }
});

app.post("/fetchById", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.body);
    const data = await loanModel.findById(id);

    console.log(data);

    res
      .status(200)
      .json({ message: "loan details saved successfully", data: data });
  } catch (error) {
    res.status(404).json({ message: "something error please try again" });
  }
});

// listen app
app.listen(port, () => {
  console.log("listening on port " + port);
});
