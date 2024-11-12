import { useState } from "react";
import Hamburger from "./HamburgerContent/Hamburger";

export default function ThirdHeaderPart(): JSX.Element {

  return (
    <div className="other">
      <div className="login">
        <p>Kirjaudu</p>
        <img src="/photo/login.png" alt="img" />
      </div>
      <div className="search">
        <p>Hae</p>
        <img className="search__img" src="/photo/lataus.png" alt="img" />
      </div>
      <Hamburger/>
    </div>
  );
}
