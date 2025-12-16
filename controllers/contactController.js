const Contact = require("../models/ContactModel");
const sendMainEmail = require("../untils/sendMainEmail");
const sendThankYou = require("../untils/sendThankYou");



exports.submitForm = async (req,res) =>{
    try{
        const {name,email,phone,company,country,flag,message,}=req.body;

        //main Email
        const mainemail =  sendMainEmail(req.body);

        const savedata =   Contact.create({name,email,phone,company,country,message,});

        await Promise.all([mainemail,savedata]);
        
        res.json({
            success:true,
            message:"Form sbmited successfully"
        })
    }catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"failed"
        });
    }
}