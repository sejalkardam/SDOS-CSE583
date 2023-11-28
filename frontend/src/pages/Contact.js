import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../Contact.css";
import Facebook from "../images/facebook2.png";
import Instagram from "../images/instagram2.png";
import Whatsapp from "../images/whatsapp2.png";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate();

  const onCAKESTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onPaaCreationsLogo11Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const contactFormSubmit = async () => {
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const body = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    try {
      const API_URL = "http://localhost:5000";

      const response = axios.post(
        `${API_URL}/api/seller/contactUsMail`,
         body
      );

      
    } catch (err) {
      console.log(err);
    }
    location.reload();
  };

  return (
    <div className="contact-container">
      <div className="Bg_Pic">
        <h1 className="header-text">Freshly Baked Eggless Cakes</h1>
        <div className="yellow-underline"></div>
        <p className="paragraph-text">
          Have questions? Interested in our designer cakes? We’d love to talk to
          you! Use our contact form below to send us a message. We’ll respond
          just as soon as we can.
        </p>
        <div className="gap-div"></div>
      </div>

      <div className="container">
        <div className="column">
          {/* Content for the first column */}
          <h2 className="header-text2">Contact Us</h2>
          <p className="paragraph-text2">
            <b>Address</b>
            <br></br>A-1802, Amrapali Sapphire, Sector-45, Noida
          </p>
          <div className="gap-div2"></div>
          <p className="paragraph-text2">
            +91-9911114128<br></br>
            <a
              href="mailto:prachi_153@rediffmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              prachi_153@rediffmail.com
            </a>
          </p>
          <div className="gap-div2"></div>
          <p className="paragraph-text2">
            <b>Working Hours</b>
            <br></br>Monday - Sunday:<br></br>10:00-22:00
          </p>
          <div className="social-icons">
            <a
              href="https://wa.me/919911114128"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/paa.creations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/paacreations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="column">
          <h2 className="header-text2">Message Us</h2>
          <form>
            <div className="left-name">
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input-group">
              <input type="text" id="name" name="name" required />
              <div className="required-indicator">(Required)</div>
            </div>

            <div className="left-name">
              <label htmlFor="name">Email Address</label>
            </div>
            <div className="input-group">
              <input type="text" id="email" name="email" />
              {/* <div className="required-indicator">(Required)</div> */}
            </div>

            <div className="left-name">
              <label htmlFor="name">Phone Number</label>
            </div>
            <div className="input-group">
              <input type="text" id="phone" name="phone" required />
              <div className="required-indicator">(Required)</div>
            </div>

            <div className="left-name">
              <label htmlFor="name">Your Message</label>
            </div>
            <div className="input-group">
              <textarea
                type="text"
                id="message"
                name="message"
                className="taller-input"
                required
              />
              <div className="required-indicator">(Required)</div>
            </div>

            <button
              onClick={contactFormSubmit}
              type="button"
              className="button-formatting"
            >
              Let's Talk
            </button>
          </form>
          {/* Content for the second column */}
        </div>
      </div>
      <div className="gap-div"></div>
    </div>
  );
};

export default Contact;
