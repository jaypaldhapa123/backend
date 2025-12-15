module.exports = (data) =>{
    return `
    <div style="font-family: Arial, sans-serif; font-size:14px; color:#222; padding:10px;">
  <div style="max-width:600px; margin:0 auto; padding:15px; border:1px solid #ddd; border-radius:4px;">
    
    <h3 style="margin:0 0 10px 0; font-size:18px; font-weight:600;">
      New Contact Form Message
    </h3>

    <p style="margin:0 0 12px 0; color:#555;">
      You received a new message from your website.
    </p>

    <p style="margin:6px 0;"><strong>Name:</strong> ${data.name}</p>
    <p style="margin:6px 0;"><strong>Email:</strong> ${data.email}</p>
    <p style="margin:6px 0;"><strong>Phone:</strong> ${data.phone}</p>
    <p style="margin:6px 0;"><strong>Service:</strong> ${data.company}</p>
    <p style="margin:6px 0;"><strong>Country:</strong>  <img src="${data.flag}">  ${data.country}</p>
    <p style="margin:6px 0;"><strong>Message:</strong><br><br>${data.message}</p>

    <hr style="border:none; border-top:1px solid #eee; margin:15px 0;">

    <p style="font-size:12px; color:#999; margin:0;">
      This email was automatically generated.
    </p>

  </div>
</div>`
}