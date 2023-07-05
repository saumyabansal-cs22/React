import React from "react";
import Reactdom from "react-dom";

const fname = "Saumya";
const lname = "Bansal";
const num = Math.floor(Math.random() * 10);

Reactdom.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
