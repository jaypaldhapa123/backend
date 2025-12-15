const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();


// middleware

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//connect mongodb

const connectDB = require("./config/connectDB");
connectDB();

app.use("/formdata",require("./routes/contactRoute"))

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
