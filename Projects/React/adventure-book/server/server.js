const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");

const port = 8005;

app.listen(port, () => {
  console.log(`server started at port - ${port}`);
});
app.use(express.json());
app.use(cors());
app.use(router);

app.use("/uploads", express.static("./uploads"));
