import React from "react";
import { Link } from "react-router-dom";

import Social from "./Social";

import "./Principal.css";

import landingpage from "../assets/landing-page.png";

export default function Principal() {
  return (
    <div className="content">
      <div className="content-header">
        <h1>Home</h1>
      </div>
      <hr />

      <div className="content-body">
        <div className="content-body-text">
          <h1>Olá!</h1>
          <h2>
            Apresento este projeto criado em React para treinar alguns conceitos
            como:
          </h2>
          <ul>
            <li>Componentes;</li>
            <li>Rotas;</li>
            <li>Estado;</li>
            <li>JSX;</li>
            <li>Imutabilidade.</li>
          </ul>
          <h2>
            Conheça o sistema de contagem selecionando "Counter" e conheça um
            pouco mais sobre minha jornada em "About".
          </h2>
        </div>
        <div className="content-body-links">
          <Link to="/counter">
            <button>Counter</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </div>
        <div className="content-body-image">
          <img src={landingpage} alt="ilustração de landing page" />
        </div>
      </div>
      <hr />
      <div className="content-body-social">
        <Social />
      </div>
    </div>
  );
}
