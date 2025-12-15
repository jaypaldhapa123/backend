const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    compnay:String,
    country:String,
    message:String
});

module.exports = mongoose.model("ContactForm",ContactSchema);