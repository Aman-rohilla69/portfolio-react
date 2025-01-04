// import React, { useState } from "react";
import "./Footer.css";
import footer_logo from '../Images/logo.jpg';
import mail_icon from '../Images/mail_icon.jpg';
function Footer(){ 
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="logo-img" src={footer_logo} alt=""/>  
        <p>I am a website developer from, USA with 1+ years of experience in HTML,CSS,JS and MERN Stack.</p>
        </div>
        <div className="footer-top-right" >
            <div className="footer-email-input">
                <img className="mail" src={mail_icon} alt="" /> 
                <input type="email" placeholder="Enter your email"/> 
            </div>
            <div className="footer-subscribe" >Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
  <p className="footer-bottom-left"> @ 2024 Aman Rohilla. All rights reserved</p>
      <div className="footer-bottom-right" >
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
       </div>
      </div>
    </div>
  );
}

export default Footer;
