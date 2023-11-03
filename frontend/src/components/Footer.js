import React from 'react';
import '../Footer.css'; // Import the CSS file
import Cake_Symbol from '../images/Cake_symbol.png';
import Whatsapp from '../images/whatsapp.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';


export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="yellow-box"></div> */}
      <div className="yellow-line"></div>
      <div className="yellow-box">
      <img src={Cake_Symbol} alt="symbol" />
      </div>
      <div className="follow-text">Follow us</div> {/* Added "Follow us" text */}
      
      <div data-testid = "socialicons" className="social-icons">
        <a href="https://wa.me/919911114128" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://www.instagram.com/paa.creations" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/paacreations" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" />
        </a>
      </div>
      <div className="email-text">
        <p><a href="mailto:prachi_153@rediffmail.com" target='_blank' rel='noopener noreferrer'>prachi_153@rediffmail.com</a></p>
        <p>+91 9911114128</p>
        <p>Noida - India</p>
      </div>
    </div>
  );
}
