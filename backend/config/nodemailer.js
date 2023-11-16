import dotenv from "dotenv";
dotenv.config();
import { createTransport } from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

function createTransporter() {
  try {
    
    const accessToken = oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.log("Error in getting Access Token: ", err);
      }
      return token;
    });

    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER_EMAIL,
        accessToken: accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });
    return transporter;
  } catch (err) {
    return err;
  }
}

export let emailTransporter=createTransporter();
