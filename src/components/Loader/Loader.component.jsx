import React from "react";
import { FaCookieBite } from "react-icons/fa";
import "./Loader.style.scss";
export default function Loader() {
  return (
    <section className="loader">
      <div className="loader-brand">
        <FaCookieBite className="loader-brand__logo" />
        <h1 className="loader-brand__name">Freecipes</h1>
        <div className="loader__spinner"></div>
      </div>
    </section>
  );
}
