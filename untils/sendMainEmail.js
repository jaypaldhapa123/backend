const transpotar = require("./transporter");
const mainAdminTemplate = require("../tempates/mainAdminTemplate");

console.log(mainAdminTemplate);


const sendMainEmail = async (data) =>{
    try{
        const finalmail = await mainAdminTemplate(data);
        await transpotar.sendMail({
            from:"jaypaldhapa7990@gmail.com",
            to:"contact.webzentra@gmail.com",
            subject:"New Contact Form Submission",
            html:finalmail
        });
    }catch(err){
        console.log("main mail error",err);
    }
};

module.exports = sendMainEmail;