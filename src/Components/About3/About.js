import React from "react";
import "./About.css";
import profile_img from "../../Images/heroimg.jpg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img className="about-logo" src={about_me} alt="image"></img> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile-img" src={profile_img} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Website Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for Website development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: "50%" }} />
            </div>
            {/* <div className="about-skill"><p>C & C++</p> <hr style={{width:'50%'}} /> </div> */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
