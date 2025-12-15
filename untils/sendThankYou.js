const transpotar = require("./transporter");



const sendThankYou = async (data) =>{
    try{
        await transpotar.sendMail({
            from:"contact.webzentra@gmail.com",
            to:data.email,
            subject:"Thank you for contacting WebZentra",
            html:`<p>Hi ${data.name || "there"},</p>
            <p>Thank you for reaching out. We will get back to you soon!</p>
            <p>- Webzentra Team</p>`
        });
    }catch(err){
        console.log("main mail error",err);
    }
};

module.exports = sendThankYou;