import emailTransporter from "../config/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();
const sendContactMail = async (email,data) => {
  try {
    const html = `
    <div style="font-family: 'Arial', sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px;">
      <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        
        <tr>
          <td style="padding: 20px; ">
            <h1 style="color: #333333;">Hi there!</h1>
            <p style="color: #555555; font-size: 16px;">A new message is sent by a customer</p>
            <p style="color: #555555; font-size: 16px;"><ul><li>Name : ${data.name}</li>
            <li>Phone: ${data.phone}</li><li>Email: ${data.email}</li><li>Message: ${data.message}</li></ul></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #ffee58; color: #000000;">
            <sub style="margin: 0;">This is an automatically generated mail.</sub>
          </td>
        </tr>
        
      </table>
     

    </div>`;
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: "New Message from Contact Us",
      html: html
    };

    emailTransporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error in sending Contact Us Transporter:" + err);
      } else {
        console.log("Successfully sent Contact Us Mail");
      }
    });
  } catch (err) {
    console.log("ERROR in sending sample mail: ", err);
  }
};

export default sendContactMail;
