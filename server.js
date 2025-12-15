const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");


// middleware

app.use(express.json());
app.use(cors({
  origin: "*" // for testing; later replace with your Netlify URL
}));

//connect mongodb

const connectDB = require("./config/connectDB");
connectDB();

app.use("/formdata",require("./routes/contactRoute"))

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
