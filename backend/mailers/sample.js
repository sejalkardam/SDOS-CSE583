import { emailTransporter } from "../config/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();
console.log();
export const sendMail = async (email) => {
  try {
    const html = `
    <div style="font-family: 'Arial', sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px;">
      <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <img src="cid:logo" alt="PAA Creations" style="max-width: 100%; height: auto;">
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center;">
            <h1 style="color: #333333;">Hi there!</h1>
            <p style="color: #555555; font-size: 16px;">We hope this email finds you well. Thank you for being a valued customer of PAA Creations.</p>
            <p style="color: #555555; font-size: 16px;">Our ovens are fired up, and our bakers are ready to create something special for you.</p>
            <p style="color: #555555; font-size: 16px;">Check out our latest treats and place your order for a delightful experience!</p>
            <a href="http://3.6.76.192:3000/" style="display: inline-block; background-color: #ee6c4d; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 20px;">Explore Now</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #ee6c4d; color: #ffffff;">
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

    emailTransporter.sendMail(mailOptions, function(err,data){
      if(err){
        console.log("Error in sending Sample Mail Transporter:"+err);
      }
      else{
        console.log('Successfully sent sample Email');
      }
    });
  } catch (err) {
    console.log("ERROR in sending sample mail: ", err);
  }
};
