import React from "react";

import twitter from "../assets/Twitter-Icon.png";
import facebook from "../assets/Facebook-Icon.png";
import instagram from "../assets/Instagram-Icon.png";
import github from "../assets/GitHub-Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/home">
        <img alt="twitter" src={twitter} />
      </a>
      <a href="https://www.facebook.com/">
        <img alt="facebook" src={facebook} />
      </a>
      <a href="https://www.instagram.com/">
        <img alt="instagram" src={instagram} />
      </a>
      <a href="https://github.com/vaclavsrajer">
        <img alt="github" src={github} />
      </a>
    </div>
  );
}
