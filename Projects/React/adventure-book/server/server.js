
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const usersLogin = require("./model/userLoginSchema");

const port = 8005;

app.listen(port, () => {
  console.log(`server started at port - ${port}`);
});
app.use(express.json());
app.use(cors());
app.use(router);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await usersLogin.findOne({ email: email });

    if (check) {
      res.json("exists!");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    console.log(error);
  }
});

//Signup

app.post("/signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const data = {
    firstname: fname,
    lastname: lname,
    email: email,
    password: password,
  };

  try {
    const check = await usersLogin.findOne({ email: email });

    if (check) {
      res.json("exists!");
    } else {
      res.json("not exist");
      await usersLogin.insertMany([data]);
    }
  } catch (error) {
    alert(error);
    console.log(error);
  }
});

app.use("/uploads", express.static("./uploads"));
