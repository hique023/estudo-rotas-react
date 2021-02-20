import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Social from "./Social";
import websites from "../assets/websites.png";

import "./About.css";

export default function About() {
  return (
    <div className="content">
      <div className="content-header">
        <div className="button-back">
          <Link to="/">
            <FiArrowLeft size={25} color="black" />
          </Link>
        </div>
        <h1>About</h1>
      </div>
      <hr />

      <div className="content-body">
        <div className="content-body-text">
          <h2>Olá! Meu nome é Pedro Henrique e é muito bom te ver por aqui!</h2>
          <h3>
            Atualmente curso MBA em Mobile Development na FIAP e sou graduado em
            Ciência da Computação pela UNIP.
          </h3>
          <h3>
            Sempre me encantei por tecnologia e principalmente desenvolvimento
            de sistemas. Atualmente o foco dos meus estudos são tecnologias WEB,
            como:
            <ul>
              <li>React;</li>
              <li>React Native;</li>
              <li>Node.js.</li>
            </ul>
          </h3>
        </div>
        <div className="content-body-image">
          <img src={websites} alt="ilustração de website" />
        </div>
      </div>
      <hr />
      <div className="content-body-social">
        <Social />
      </div>
    </div>
  );
}
