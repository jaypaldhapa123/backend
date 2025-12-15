const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");


// middleware

app.use(express.json());
// Allow requests from your frontend domain
app.use(cors({
  origin: "https://webzentra.netlify.app", // or "*" for all origins (not recommended for production)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//connect mongodb

const connectDB = require("./config/connectDB");
connectDB();

app.use("/formdata",require("./routes/contactRoute"))

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
