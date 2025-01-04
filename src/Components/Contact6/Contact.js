import React from "react";
import "./Contact.css";
import mail_icon from "../../Images/mail_icon.jpg";
import location_icon from "../../Images/location_icon.jpg";
import call_icon from "../../Images/phone_icon.jpg";

function Contact() {

  // eslint-disable-next-line no-unused-vars
  const [result,setResult] = React.useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c0c63c63-b5f4-46d7-829b-4b6c97ca3696");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully to Website Developer:(Aman)");
      alert(data.message="Email sent to the Developer")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("error 404",data);
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="mail" src={mail_icon} alt="" /> <p>rohillaaman69@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img className="call" src={call_icon} alt="" />
              <p>8168971613</p>
            </div>
            <div className="contact-detail">
              <img className="location" src={location_icon} alt="" />
              <p>India</p>
            </div>
            <div className="contact-detail">
              {/* <img src={} alt=""/> <p></p> */}
            </div>
            <div className="contact-detail">
              {/* <img src={} alt=""/> <p></p> */}
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" spellCheck placeholder="Enter your name" name="name"/>
          <label>Your Email</label>
          <input type="email" mail_icon placeholder="Enter your email" name="email"/>
          <label>Write your message here</label>
          <textarea name="message" rows='8' spellCheck placeholder="Enter your message" ></textarea>
          <button className="contact-submit" type="submit"  >Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
