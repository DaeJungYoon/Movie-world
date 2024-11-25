import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Movie World</h1>
      </Link>
    </header>
  );
}
