import emailTransporter from "../config/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();
const sendWelcomeMail = async (email,data) => {
  try {
    const html = `
    <div style="font-family: 'Arial', sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px;">
      <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style=" text-align: center;">
            <img src="cid:logo" alt="PAA Creations" style="max-width: 30%; height: auto;">
          </td>
        </tr>
        <tr>
          <td style="padding: 5px 20px 20px 20px ; text-align: center;">
            <h1 style="color: #333333;">Hi there!</h1>
            <p style="color: #555555; font-size: 16px;">Congratulations, your order is placed!</p>
            <p style="color: #555555; font-size: 16px;"><ul>
             ${Object.entries(data)
               .map(([key, value]) => `<li>${key}: ${value}</li>`)
               .join("")}
            <li> Order Id: ${data.orderId}</li>
            <li> Name: ${data.cakeName}</li>
            <li> Amount: ${data.price}</li>
            <li> Quantity: ${data.quantity}</li>
            <li> Customization: ${data.customization}</li>
            <li> Address: ${data.address}</li>
            <li> Mode Of Payment: ${data.modeOfPayment} </li>
            <li> Order Status: ${data.orderStatus}</li>
            <li> Payment Status: ${data.paymentStatus}</li></ul></p>
            <p style="color: #555555; font-size: 16px;">Check out our latest treats and place your order for a delightful experience!</p>
            <a href="http://3.6.76.192:3000/" style="display: inline-block; background-color:  #ffee58; color: #000000; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 20px;">Explore Now</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color:  #ffee58; color: #000000;">
            <p style="margin: 0;">Thank you for choosing PAA Creations - where sweetness meets happiness!</p>
            <sub style="margin: 0;">This is an automatically generated mail.</sub>
          </td>
        </tr>
        
      </table>
     

    </div>`;
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: "WELCOME TO PAA Creations!",
      html: html,
      attachments: [
        {
          filename: "paa-creations-logo.png",
          path: process.cwd() + "/images/paa-creations-logo.png",
          cid: "logo",
        },
      ],
    };

    emailTransporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error in sending Welcome Mail Transporter:" + err);
      } else {
        console.log("Successfully sent Welcome Email");
      }
    });
  } catch (err) {
    console.log("ERROR in sending welcome mail: ", err);
  }
};

export default sendWelcomeMail;
