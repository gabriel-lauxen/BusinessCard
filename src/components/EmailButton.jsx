import React from "react";
import MailIcon from "../assets/Mail.svg"

export default function EmailButton() {
  return (
    <div className="email-button card-button">
      <img className="button-icon" src={MailIcon} />
      <h1 className="button-text">Email</h1>
    </div>
  )
}