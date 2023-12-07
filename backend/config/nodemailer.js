import dotenv from "dotenv";
dotenv.config();
import { createTransport } from "nodemailer";
import { google } from "googleapis";
let oauth2Client= null;

try{
  const OAuth2 = google.auth.OAuth2;
  oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

}
catch(err){
  console.log("Error in Oauth Instance");
  console.log(err);
}


async function createTransporter() {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transporter = await createTransport({
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
    console.log("Error in createTransporter function");
    console.log(err);
    return err;
  }
}

const emailTransporter=await createTransporter();

export default emailTransporter;


