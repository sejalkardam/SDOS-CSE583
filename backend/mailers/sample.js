import { transporter } from "../config/nodemailer";
import { CURRENT_URL, NODEMAILER_EMAIL_ID } from "../config/config";

export async function approvedDues(admin, email) {
  let htmlString = `
            <div>
                <p>Hi ${fetchName(email)}!</p>
                <br>
                <p>Congratulations! Your No-Dues has been approved for the ${
                  adminObj["originalAdminName"]
                } department.</p>
                <br>
                <p>Thanks!</p>
                <p>${adminObj["displayName"]}</p>
                <p>[${displayAddress}]</p>

                
            </div>`;

  let sub = `No Dues Approved for ${adminObj["originalAdminName"]} Department`;

  transporter.sendMail(
    {
      from: `${NODEMAILER_EMAIL_ID}`,
      to: email,
      subject: sub,
      html: htmlString,
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail", err);
        return;
      }
      return;
    }
  );
}
