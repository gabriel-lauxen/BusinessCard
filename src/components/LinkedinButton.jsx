import React from "react";
import LinkedinIcon from "../assets/linkedin.svg"

export default function EmailButton() {
  return (
    <div className="linkedin-button card-button">
      <img className="button-icon" src={LinkedinIcon} />
      <h1 className="button-text">Linkedin</h1>
    </div>
  )
}