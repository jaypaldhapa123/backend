module.exports = (name,email,phone,company,flag,country,message) =>{
    return `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; background-color:#f8fafc; padding: 20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background-color:#f8fafc; padding:20px; text-align:left; font-size:24px; font-weight:bold; color:#2563eb;">
            Web<span style="color:#1e40af;">Zentra</span>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:30px; text-align:center;">
            <div style="display:inline-block; background-color:#dbeafe; color:#1e40af; font-weight:600; padding:5px 15px; border-radius:50px; font-size:14px; margin-bottom:15px;">WEEK LAUNCH OFFER</div>
            
            <h2 style="font-size:22px; color:#1e293b; margin-bottom:15px;">Launch Special: 50% OFF All Services</h2>
            
            <p style="color:#64748b; font-size:16px; margin-bottom:25px; line-height:1.5;">
              Hi ${req.body.name || "there"},<br><br>
              Thank you for contacting WebZentra! Celebrate our launch with an exclusive 50% discount on all software and web development services. Limited to the first week only for new clients.
            </p>

            <!-- Trust indicators with icons -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:25px;">
              <tr>
                <td align="center" style="font-size:0;">
                  <!-- Icon 1 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/1024px-Eo_circle_light-blue_checkmark.svg.png?20200417144731" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">Premium Quality</span>
                  </div>

                  <!-- Icon 2 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://images.all-free-download.com/images/graphiclarge/blue_background_clock_icon_vector_280580.jpg" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">On-Time Delivery</span>
                  </div>

                  <!-- Icon 3 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/7611/7611368.png" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">24/7 Support</span>
                  </div>
                </td>
              </tr>
            </table>

            <a href="https://webzentra.com" style="display:inline-block; background-color:#2563eb; color:#ffffff; text-decoration:none; padding:12px 20px; font-weight:600; border-radius:10px; box-shadow:0 6px 12px rgba(37,99,235,0.25);">Claim Offer Now</a>

            <p style="margin-top:20px; font-size:14px; color:#64748b;">
              Offer expires in: <span style="color:#1e40af; font-weight:600;">7 days</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f8fafc; padding:15px; text-align:center; font-size:12px; color:#64748b;">
            No hidden fees. No long-term contracts. Cancel anytime.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
}