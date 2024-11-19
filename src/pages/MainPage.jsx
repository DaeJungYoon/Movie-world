import React from "react";
import MovieKategorie from "./MovieKategorie";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Movie World</h1>
      <button>Login</button>
      <Link to="/kategorie">Movie ON!</Link>
    </>
  );
}
