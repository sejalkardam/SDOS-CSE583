import { createTransport } from "nodemailer";
import { renderFile } from "ejs";
import { join } from "path";

import { NODEMAILER_EMAIL_ID, NODEMAILER_PASS } from "../config/config";

let transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: `${NODEMAILER_EMAIL_ID}`,
    pass: `${NODEMAILER_PASS}`,
  },
});

let renderTemplate = (data, relativePath) => {
  let mailHTML;
  renderFile(
    join(__dirname, "../views/mailers", relativePath),
    data,
    function (err, template) {
      if (err) {
        console.log("Error in rendering email template: ", err);
        return;
      }
      mailHTML = template;
    }
  );
  return mailHTML;
};

export {transporter , renderTemplate};