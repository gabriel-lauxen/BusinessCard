import React from "react";
import MyPhoto from "../assets/MyPhoto.jpeg"
import EmailButton from "./EmailButton";
import LinkedinButton from "./LinkedinButton"
import Footer from "./Footer";

export default function BusinessCard() {
  return (
    <div className="business-card">
      <div className="img-container">
        <img className="profile-photo" src={MyPhoto} />
      </div>
      <div className="main-content">
        <div className="title-part">
          <h1>Gabriel Lauxen</h1>
          <h4>Frontend Developer</h4>
          <h5>React | Vue | Quasar | Ionic | JS</h5>
          <div className="buttons-container">
            <EmailButton/>
            <LinkedinButton/>
          </div>
        </div>
        <div>
          <h2>About</h2>
          <p>I'm an Brazilian Frontend developer who is actually learning React. 
            I work developing software for different companies in JavaScript with Vue, Quasar frameworks.  </p>
          <h2>Interests</h2>
          <p>Music. Hiking. Travel. Meditation. Food. Technology</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}