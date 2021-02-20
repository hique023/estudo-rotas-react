import React from "react";

import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

import "./Social.css";

export default function Social() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/dev_insano/?hl=pt-br" target="blank">
        <img src={instagram} alt="logo do instagram" />
      </a>
      <a href="https://github.com/hique023" target="blank">
        <img src={github} alt="logo do github" />
      </a>
      <a
        href="https://www.linkedin.com/in/pedro-henrique-s-de-camargo-343808117/"
        target="blank"
      >
        <img src={linkedin} alt="logo do linkedin" />
      </a>
    </div>
  );
}
