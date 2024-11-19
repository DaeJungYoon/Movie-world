import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Movie World</Link>
        </li>
        <button>
          <Link to="/login">login</Link>
        </button>
      </ul>
    </header>
  );
}
