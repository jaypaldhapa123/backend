const express = require("express");
const router = express.Router();
// const ContactForm = require("../models/ContactModel");
const {submitForm} = require("../controllers/contactController")


router.post("/",submitForm);

module.exports = router;