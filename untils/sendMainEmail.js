const transpotar = require("./transporter");
const mainAdminTemplate = require("../tempates/mainAdminTemplate");
const {Resend} = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

console.log(mainAdminTemplate);


const sendMainEmail = async (data) =>{
    try{
        const finalmail = await mainAdminTemplate(data);
   
        await resend.emails.send({
            from:"contact  <onboarding@resend.dev>",
            to:["contact.webzentra@gmail.com"],
            subject:"Resnd test email",
            html:finalmail
        });
    }catch(err){
        console.log("main mail error",err);
    }
};

module.exports = sendMainEmail;