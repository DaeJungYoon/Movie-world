import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Movie World</Link>
        </li>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/search">Search</Link>
        </button>
      </ul>
    </header>
  );
}
