import React from "react";
import MovieKategorie from "./MovieKategorie";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/kategorie">Movie ON!</Link>
    </>
  );
}
