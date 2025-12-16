const Contact = require("../models/ContactModel");
const sendMainEmail = require("../untils/sendMainEmail");
const sendThankYou = require("../untils/sendThankYou");
const {Resend} = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);


exports.submitForm = async (req,res) =>{
    try{
        const {name,email,phone,company,country,flag,message,}=req.body;

        //main Email
        await sendMainEmail(req.body);
        // const mainemail =  sendMainEmail(req.body);

        //AutoReply Thank you Email
        // await sendThankYou(req.body);
        // const thankyoumail =  sendThankYou(req.body);

        //save into database
        // await Contact.create({name,email,phone,company,country,message,});

        //resend mail

        const data = await resend.emails.send({
            from:"contact  <onboarding@resend.dev>",
            to:["contact.webzentra@gmail.com"],
            subject:"Resnd test email",
            html:`<h1> new message</h1>`
        });

        const savedata =  await Contact.create({name,email,phone,company,country,message,});

        // await Promise.all([sendMainEmail,thankyoumail,savedata]);
        
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