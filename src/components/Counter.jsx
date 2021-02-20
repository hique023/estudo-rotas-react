import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Social from "./Social";

import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function clean() {
    setCounter(counter - counter);
  }

  return (
    <div className="content">
      <div className="content-header">
        <div className="button-back">
          <Link to="/">
            <FiArrowLeft size={25} color="black" />
          </Link>
        </div>
        <h1>Counter</h1>
      </div>
      <hr />

      <div className="content-body">
        <div className="counter-body">
          <h1 className="counter">{counter}</h1>
          <div className="content-body-text">
            <button onClick={increment}>Increment</button>
            <button onClick={clean}>Clean</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="content-body-social">
        <Social />
      </div>
    </div>
  );
}
