import React from "react";
import email from "../assets/email.png";

export default function Info() {
  return (
    <div className="info">
      <h2>Václav Šrajer</h2>
      <h4>Frontend Developer</h4>
      <p>vaclavsrajer.website</p>
      <a href="https://www.youtube.com">
        <button type="button">
          <img src={email} alt="email" />
          Email
        </button>
      </a>
    </div>
  );
}
